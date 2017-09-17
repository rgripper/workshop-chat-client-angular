import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app/state';
import { Component, OnInit } from '@angular/core';
import { Message } from 'messaging/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messages: Message[];
  title: string;

  constructor(store: Store<AppState>) {
    this.messages = [];
    this.title = 'Whatever';
    store.subscribe((state) => {
      this.messages = state.chat.messages.map(m => m);
    });
  }

  ngOnInit() {
  }

}
