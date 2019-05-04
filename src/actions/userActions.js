import {
  FETCH_ALL_USERS_INITIATED,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAIL
} from '../constants/action-types';
export function fetchAllUsersInitiated() {
  return {
    type: FETCH_ALL_USERS_INITIATED
  };
}

export function fetchAllUsersSuccess(data) {
  return {
    type: FETCH_ALL_USERS_SUCCESS,
    payload: data
  };
}

export function fetchAllUsersFailed(error) {
  return {
    type: FETCH_ALL_USERS_FAIL,
    payload: error
  };
}
