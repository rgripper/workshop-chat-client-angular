import { ChatData } from "messaging/chat-data"
import { User } from "messaging/User";
import { Message } from "messaging/Message";

export interface ChatState {
    readonly users: ReadonlyArray<User>
    readonly messages: ReadonlyArray<Message>
}

export const ChatState = {
  Initial: {
    users: [
      { name: 'watermelon-boy', id: 1, avatarUrl: 'https://static.pexels.com/photos/20787/pexels-photo.jpg', },
      { name: 'orange-student', id: 2, avatarUrl: 'https://cdn.pixabay.com/photo/2017/02/28/08/50/cat-2105214_1280.jpg', },
      { name: 'jacket-manufacturer', id: 3, avatarUrl: 'http://cdn.images.express.co.uk/img/dynamic/galleries/x701/177020.jpg', },
    ],
    messages: []
  } as ChatState
}