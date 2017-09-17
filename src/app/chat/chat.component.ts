import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app/state';
import { ChatState } from '../../store/app/chat/state';
import { Observable } from 'rxjs/Observable';

interface Model {
  
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private chat$: Observable<ChatState>;

  constructor(store: Store<AppState>) {
      this.chat$ = store.select(s => s.chat);
      console.log('this.chat', this.chat$);
  }

  ngOnInit() {
  }

}
