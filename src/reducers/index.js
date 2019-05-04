import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import userReducer from './usersReducer';

export default combineReducers({
  messages: messageReducer,
  users: userReducer
});
