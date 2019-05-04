import {
  FETCH_ALL_MESSAGES_INITIATED,
  FETCH_ALL_MESSAGES_SUCCESS,
  FETCH_ALL_MESSAGES_FAIL
} from '../constants/action-types';
export function fetchAllMessagesInitiated() {
  return {
    type: FETCH_ALL_MESSAGES_INITIATED
  };
}

export function fetchAllMessagesSuccess(data) {
  return {
    type: FETCH_ALL_MESSAGES_SUCCESS,
    payload: data
  };
}

export function fetchAllMessagesFailed(error) {
  return {
    type: FETCH_ALL_MESSAGES_FAIL,
    payload: error
  };
}
