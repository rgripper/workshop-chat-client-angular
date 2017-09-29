import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { AppState } from 'store/app/state';
import { Store } from '@ngrx/store';
import { AccountState, AccountStateType } from 'store/app/account/state';
import { ChatActionType } from 'store/app/chat/reducer';
import { ChatService } from 'messaging/chat.service';
import { AppService } from 'store/app/AppService';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent {

    @Input() account: AccountState;

    readonly form: FormGroup;

    constructor(private appService: AppService, formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            messageText: ['', Validators.required]
        });
    }

    public send() {
        this.appService.sendMessage({ text: this.form.value.messageText });
    }
}
