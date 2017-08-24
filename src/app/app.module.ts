import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { UserListComponent } from './chat/user-list/user-list.component';
import { MessageListComponent } from './chat/message-list/message-list.component';
import { MessageInputComponent } from './chat/message-input/message-input.component';
import { ChatComponent } from './chat/chat.component';
import { appRoutes } from "app/app.routes";
import { AuthGuard } from "app/account/auth-guard";
import { AppStoreModule } from "store/app/store.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    MessageListComponent,
    MessageInputComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    AppStoreModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
