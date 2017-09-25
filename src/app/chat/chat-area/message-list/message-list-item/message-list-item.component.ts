import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'messaging/message';
import { User } from 'messaging/user';

export interface MessageListItemInput {
    message: Message;
    isFromCurrentUser: boolean;
    sender: User;
}

@Component({
    selector: 'app-message-list-item',
    templateUrl: './message-list-item.component.html',
    styleUrls: ['./message-list-item.component.scss']
})
export class MessageListItemComponent implements MessageListItemInput {
    @Input() message: Message;
    @Input() isFromCurrentUser: boolean;
    @Input() sender: User;
}
