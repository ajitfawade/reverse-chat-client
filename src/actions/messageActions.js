import { normalize } from 'normalizr';
import {
  FETCH_ALL_MESSAGES_INITIATED,
  FETCH_ALL_MESSAGES_SUCCESS,
  FETCH_ALL_MESSAGES_FAIL
} from '../constants/action-types';
import { messageSchema } from '../constants/schemas';
export function fetchAllMessagesInitiated() {
  return {
    type: FETCH_ALL_MESSAGES_INITIATED
  };
}

export function fetchAllMessagesSuccess(data) {
  const { result, entities } = normalize(data, [messageSchema]);
  console.log('Normalized Data:', result);
  return {
    type: FETCH_ALL_MESSAGES_SUCCESS,
    payload: result,
    entities
  };
}

export function fetchAllMessagesFailed(error) {
  return {
    type: FETCH_ALL_MESSAGES_FAIL,
    payload: error
  };
}
