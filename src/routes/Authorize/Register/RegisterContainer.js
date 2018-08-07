import React from 'react';
import { connect } from 'react-redux';
import Register from './Register';
import * as USER_ACTIONS from './../../../ducks/user';

export const RegisterContainer = (props) => {
  return (<Register {...props} />);
};

export function mapStateToProps(state) {
  return {
    isLogging: state.getIn(['user', 'isLogging']),
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: ({ email, password }) => {
      dispatch(USER_ACTIONS.USERS_REGISTER({
        email,
        password,
      }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
