import { ChatData } from "messaging/chat-data"
import { User } from "messaging/user";
import { Message } from "messaging/message";

export interface ChatState {
    readonly users: ReadonlyArray<User>
    readonly messages: ReadonlyArray<Message>
}

export const ChatState = {
    Initial: {
        users: [],
        messages: []
    } as ChatState
}