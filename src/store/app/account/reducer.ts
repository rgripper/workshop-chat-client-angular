import { Message } from 'messaging/message'
import { User } from 'messaging/user'
import { AccountState, AccountStateType } from './state'
import { ChatState } from "store/app/chat/state"
import { ChatAction } from "store/app/chat/reducer"

export enum AccountActionType {
  StartAuthentication = 'AccountActionType.StartAuthentication',
  SetAuthenticationResult = 'AccountActionType.SetAuthenticationResult'
}

export type AccountAction =
  | {
    type: AccountActionType.StartAuthentication
  }
  | {
    type: AccountActionType.SetAuthenticationResult,
    payload: { errorMessage: string, user?: undefined } | { user: User, errorMessage?: undefined }
  }

export function accountStateReducer(state: AccountState = AccountState.Initial, action: AccountAction): AccountState {
  switch (action.type) {
    case AccountActionType.StartAuthentication:
      return { type: AccountStateType.Authenticating };
    case AccountActionType.SetAuthenticationResult:
      return action.payload.user != undefined
        ? { type: AccountStateType.Authenticated, user: action.payload.user }
        : { type: AccountStateType.Unauthenticated, user: action.payload.errorMessage };
    default:
      return state;
  }
}
