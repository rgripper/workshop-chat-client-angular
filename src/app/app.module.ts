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
import { UserListComponent } from './chat/user-list/user-list.component';
import { UserListItemComponent } from './chat/user-list/user-list-item/component';
import { MessageListItemFromMeComponent } from './chat/message-list/message-list-item-from-me/component';
import { MessageListItemFromOthersComponent } from './chat/message-list/message-list-item-from-others/component';
import { MessageListComponent } from './chat/message-list/message-list.component';
import { MessageInputComponent } from './chat/message-input/message-input.component';
import { ChatComponent } from './chat/chat.component';
import { appRoutes } from "app/app.routes";
import { AuthGuard } from "app/account/auth-guard";
import { AppStoreModule } from "store/app/store.module";

import { MdButtonModule, MdInputModule, MdIconModule } from '@angular/material';
import { AppService } from "store/app/AppService";
import { ChatService, ChatServerUrlToken } from "messaging/chat.service";
import { ChatDataHandler } from "store/app/ChatDataHandler";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UserListComponent,
        UserListItemComponent,
        MessageListComponent,
        MessageListItemFromMeComponent,
        MessageListItemFromOthersComponent,
        MessageInputComponent,
        ChatComponent,
    ],
    imports: [
        MdIconModule,
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        StoreModule,
        AppStoreModule,
        BrowserAnimationsModule, MdButtonModule, MdInputModule
    ],
    providers: [AuthGuard, { provide: AbstractChatDataHandler, useClass: ChatDataHandler },
        { provide: ChatService, useClass: DummyChatService }, AppService, { provide: ChatServerUrlToken, useValue: 'localhost:35558' }],
    bootstrap: [AppComponent]
})
export class AppModule { }
