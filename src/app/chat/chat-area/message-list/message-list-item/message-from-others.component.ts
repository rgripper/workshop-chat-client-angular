import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'messaging/Message';

@Component({
  selector: 'app-message-from-others',
  templateUrl: './message-from-others.component.html',
  styleUrls: ['./message-from-others.component.scss']
})
export class MessageFromOthersComponent {
  @Input() message: Message;
}
