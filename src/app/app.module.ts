import { DummyChatService } from '../messaging/dummy-chat.service';
import { AbstractChatDataHandler } from '../messaging/chat.service';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';

import { UserListComponent } from './chat/chat-area/user-list/user-list.component';
import { UserListItemComponent } from './chat/chat-area/user-list/user-list-item/user-list-item.component';

import { MessageListItemComponent } from './chat/chat-area/message-list/message-list-item/message-list-item.component';
import { MessageListComponent } from './chat/chat-area/message-list/message-list.component';
import { MessageInputComponent } from './chat/message-input/message-input.component';

import { ChatAreaComponent } from './chat/chat-area/chat-area.component';
import { ChatComponent } from './chat/chat.component';


import { appRoutes } from "app/app.routes";
import { AuthGuard } from "app/account/auth-guard";
import { AppStoreModule } from "store/app/store.module";

import { MdCardModule, MdButtonModule, MdInputModule, MdIconModule } from '@angular/material';
import { AppService } from "store/app/AppService";
import { ChatService, ChatServerUrlToken } from "messaging/chat.service";
import { ChatDataHandler } from "store/app/ChatDataHandler";

@NgModule({
    declarations: [
        AppComponent,
        ChatAreaComponent,
        ChatComponent,
        LoginComponent,
        MessageInputComponent,
        MessageListComponent,
        MessageListItemComponent,
        UserListComponent,
        UserListItemComponent,
    ],
    imports: [
        MdIconModule,
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        StoreModule,
        AppStoreModule,
        BrowserAnimationsModule, MdButtonModule, MdInputModule, MdCardModule,
    ],
    providers: [AuthGuard, { provide: AbstractChatDataHandler, useClass: ChatDataHandler },
        { provide: ChatService, useClass: DummyChatService }, AppService, { provide: ChatServerUrlToken, useValue: 'localhost:35558' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
