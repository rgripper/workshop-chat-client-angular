import { User } from "./user"

export interface Message {
  id: any
  creationDate: Date
  senderId: number
  text: string
}