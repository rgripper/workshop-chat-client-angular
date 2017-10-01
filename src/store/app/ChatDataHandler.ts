import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AccountAction, AccountActionType } from './account/reducer';
import { Store } from '@ngrx/store';
import { ChatAction, ChatActionType } from './chat/reducer';
import { AppState } from './state';
import { JoinResult, AbstractChatDataHandler } from "messaging/chat.service";
import { Message } from "messaging/message";
import { User } from "messaging/user";
import 'rxjs/add/operator/first';

@Injectable()
export class ChatDataHandler extends AbstractChatDataHandler {
    constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute, private router: Router) { super(); }

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
            
            this.activatedRoute.queryParams.first().subscribe(queryParams => {
                const returnUrl = queryParams['returnUrl'] as string;
                this.router.navigate([returnUrl]); 
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