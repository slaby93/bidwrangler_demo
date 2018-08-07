import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export const Authorize = ({ className, match, location }) => {

  return (
    <div className={className}>
      <ShadowWrapper>
        <Switch location={location}>
          <Route exact path={`${match.url}`} component={Login} />
          <Route exact path={`${match.url}/register`} component={Register} />
          <Redirect to={`${match.url}/`} />
        </Switch>
      </ShadowWrapper>
    </div>
  );
};

Authorize.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

const StyledComponent = styled(Authorize)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 5%;
  max-height: 100vh;
  overflow: hidden;

  @media(min-height: ${prop('theme.breakpoint.small')}px){
    margin-top: 10%;
  }
  
  @media screen and (orientation:landscape) {
    margin-top: 5%;
  }
`;

const ShadowWrapper = styled.div`
  @media(min-width: ${prop('theme.breakpoint.xxsmall')}px) and (min-height: ${prop('theme.breakpoint.xsmall')}px) {
    padding: 20px;
    border: 1px solid ${prop('theme.color.subtleBlack')};
    box-shadow: 0px 1px 4px 2px ${prop('theme.color.whiteShadow')};
  }
`;

export default StyledComponent;
