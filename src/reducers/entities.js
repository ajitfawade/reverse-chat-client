import merge from 'lodash/merge';
import * as types from '../constants/action-types';

const initialState = {
  messages: {},
  users: {}
};

export default function entities(state = initialState, action) {
  if (action.entities) {
    return merge({}, state, action.entities);
  }

  switch (action.type) {
    default:
      return state;
  }
}
