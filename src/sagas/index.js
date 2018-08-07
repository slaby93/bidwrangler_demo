import { all, fork } from 'redux-saga/effects';
import user from './user';
import auction from './auction';

export default function* rootSaga() {
  yield all([
    fork(user),
    fork(auction)
  ]);
}
