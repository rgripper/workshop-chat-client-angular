import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store"
import { AppState } from "store/app/state"
import { AccountActionType } from "store/app/account/reducer"
import { ChatService } from "messaging/chat.service"
import { SubmittedMessage } from "messaging/submitted-message"

@Injectable()
export class AppService {
    constructor(private chatService: ChatService, private store: Store<AppState>) { }

    sendMessage(message: SubmittedMessage) {
        // client state update is NOT needed here, because server will broadcast this message back
        this.chatService.sendMessage(message); // update server state
    }
    join(userName: string) {
        this.store.dispatch({ type: AccountActionType.StartAuthentication }); // update client state
        this.chatService.join(userName); // update server state
    }
    leave() {
        this.store.dispatch({ type: AccountActionType.Leave }); // update client state
        this.chatService.leave(); // update server state
    }
}