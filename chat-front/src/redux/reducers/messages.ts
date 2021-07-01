import { messagesActions, messagesActionType, messagesState } from '../../types/messagesTypes';

const initialState: messagesState = {
  loading: false,
  error: false,
  items: [],
};

export const messages = (state = initialState, action: messagesActions): messagesState => {
  switch (action.type) {
    case messagesActionType.FETCH_MESSAGES_PENDING:
      return { ...state, loading: true, error: false };
    case messagesActionType.FETCH_MESSAGES_SUCCESS:
      return { ...state, loading: false, items: action.payload, error: false };
    case messagesActionType.FETCH_MESSAGES_ERROR:
      return { ...state, loading: false, error: true };
    case messagesActionType.ADD_MESSAGE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};
