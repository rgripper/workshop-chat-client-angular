import { ChatData } from "messaging/chat-data"

export enum ChatStateType { AuthenticationFailed, AuthenticatedAndInitialized, NotAuthenticated, Authenticating }

export type ChatState =
    | {
        readonly type: ChatStateType.NotAuthenticated
    }
    | {
        readonly type: ChatStateType.Authenticating
    }
    | {
        readonly type: ChatStateType.AuthenticatedAndInitialized,
        readonly data: ChatData
    }
    | {
        readonly type: ChatStateType.AuthenticationFailed,
        readonly message: string
    }

export const ChatState = {
    Initial: {
        type: ChatStateType.NotAuthenticated
    } as ChatState
}