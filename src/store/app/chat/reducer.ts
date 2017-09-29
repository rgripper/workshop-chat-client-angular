import { Message } from 'messaging/message';
import { User } from 'messaging/user';
import { ChatState } from './state';

export enum ChatActionType {
    Initialize = 'ChatActionType.Initialize',
    AddMessage = 'ChatActionType.AddMessage',
    AddUser = 'ChatActionType.AddUser',
    RemoveUser = 'ChatActionType.RemoveUser'
}

export type ChatAction =
    | {
        type: ChatActionType.Initialize,
        payload: { chatState: ChatState }
    }
    | {
        type: ChatActionType.AddMessage,
        payload: { message: Message }
    }
    | {
        type: ChatActionType.AddUser,
        payload: { user: User }
    }
    | {
        type: ChatActionType.RemoveUser,
        payload: { userId: number }
    }

export function chatStateReducer(state: ChatState = ChatState.Initial, action: ChatAction): ChatState {
    switch (action.type) {
        case ChatActionType.Initialize:
            return action.payload.chatState;
        case ChatActionType.AddMessage: {
            return { ...state, messages: state.messages.concat([action.payload.message]) };
        }
        case ChatActionType.AddUser: {
            return { ...state, users: state.users.filter(x => x.id != action.payload.user.id).concat([action.payload.user]) };
        }
        case ChatActionType.RemoveUser: {
            const leavingUser = state.users.find(x => x.id == action.payload.userId)!;
            return { ...state, users: state.users.filter(x => x.id != action.payload.userId).concat([{ ...leavingUser, isConnected: false }]) };
        }
        default:
            return state;
    }
}
