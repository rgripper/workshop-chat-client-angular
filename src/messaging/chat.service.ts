import { Injectable, InjectionToken, Inject } from '@angular/core';
import * as io from 'socket.io-client';
import { Message } from './message'
import { SubmittedMessage } from './submitted-message'
import { User } from './User'
import { ChatData } from "./chat-data"

export abstract class AbstractChatDataHandler {
    abstract handleJoinResult(x: JoinResult): void
    abstract handleUserJoined(x: User): void
    abstract handleUserReft(userId: number): void
    abstract handleMessageReceived(x: Message): void
}

type CustomServerEvent =
    | {
        type: 'MessageReceived',
        data: Message
    }
    | {
        type: 'UserJoined',
        data: User
    }
    | {
        type: 'UserLeft',
        data: { userId: number } // TODO type it
    }

export type JoinResult =
    | { isSuccessful: true, initialData: ChatData, user: User }
    | { isSuccessful: false, errorMessage: string }


export const ChatServerUrlToken = new InjectionToken<string>('chatServerUrl');

@Injectable()
export class ChatService {
    private readonly socket: SocketIOClient.Socket;

    constructor(@Inject(ChatServerUrlToken) url: string, handler: AbstractChatDataHandler) {
        this.socket = io(url, { transports: ['websocket'], autoConnect: false });
        this.socket.on('connect', () => console.log('conn'));
        this.socket.on('disconnected', () => console.log('disc'));

        this.setUpHandler(this.socket, handler);
        this.socket.connect();
    }

    join(userName: string): void {
        this.socket.emit('chat.client.join', userName);
    }

    leave(): void {
        this.socket.emit('chat.client.leave');
    }

    sendMessage(message: SubmittedMessage): void {
        this.socket.emit('chat.client.message', message);
    }

    setUpHandler(socket: SocketIOClient.Socket, handler: AbstractChatDataHandler): void {
        socket.on('chat.server.join-result', function (result: JoinResult) {
            console.debug('chat.server.join-result');
            handler.handleJoinResult(result);
        });

        socket.on('chat.server.event', function (event: CustomServerEvent) {
            switch (event.type) {
                case 'MessageReceived':
                    handler.handleMessageReceived(event.data);
                    return;
                case 'UserJoined':
                    handler.handleUserJoined(event.data);
                    return;
                case 'UserLeft':
                    handler.handleUserReft(event.data.userId);
                    return;
            }
        });
    }
}