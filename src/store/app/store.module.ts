import { AppState } from './state';
import { combineReducers, Store, StoreModule, ActionReducerMap, ActionReducer } from '@ngrx/store';
import { chatStateReducer } from "store/app/chat/reducer";
import { accountStateReducer } from "store/app/account/reducer";
import { routerReducer } from '@ngrx/router-store';

export const ACTION_SET_ROOT_STATE = 'SET_ROOT_STATE';

const reducers: ActionReducerMap<AppState> = {
    routerReducer,
    chat: chatStateReducer,
    account: accountStateReducer
}

export function stateSetter(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function (state: AppState, action: any) {
        //console.log(action.type, action.payload);
        if (action.type === ACTION_SET_ROOT_STATE) {
            return action.payload;
        }
        return reducer(state, action);
    };
}

export const metaReducers = [stateSetter];

export const AppStoreModule = StoreModule.forRoot(reducers, { initialState: AppState.Initial, metaReducers });