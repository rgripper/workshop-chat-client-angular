import { ChatState, initialChatState } from "./chat/state";

export const initialAppState: AppState = { chatState: initialChatState };

export interface AppState {
  readonly chatState: ChatState,
}