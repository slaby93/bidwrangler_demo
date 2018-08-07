import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export const GuestRoute = ({
  isLoggedIn, component: Component, ...rest
}) => {
  const getProperComponent = (props) => {

    if (isLoggedIn) {
      return <Redirect to="/auction/list" />;
    }

    return <Component {...rest} {...props} />;
  };

  return <Route {...rest} render={getProperComponent} />;
};

GuestRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export function mapStateToProps(state) {
  const isLoggedIn = !!state.getIn(['user', 'userUid']);

  return {
    isLoggedIn,
  };
}

export default connect(mapStateToProps)(GuestRoute);
