import { ChatState } from "./chat/state"

export interface AppState {
  readonly chat: ChatState,
}

export const AppState = {
  Initial: { 
    chat: ChatState.Initial 
  } as AppState
}