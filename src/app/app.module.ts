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



import { appRoutes } from "app/app.routes";
import { AuthGuard } from "app/account/auth-guard";
import { AppStoreModule } from "store/app/store.module";

import { AppService } from "store/app/AppService";
import { ChatService, ChatServerUrlToken } from "messaging/chat.service";
import { ChatDataHandler } from "store/app/ChatDataHandler";
import { NotFoundComponent } from './not-found/not-found.component';
import { AppState } from 'store/app/state';

import 'rxjs/add/operator/take';
import { createNewHosts, createInputTransfer, removeNgStyles } from '@angularclass/hmr';
import { environment } from 'environments/environment';
import { ChatComponent } from './chat/chat.component';
import { UserListComponent } from './chat/user-list/user-list.component';


@NgModule({
    declarations: [
        AppComponent,
        
        LoginComponent,
        
        NotFoundComponent,
        
        ChatComponent,
        
        UserListComponent,
        
        
    ],
    imports: [
        
        BrowserModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        StoreRouterConnectingModule,
        StoreModule,
        AppStoreModule,
        BrowserAnimationsModule,   
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
