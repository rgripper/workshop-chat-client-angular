import { ChatData } from "messaging/chat-data";
import { User } from "messaging/user";

export enum AccountStateType { Unknown, Unauthenticated, Authenticating, Authenticated }

export type AccountState =
    | {
        readonly type: AccountStateType.Unknown
    }
    | {
        readonly type: AccountStateType.Unauthenticated,
        readonly errorMessage?: string
    }
    | {
        readonly type: AccountStateType.Authenticating
    }
    | {
        readonly type: AccountStateType.Authenticated,
        readonly user: User
    }

export const AccountState = {
    Initial: { type: AccountStateType.Unknown, user: undefined } as AccountState
}