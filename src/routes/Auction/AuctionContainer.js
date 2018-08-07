import React from 'react';
import { connect } from 'react-redux';
import { USERS_LOGOUT } from 'ducks/user';
import Auction from './Auction';

export const AuctionContainer = props => (
  <Auction
    {...props}
  />
);

export function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => {
      dispatch(USERS_LOGOUT());
    },
  };
}

export default connect(null, mapDispatchToProps)(AuctionContainer);
