/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from '../../axios/axios';
import { Dispatch } from 'redux';

import { messagesActions, messagesActionType } from '../../types/messagesTypes';

export const addMessage = (message: any): messagesActions => {
  return { type: messagesActionType.ADD_MESSAGE, payload: message };
};

export const fetchSendMessage = (text: string, dialogId: string) => {
  return async () => {
    await axios.post(`http://localhost:3000/messages`, {
      text: text,
      dialog_id: dialogId,
    });
  };
};

export const fetchMessages = (id: string) => {
  return async (dispatch: Dispatch<messagesActions>) => {
    try {
      dispatch({ type: messagesActionType.FETCH_MESSAGES_PENDING });
      const response = await axios.get(`http://localhost:3000/messages?dialog=` + id);
      dispatch({ type: messagesActionType.FETCH_MESSAGES_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: messagesActionType.FETCH_MESSAGES_ERROR,
      });
    }
  };
};
