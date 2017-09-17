import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app/state';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'messaging/message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {
  @Input() messages: Message[];
  @Input() title: string;
}
