import * as types from '../constants/action-types';

const initialState = {
  messages: [],
  loader: false,
  error: null
};
const messages = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_MESSAGES_INITIATED:
      return {
        loader: true,
        ...state
      };
    case types.FETCH_ALL_MESSAGES_SUCCESS:
      return {
        loader: false,
        ...state,
        messages: [...state.messages, ...action.payload]
      };
    case types.FETCH_ALL_MESSAGES_FAIL:
      return {
        loader: false,
        error: action.error,
        ...state
      };
    default:
      return state;
  }
};

export default messages;
