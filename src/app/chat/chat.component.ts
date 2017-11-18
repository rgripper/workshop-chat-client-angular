import { Component, OnInit } from '@angular/core';
import { AppService } from 'store/app/AppService';
import { ChatData } from 'messaging/chat-data';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from 'store/app/state';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    chat$: Observable<ChatData>
    constructor(store: Store<AppState>) {
        this.chat$ = store.select((x) => x.chat);
    }

    ngOnInit() {
    }

}
