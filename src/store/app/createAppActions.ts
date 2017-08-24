import { Store } from "@ngrx/store"
import { AppState } from "store/app/state"
import { AccountActionType } from "store/app/account/reducer"
import { ChatService } from "messaging/chat.service"
import { SubmittedMessage } from "messaging/submitted-message"

export interface AppActions {
  sendMessage(x: SubmittedMessage): void
  join(userName: string): void
  leave(): void
}

export function createAppActions(chatService: ChatService, store: Store<AppState>): AppActions {
  return {
    sendMessage(message: SubmittedMessage) {
      // client state update is NOT needed here, because server will broadcast this message back
      chatService.sendMessage(message); // update server state
    },
    join(userName: string) {
      store.dispatch({ type: AccountActionType.StartAuthentication }); // update client state
      chatService.join(userName); // update server state
    },
    leave() {
      store.dispatch({ type: AccountActionType.Leave }); // update client state
      chatService.leave(); // update server state
    }
  }
}