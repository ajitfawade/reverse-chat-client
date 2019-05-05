import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import userReducer from './usersReducer';
import entities from './entities';

export default combineReducers({
  entities: entities,
  messages: messageReducer,
  users: userReducer
});
