import { takeLatest, put, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import {
  USERS_LOGIN_REQUEST,
  USERS_LOGIN_SUCCESS,
  USERS_LOGIN_FAILURE,
  USERS_LOGOUT,
  USERS_LOGOUT_USER,
  USERS_REGISTER,
} from 'ducks/user';
import notificationManager from 'utils/notificationManager';
import localStorageManager from 'utils/localStorageManager';
import { TOKEN } from 'consts/localStorageKeys';
import { auth } from 'utils/firebase';


export function* login({ payload: { email, password } }) {
  try {
    yield auth
      .signInWithEmailAndPassword(email, password);
    const userUid = yield auth.currentUser.uid;

    notificationManager.show({
      text: 'Login successful',
      layout: 'topRight',
      type: 'success',
    });

    yield put(push('/dashboard'));
    yield put(USERS_LOGIN_SUCCESS({ userUid }));
  } catch (error) {
    yield put(USERS_LOGIN_FAILURE(error));
    notificationManager.show({
      text: error.message || 'Unable to connect to server',
      layout: 'topRight',
      type: 'error',
    });
  }
}

export function* logout() {
  yield auth.signOut();
  localStorageManager.remove(TOKEN);
  yield put(USERS_LOGOUT_USER());
  yield put(push('/authorize'));
}

export function* register({ payload: { email, password } }) {
  yield auth
    .createUserWithEmailAndPassword(email, password);
  const userUid = yield auth.currentUser.uid;
  yield put(push('/auction/list'));
  yield put(USERS_LOGIN_SUCCESS({ userUid }));
}

export default function* watcher() {
  yield all([
    takeLatest(USERS_LOGIN_REQUEST, login),
    takeLatest(USERS_LOGOUT, logout),
    takeLatest(USERS_REGISTER, register),
  ]);
}
