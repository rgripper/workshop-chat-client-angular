import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'messaging/message';
import { User } from 'messaging/user';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  @Input() messages: Message[];
  @Input() myUser: User;

  constructor() {
  }

  ngOnInit() {
  }

}
