import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'messaging/message';
import { ChatState } from 'store/app/chat/state';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {
  @Input() chat: ChatState;
   
  constructor() {
    
  }

  ngOnInit() {
  }

}
