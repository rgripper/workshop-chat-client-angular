import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'messaging/message';

@Component({
  selector: 'app-message-list-item',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class MessageListItemComponent implements OnInit {
  
  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }

}
