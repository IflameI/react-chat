export interface userState {
  data: any;
  token: string;
  isAuth: boolean;
  loading: boolean;
  error: string;
}

export enum userActionsType {
  SET_USER_DATA_SUCCESS = 'SET_USER_DATA',
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_USER_DATA_PENDING = 'SET_USER_DATA_PENDING',
  SET_USER_DATA_ERROR = 'SET_USER_DATA_ERROR',
}

interface setUserIsAuthType {
  type: userActionsType.SET_IS_AUTH;
  payload: any;
}

interface setUserDataPendingType {
  type: userActionsType.SET_USER_DATA_PENDING;
}

interface setUserDataErrorType {
  type: userActionsType.SET_USER_DATA_ERROR;
  payload: string;
}

interface setUserDataSuccessType {
  type: userActionsType.SET_USER_DATA_SUCCESS;
  payload: any;
}

export type userActions =
  | setUserDataPendingType
  | setUserDataSuccessType
  | setUserDataErrorType
  | setUserIsAuthType;
