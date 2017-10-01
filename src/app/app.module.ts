import { DummyChatService } from '../messaging/dummy-chat.service';
import { AbstractChatDataHandler } from '../messaging/chat.service';
import { StoreModule, Store } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';

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
import { NotFoundComponent } from './not-found/not-found.component';
import { AppState } from 'store/app/state';

import 'rxjs/add/Operator/take';
import { createNewHosts, createInputTransfer, removeNgStyles } from '@angularclass/hmr';
import { environment } from 'environments/environment';

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
        NotFoundComponent,
    ],
    imports: [
        MdIconModule,
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        StoreRouterConnectingModule,
        StoreModule,
        AppStoreModule,
        BrowserAnimationsModule, MdButtonModule, MdInputModule, MdCardModule,
    ],
    providers: [
        AuthGuard,
        AppService,
        { provide: AbstractChatDataHandler, useClass: ChatDataHandler },
        { provide: ChatService, useClass: environment.useDummyChat ? DummyChatService : ChatService }, 
        { provide: ChatServerUrlToken, useValue: environment.chatServerUrl }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(public appRef: ApplicationRef,
        private _store: Store<AppState>, private router: Router) { }

    hmrOnInit(store: { rootState: AppState, restoreInputValues: any }) {
        console.log('store', store);
        if (!store || !store.rootState) return;
        console.log('222', store);
        // restore state by dispatch a SET_ROOT_STATE action
        if (store.rootState) {
            this._store.dispatch({
                type: 'SET_ROOT_STATE',
                payload: store.rootState
            });
            this.router.navigateByUrl(store.rootState.routerReducer.state.url);
        }

        if ('restoreInputValues' in store) { store.restoreInputValues(); }
        this.appRef.tick();
        Object.keys(store).forEach(prop => delete (store as any)[prop]);
    }
    hmrOnDestroy(store: any) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        this._store.take(1).subscribe(s => store.rootState = s);
        store.disposeOldHosts = createNewHosts(cmpLocation);
        store.restoreInputValues = createInputTransfer();
        removeNgStyles();
    }
    hmrAfterDestroy(store: any) {
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
