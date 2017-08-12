import { ChatData } from "messaging/chat-data";
import { User } from "messaging/User";

type Milliseconds = number

export type AccountState = {
    readonly user?: User
}