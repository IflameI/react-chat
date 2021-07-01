export interface messagesState {
  loading: boolean;
  error: boolean;
  items: any;
}

export enum messagesActionType {
  FETCH_MESSAGES_PENDING = 'FETCH_MESSAGES_PENDING',
  FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS',
  FETCH_MESSAGES_ERROR = 'FETCH_MESSAGES_ERROR',
  SET_MESSAGE = 'SET_MESSAGE',
  ADD_MESSAGE = 'ADD_MESSAGE',
}

interface addMessageActionType {
  type: messagesActionType.ADD_MESSAGE;
  payload: any;
}

interface fetchPendingMessagesActionType {
  type: messagesActionType.FETCH_MESSAGES_PENDING;
}

interface fetchMessagesSuccessType {
  type: messagesActionType.FETCH_MESSAGES_SUCCESS;
  payload: any[];
}
interface fetchMessagesErrorType {
  type: messagesActionType.FETCH_MESSAGES_ERROR;
}
interface setCurrentMessageType {
  type: messagesActionType.SET_MESSAGE;
  payload: string;
}
export type messagesActions =
  | fetchPendingMessagesActionType
  | fetchMessagesSuccessType
  | fetchMessagesErrorType
  | setCurrentMessageType
  | addMessageActionType;
