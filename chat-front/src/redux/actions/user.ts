/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from '../../axios/axios';

import { Dispatch } from 'redux';
import { userActions, userActionsType } from '../../types/userReduxTypes';

declare global {
  interface Window {
    axios: any;
  }
}

export const setUserData = (payload: any): userActions => {
  return { type: userActionsType.SET_USER_DATA_SUCCESS, payload };
};

export const setIsAuth = (payload: boolean): userActions => {
  return { type: userActionsType.SET_IS_AUTH, payload };
};

export const fetchUserData = () => {
  return async (dispatch: Dispatch<userActions>) => {
    try {
      const response = await axios.get('http://localhost:3000/user/me');

      dispatch(setUserData(response.data));
    } catch (e) {
      if (e.response.status === 403) {
        dispatch({
          type: userActionsType.SET_USER_DATA_ERROR,
          payload: 'Во время авторизации произошла ошибка',
        });
        dispatch(setIsAuth(false));
        delete window.localStorage.token;
      }
    }
  };
};

export const fetchUserLogin = (postData: any) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post('http://localhost:3000/user/signin', postData);
      const { token } = response.data;

      window.axios.defaults.headers.common['token'] = token;
      window.localStorage['token'] = token;

      dispatch(fetchUserData());
      dispatch(setIsAuth(true));
      return response.data;
    } catch ({ response }) {
      if (response.status == 403) {
        alert('Неверный логин или пароль');
      }
    }
  };
};

export const fetchUserRegister = (postData: any) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post('http://localhost:3000/user/signup', postData);
      return response;
    } catch (e) {
      console.log('Ошибка');
    }
  };
};
