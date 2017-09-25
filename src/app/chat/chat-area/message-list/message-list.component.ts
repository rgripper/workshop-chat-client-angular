import { Component, Input, OnInit, OnChanges, TrackByFunction } from '@angular/core';
import { Message } from 'messaging/message';
import { User } from 'messaging/user';
import { MessageListItemInput } from 'app/chat/chat-area/message-list/message-list-item/message-list-item.component';

interface SimpleChange<P> {
    previousValue: P;
    currentValue: P;
}

type SimpleChangeSet<T> = {
    [P in keyof T]?: SimpleChange<T[P]>;
}

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnChanges {
    @Input() messages: Message[];
    @Input() currentUser: User;
    @Input() users: User[];

    items: MessageListItemInput[];

    ngOnChanges(changes: SimpleChangeSet<MessageListComponent>) {
        if (changes.messages) {
            this.items = changes.messages.currentValue.map(x => this.createItemModel(x));
            console.log(this.items);
        }
    }

    getMessageId: TrackByFunction<MessageListItemInput> = (index, item) => item.message.id;

    createItemModel(message: Message): MessageListItemInput {
        const sender = this.users.find(x => x.id == message.senderId)!;
        return {
            message,
            sender,
            isFromCurrentUser: sender ? this.currentUser.id == sender.id : false
        }
    }
}
