import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

export const USERS_LOGIN_REQUEST = createAction('USER/LOGIN/REQUEST');
export const USERS_LOGIN_SUCCESS = createAction('USER/LOGIN/SUCCESS');
export const USERS_LOGIN_FAILURE = createAction('USER/LOGIN/FAILURE');

export const USERS_REGISTER = createAction('USER/REGISTER');

export const USERS_LOGOUT = createAction('USER/LOGOUT');
export const USERS_LOGOUT_USER = createAction('USER/LOGOUT_USER');

const defaultState = fromJS({
  userUid: null,
  isLogging: false,
  isSigningUp: false,
  profile: null,
  token: null,
  error: null,
});

const reducer = handleActions({
  [USERS_LOGIN_REQUEST]: (state) => {
    return state.merge({
      userUid: null,
      isLogging: true,
      profile: null,
      error: null,
    });
  },
  [USERS_LOGIN_SUCCESS]: (state, { payload: { userUid } }) => {
    return state.merge({
      userUid,
      isLogging: false,
      error: null,
    });
  },
  [USERS_LOGIN_FAILURE]: (state) => {
    return state.merge({
      userUid: null,
      isLogging: false,
      profile: null,
      error: 'Error during logging',
    });
  },
  [USERS_LOGOUT_USER]: (state) => {
    return state.merge({
      userUid: null,
      isLogging: false,
    });
  },
}, defaultState);

export default reducer;
