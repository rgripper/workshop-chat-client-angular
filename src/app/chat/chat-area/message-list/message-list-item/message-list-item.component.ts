import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'messaging/message';
import { User } from 'messaging/user';

@Component({
  selector: 'app-message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.scss']
})
export class MessageListItemComponent implements OnInit {
  
  @Input() message: Message;
  @Input() myUser: User;

  constructor() { }

  ngOnInit() {
  }

}
