import { userActions, userActionsType, userState } from '../../types/userReduxTypes';

const initialState: userState = {
  data: null,
  token: window.localStorage.token,
  isAuth: window.localStorage.token ? true : false,
  loading: false,
  error: '',
};

export const user = (state = initialState, action: userActions): userState => {
  switch (action.type) {
    case userActionsType.SET_USER_DATA_PENDING:
      return { ...state, loading: true };
    case userActionsType.SET_IS_AUTH:
      return { ...state, isAuth: action.payload, loading: false };
    case userActionsType.SET_USER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isAuth: true,
        token: window.localStorage.token,
        loading: false,
      };
    case userActionsType.SET_USER_DATA_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
