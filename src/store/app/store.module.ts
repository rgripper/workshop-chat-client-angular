import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { chatStateReducer } from "store/app/chat/reducer";

export const AppStoreModule = StoreModule.forRoot({ chat: chatStateReducer });