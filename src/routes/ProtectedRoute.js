import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const ProtectedRoute = ({
  isLoggedIn, component: Component, ...rest
}) => {
  const getProperComponent = (props) => {
    if (isLoggedIn) {
      return <Component {...rest} {...props} />;
    }

    return <Redirect to="/authorize" />;
  };

  return <Route {...rest} render={getProperComponent} />;
};

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export function mapStateToProps(state) {
  const isLoggedIn = !!state.getIn(['user', 'userUid']);

  return {
    isLoggedIn,
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
