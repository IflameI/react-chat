import { dialogs } from './dialogs';
import { messages } from './messages';
import { user } from './user';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  messages,
  dialogs,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;
