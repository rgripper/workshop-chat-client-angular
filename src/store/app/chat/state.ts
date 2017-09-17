import { ChatData } from "messaging/chat-data"
import { User } from "messaging/User";
import { Message } from "messaging/Message";

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