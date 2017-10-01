import { ChatState } from "./chat/state"
import { AccountState } from "store/app/account/state"
import { RouterStateSnapshot, RoutesRecognized } from "@angular/router";

export interface AppState {
    readonly routerReducer: { state: RouterStateSnapshot, navigationId: number };
    readonly account: AccountState;
    readonly chat: ChatState;
}

export const AppState = {
    Initial: {
        account: AccountState.Initial,
        chat: ChatState.Initial
    } as AppState
}