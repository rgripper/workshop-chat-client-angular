import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { User } from "messaging/user";
import { Store } from "@ngrx/store";
import { AppState } from "store/app/state";
import { ChatState } from "store/app/chat/state";
import { AppService } from "store/app/AppService";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  chat$: Observable<ChatState>

  constructor(store: Store<AppState>,private service:AppService) {
    this.chat$ = store.select(state => state.chat)
    
  }

  submitMessage(text:string) {
    this.service.sendMessage({ text})
  }

  ngOnInit() {
  }

}
