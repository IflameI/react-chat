/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from '../../axios/axios';

import { Dispatch } from 'redux';

import { dialogsActions, dialogsActionType } from '../../types/dialogsReduxTypes';

export const setCurrentDialog = (payload: any): dialogsActions => {
  return { type: dialogsActionType.SET_CURRENT_DIALOG, payload };
};

export const fetchDialogs = () => {
  return async (dispatch: Dispatch<dialogsActions>) => {
    try {
      const response = await axios.get('http://localhost:3000/dialogs');
      dispatch({ type: dialogsActionType.FETCH_DIALOGS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: dialogsActionType.FETCH_DIALOGS_ERROR,
        payload: 'Произошла ошибка при загрузке сообщений',
      });
    }
  };
};
