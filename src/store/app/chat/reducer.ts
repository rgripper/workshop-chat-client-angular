import { Message } from 'messaging/message';
import { User } from 'messaging/user';
import { ChatData } from 'messaging/chat-data';
import { ChatState, ChatStateType, initialChatState } from './state';

export enum ChatActionType {
  Left = 'ChatActionType.Left',
  JoinInProgress = 'ChatActionType.JoinInProgress',
  JoinResultReceived = 'ChatActionType.JoinResultReceived', 
  MessageReceived = 'ChatActionType.MessageReceived', 
  UserJoined = 'ChatActionType.UserJoined', 
  UserLeft = 'ChatActionType.UserLeft'
}

export type ChatAction =
  | {
    type: ChatActionType.Left
  }
  | {
    type: ChatActionType.JoinInProgress
  }
  | {
    type: ChatActionType.JoinResultReceived,
    payload: { chatState: ChatState }
  }
  | {
    type: ChatActionType.MessageReceived,
    payload: { message: Message }
  }
  | {
    type: ChatActionType.UserJoined,
    payload: { user: User }
  }
  | {
    type: ChatActionType.UserLeft,
    payload: { userName: string }
  }

export function chatStateReducer (state: ChatState = initialChatState, action: ChatAction) {
  switch (action.type) {
    case ChatActionType.Left:
      return { type: ChatStateType.NotAuthenticated } as ChatState;
    case ChatActionType.JoinInProgress:
      return { type: ChatStateType.Authenticating } as ChatState;
    case ChatActionType.JoinResultReceived:
      return action.payload.chatState;
    case ChatActionType.MessageReceived: {
      if (state.type != ChatStateType.AuthenticatedAndInitialized) return state;
      const data: ChatData = { ...state.data, messages: state.data.messages.concat([action.payload.message]) };
      return { ...state, data };
    }
    case ChatActionType.UserJoined: {
      if (state.type != ChatStateType.AuthenticatedAndInitialized) return state;
      const data: ChatData = { ...state.data, users: state.data.users.filter(x => x.name != action.payload.user.name).concat([action.payload.user]) };
      return { ...state, data };
    }
    case ChatActionType.UserLeft: {
      if (state.type != ChatStateType.AuthenticatedAndInitialized) return state;
      const data: ChatData = { ...state.data, users: state.data.users.filter(x => x.name != action.payload.userName) };
      return { ...state, data };
    }
    default:
      return state;
  }


};
