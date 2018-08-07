import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import * as USER_ACTIONS from './../../../ducks/user';

export const LoginContainer = (props) => {
  return (<Login {...props} />);
};

export function mapStateToProps(state) {
  return {
    isLogging: state.getIn(['user', 'isLogging']),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: ({ email, password }) => {
      dispatch(USER_ACTIONS.USERS_LOGIN_REQUEST({
        email,
        password,
      }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
