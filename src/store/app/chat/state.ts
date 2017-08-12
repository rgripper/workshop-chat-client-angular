import { ChatData } from "messaging/chat-data"

export type ChatState = {
    readonly data?: ChatData
}

export const ChatState = {
    Initial: {} as ChatState
}