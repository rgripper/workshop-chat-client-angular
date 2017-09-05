import { Injectable } from '@angular/core';
import { AccountAction, AccountActionType } from './account/reducer';
import { Store } from '@ngrx/store';
import { ChatAction, ChatActionType } from './chat/reducer';
import { AppState } from './state';
import { JoinResult, AbstractChatDataHandler } from "messaging/chat.service";
import { Message } from "messaging/Message";
import { User } from "messaging/User";

@Injectable()
export class ChatDataHandler extends AbstractChatDataHandler {
    constructor(private store: Store<AppState>) { super(); }

    handleJoinResult(joinResult: JoinResult): void {
        this.dispatch({
            type: AccountActionType.SetAuthenticationResult,
            payload: joinResult.isSuccessful
                ? { user: joinResult.user }
                : { errorMessage: joinResult.errorMessage }
        });

        if (joinResult.isSuccessful) {
            this.dispatch({
                type: ChatActionType.Initialize,
                payload: { chatState: joinResult.initialData }
            });
        }
    }

    handleMessageReceived(message: Message): void {
        this.dispatch({
            type: ChatActionType.AddMessage,
            payload: { message }
        });
    }

    handleUserJoined(user: User): void {
        this.dispatch({
            type: ChatActionType.AddUser,
            payload: { user }
        });
    }

    handleUserReft(userId: number): void {
        this.dispatch({
            type: ChatActionType.RemoveUser,
            payload: { userId }
        });
    }

    private dispatch(action: ChatAction | AccountAction) {
        this.store.dispatch(action);
    }
}