import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ALL_MESSAGES_INITIATED } from '../constants/action-types';
import {
  fetchAllMessagesSuccess,
  fetchAllMessagesFailed
} from '../actions/messageActions';
import RequestHandler from '../utils/RequestHandler';

// worker saga
function* fetchMessages() {
  try {
    const response = yield call(() => RequestHandler.get('posts'));
    yield put(fetchAllMessagesSuccess(response));
  } catch (error) {
    yield put(fetchAllMessagesFailed(error));
  }
}

// watcher saga

export default function* messagesSaga() {
  yield takeEvery(FETCH_ALL_MESSAGES_INITIATED, fetchMessages);
}
