import { User } from "./user"
import { Message } from './message'

export interface ChatData {
    readonly users: ReadonlyArray<User>
    readonly messages: ReadonlyArray<Message>
}

