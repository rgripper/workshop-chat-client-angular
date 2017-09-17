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
    messages: [
      { id: 1, creationDate: new Date("February 4, 2016 10:13:00"), senderId: 1, text: 'Booo', },
      { id: 2, creationDate: new Date("February 4, 2016 10:13:00"), senderId: 2, text: 'Who let this vulgar anonymous user into this chat?', },
      { id: 3, creationDate: new Date("February 4, 2016 10:13:00"), senderId: 3, text: 'I don\'t know, but we have to kick him out', },
      { id: 4, creationDate: new Date("February 4, 2016 10:13:00"), senderId: 2, text: 'I agree', },
      { id: 5, creationDate: new Date("February 4, 2016 10:13:00"), senderId: 3, text: 'Alright, reported the guy', },
      { id: 6, creationDate: new Date("February 4, 2016 10:13:00"), senderId: 1, text: 'Why~y~y~? I didn\'t do anything!', },
    ]
  } as ChatState
}