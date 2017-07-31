import { combineReducers, Store, StoreModule } from '@ngrx/store';

export const AppStoreModule = StoreModule.forRoot({ chat: chatReducer })