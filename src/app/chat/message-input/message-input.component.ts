import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { AppState } from 'store/app/state';
import { Store } from '@ngrx/store';
import { AccountState, AccountStateType } from 'store/app/account/state';
import { ChatActionType } from 'store/app/chat/reducer';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

    @Input() account: AccountState;

    readonly form: FormGroup;
    private message: string;
    private store: Store<AppState>;

    constructor(store: Store<AppState>,formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            messageText: ['', Validators.required]
        });
        this.store = store;
        this.message = '';
    }

    ngOnInit() {
    }

    public send(e: any) {
        // TODO: Hmmmmmmmmmmmmm.... Hmmmmmmmm.... ??
        // Use chat service, instead of forcing a dispatch of a message to the store?
        if (this.account.type == AccountStateType.Authenticated) {
            const user = this.account.user;
            if (user === undefined) return;
            const message = {
                id: Date.now(),
                creationDate: new Date(),
                senderId: user.id,
                text: this.message,
            };
            this.store.dispatch({
                type: ChatActionType.AddMessage,
                payload: { message, },
            });
        }
    }
}
