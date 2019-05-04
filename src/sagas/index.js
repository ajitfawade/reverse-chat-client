import { all } from 'redux-saga/effects';
import messagesSaga from './messagesSaga';
import usersSaga from './usersSaga';

//Watcher saga
export default function* rootSaga() {
  yield all([messagesSaga(), usersSaga()]);
}
