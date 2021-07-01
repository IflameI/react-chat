import { dialogsActions, dialogsActionType, dialogsState } from '../../types/dialogsReduxTypes';

const initialState: dialogsState = {
  items: [],
  loading: false,
  error: '',
  currentDialogsId: window.location.pathname.split('dialog/')[1],
};

export const dialogs = (state = initialState, action: dialogsActions): dialogsState => {
  switch (action.type) {
    case dialogsActionType.FETCH_DIALOGS_PENDING:
      return { ...state, loading: true };
    case dialogsActionType.FETCH_DIALOGS_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case dialogsActionType.FETCH_DIALOGS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case dialogsActionType.SET_CURRENT_DIALOG:
      return { ...state, loading: false, currentDialogsId: action.payload };
    default:
      return state;
  }
};
