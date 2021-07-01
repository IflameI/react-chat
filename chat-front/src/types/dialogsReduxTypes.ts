export interface dialogsState {
  items: any;
  loading: boolean;
  error: string;
  currentDialogsId: any;
}

export enum dialogsActionType {
  FETCH_DIALOGS_PENDING = 'FETCH_DIALOGS_PENDING',
  FETCH_DIALOGS_SUCCESS = 'FETCH_DIALOGS_SUCCESS',
  FETCH_DIALOGS_ERROR = 'FETCH_DIALOGS_ERROR',
  SET_CURRENT_DIALOG = 'SET_CURRENT_DIALOG',
}

interface fetchPendingDialogsActionType {
  type: dialogsActionType.FETCH_DIALOGS_PENDING;
}

interface fetchDialogsSuccessType {
  type: dialogsActionType.FETCH_DIALOGS_SUCCESS;
  payload: any[];
}
interface fetchDialogsErrorType {
  type: dialogsActionType.FETCH_DIALOGS_ERROR;
  payload: string;
}
interface setCurrentDialogType {
  type: dialogsActionType.SET_CURRENT_DIALOG;
  payload: string;
}

export type dialogsActions =
  | fetchPendingDialogsActionType
  | fetchDialogsSuccessType
  | fetchDialogsErrorType
  | setCurrentDialogType;
