import { AppState } from './state';
import { combineReducers, Store, StoreModule, ActionReducerMap } from '@ngrx/store';
import { chatStateReducer } from "store/app/chat/reducer";
import { accountStateReducer } from "store/app/account/reducer";

const reducers: ActionReducerMap<AppState> = {
    chat: chatStateReducer,
    account: accountStateReducer
}

export const AppStoreModule = StoreModule.forRoot(reducers, { initialState: AppState.Initial })