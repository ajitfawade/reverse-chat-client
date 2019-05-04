import * as types from '../constants/action-types';

const initialState = {
  users: [],
  loader: false,
  error: null
};
const users = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_USERS_INITIATED:
      return {
        loader: true,
        ...state
      };
    case types.FETCH_ALL_USERS_SUCCESS:
      return {
        loader: false,
        ...state,
        users: [...state.users, ...action.payload]
      };
    case types.FETCH_ALL_USERS_FAIL:
      return {
        loader: false,
        error: action.error,
        ...state
      };
    default:
      return state;
  }
};

export default users;
