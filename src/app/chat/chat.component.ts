import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app/state';
import { ChatState } from '../../store/app/chat/state';
import { Observable } from 'rxjs/Observable';
import { AccountState } from 'store/app/account/state';

interface Model {
  
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private chat$: Observable<ChatState>;
  private account$: Observable<AccountState>;

  constructor(store: Store<AppState>) {
      this.chat$ = store.select(s => s.chat);
      this.account$ = store.select(s => s.account);
  }

  ngOnInit() {
  }

}
