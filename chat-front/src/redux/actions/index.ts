import * as dialogsActionCreators from './dialogs';
import * as messagesActionCreators from './messages';
import * as userActionCreators from './user';

export default {
  ...dialogsActionCreators,
  ...messagesActionCreators,
  ...userActionCreators,
};
