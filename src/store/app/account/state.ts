import { ChatData } from "messaging/chat-data";
import { User } from "messaging/User";

type Milliseconds = number

 enum AccountStateType { Unknown, AuthenticationFailed, AuthenticatedAndInitialized, NotAuthenticated, Authenticating }

export type AccountState =
    | {
        readonly type: AccountStateType.Unknown
    }
    | {
        readonly type: AccountStateType.NotAuthenticated
    }
    | {
        readonly type: AccountStateType.Authenticating
    }
    | {
        readonly type: AccountStateType.AuthenticatedAndInitialized,
        readonly user: User
    }
    | {
        readonly type: AccountStateType.AuthenticationFailed,
        readonly message: string
    }

export const AccountState = {
    Initial: { type: AccountStateType.Unknown } as AccountState
}