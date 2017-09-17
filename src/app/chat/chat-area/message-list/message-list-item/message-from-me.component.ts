import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'messaging/Message';

@Component({
  selector: 'app-message-from-me',
  templateUrl: './message-from-me.component.html',
  styleUrls: ['./message-from-me.component.scss']
})
export class MessageFromMeComponent {
  @Input() message: Message;
}
