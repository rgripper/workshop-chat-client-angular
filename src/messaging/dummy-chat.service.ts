import { Injectable } from '@angular/core';
import { User } from './user';
import { ChatState } from "store/app/chat/state";
import { AbstractChatDataHandler } from "./chat.service";
import { Message } from './message';
import { SubmittedMessage } from './submitted-message';

@Injectable()
export class DummyChatService {

    private chatState: ChatState = { messages:[], users: []};

    private currentUser?: User;

    private readonly dummyNames = ['Sam', 'Bill', 'RubberyJoe', 'Jenny', 'Cyclepath9'];

    private lastMessageId = 0;

    private readonly initialChatState = { messages: [], users: [] };

    constructor(private handler: AbstractChatDataHandler) {
        this.setUpHandler(handler);
    }

    join(userName: string) {
        this.currentUser = { id: 1999, name: userName };
        this.chatState = { ...this.initialChatState, users: [this.currentUser] };
        this.handler.handleJoinResult({ isSuccessful: true, initialData: this.chatState, user: this.currentUser });
    }

    leave() {
        this.currentUser = undefined;
        this.chatState = this.initialChatState;
    }

    sendMessage(messageSubmission: SubmittedMessage) {
        if (this.currentUser == undefined) throw new Error('Invalid state');
        this.lastMessageId++;
        const newMessage: Message = { ...messageSubmission, id: this.lastMessageId, senderId: this.currentUser.id, creationDate: new Date() };
        this.handler.handleMessageReceived(newMessage);
    }

    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    private setUpHandler(handler: AbstractChatDataHandler) {
        setInterval(() => {
            if (this.currentUser == undefined) return;

            const otherUsers = this.chatState.users.filter(x => x != this.currentUser);
            const prob = Math.random();

            if (prob > 0.6) {
                return;
            }
            else if (prob > 0.2) {
                if (otherUsers.length == 0) return;
                const randomUser = otherUsers[this.getRandomInt(0, otherUsers.length)];
                this.lastMessageId++;
                const newMessage: Message = { id: this.lastMessageId, senderId: randomUser.id, text: `Message ${this.lastMessageId} from ${randomUser.name}`, creationDate: new Date() };
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
                handler.handleUserReft(leavingUser.id);
                return;
            }
        }, 1000);

    }

    private getDummyUserName(): string {
        return this.dummyNames[this.getRandomInt(0, this.dummyNames.length)];
    }
}