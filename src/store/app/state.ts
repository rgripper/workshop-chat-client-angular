import { ChatState } from "./chat/state"
import { AccountState } from "store/app/account/state";

export interface AppState {
  readonly account: AccountState,
  readonly chat: ChatState,
}

export const AppState = {
  Initial: { 
    account: AccountState.Initial,
    chat: ChatState.Initial 
  } as AppState
}