import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_ALL_USERS_INITIATED } from '../constants/action-types';
import {
  fetchAllUsersSuccess,
  fetchAllUsersFailed
} from '../actions/userActions';
import RequestHandler from '../utils/RequestHandler';

// worker saga
function* fetchUsers() {
  try {
    const response = yield call(() => RequestHandler.get('users'));
    yield put(fetchAllUsersSuccess(response));
  } catch (error) {
    yield put(fetchAllUsersFailed(error));
  }
}

// watcher saga

export default function* usersSaga() {
  yield takeEvery(FETCH_ALL_USERS_INITIATED, fetchUsers);
}
