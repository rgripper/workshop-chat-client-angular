import { User } from './user';
import { ChatState } from "store/app/chat/state";
import { ChatDataHandler } from "./chat.service";
import { Message } from './message';
import { SubmittedMessage } from './submitted-message';

export class DummyChatService {

    private chatState: ChatState = { messages:[], users: []};

    private readonly dummyNames = ['Sam', 'Bill', 'RubberyJoe', 'Jenny', 'Cyclepath9'];

    private lastMessageId = 0;

    private readonly initialChatState = { messages: [], users: [] };

    constructor(url: string, private handler: ChatDataHandler) {
        console.log(url);
        this.setUpHandler(handler);
    }

    join(userName: string) {
        const currentUser = { name: userName } as User;
        this.chatState = { ...this.initialChatState, users: [currentUser] };
        this.handler.handleJoinResult({ isSuccessful: true, initialData: this.chatState });
    }

    leave() {
        this.chatState = this.initialChatState;
    }

    sendMessage(messageSubmission: SubmittedMessage) {
        if (this.chatState.currentUser == undefined) throw new Error('Invalid state');
        this.lastMessageId++;
        const newMessage: Message = { ...messageSubmission, id: this.lastMessageId, senderName: this.chatState.data.currentUser.name, creationDate: new Date() };
        this.handler.handleMessageReceived(newMessage);
    }

    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private setUpHandler(handler: ChatDataHandler) {
        setInterval(() => {
            if (this.chatState.currentUser == undefined) return;

            const otherUsers = this.chatState.users.filter(x => x != (this.chatState as any).data.currentUser);
            const prob = Math.random();

            if (prob > 0.6) {
                return;
            }
            else if (prob > 0.2) {
                if (otherUsers.length == 0) return;
                const randomUser = otherUsers[this.getRandomInt(0, otherUsers.length)];
                this.lastMessageId++;
                const newMessage: Message = { id: this.lastMessageId, senderName: randomUser.name, text: `Message ${this.lastMessageId} from ${randomUser.name}`, creationDate: new Date() };
                handler.handleMessageReceived(newMessage);
                return;
            }
            else if (prob > 0.05) {
                const newUser = { id: Math.random(), name: this.getDummyUserName() };
                if (this.chatState.users.some(x => x.name == newUser.name)) return;
                this.chatState = { ...this.chatState, users: this.chatState.users.concat([newUser]) };
                handler.handleUserJoined(newUser);
                return;
            }
            else {
                if (otherUsers.length == 0) return;
                const leavingUser = otherUsers[this.getRandomInt(0, otherUsers.length)];
                this.chatState = { ...this.chatState, users: this.chatState.users.filter(x => x.name != leavingUser.name) };
                handler.handleUserReft(leavingUser.name);
                return;
            }
        }, 1000);

    }

    private getDummyUserName(): string {
        return this.dummyNames[this.getRandomInt(0, this.dummyNames.length)];
    }
}