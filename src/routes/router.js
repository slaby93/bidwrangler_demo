import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Authorize from './Authorize';
import Auction from './Auction';
import GlobalWrapper from './GlobalWrapper';
import ProtectedRoute from './ProtectedRoute';
import GuestRoute from './GuestRoute';

export default () => {
  return (
    <GlobalWrapper>
      <Switch>
        <GuestRoute path="/authorize" component={Authorize} />
        <ProtectedRoute path="/auction" component={Auction} />
        <Redirect to="/authorize" />
      </Switch>
    </GlobalWrapper>
  );
};
