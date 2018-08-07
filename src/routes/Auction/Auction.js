import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import Button, { LinkButton } from 'components/elements/Button';
import CreateAuction from './routes/Create';
import ListAuctions from './routes/List';
import ViewAuction from './routes/View';

export const Auction = ({
  className, match, location, onLogout,
}) => {
  return (
    <div className={className}>
      <FixedHeader>
        <LinkButton to="/auction/create">
          Create Auction
        </LinkButton>
        <Button onClick={onLogout}>
          Logout
        </Button>
      </FixedHeader>
      <Content>
        <Switch location={location}>
          <Route exact path={`${match.url}/list`} component={ListAuctions} />
          <Route exact path={`${match.url}/create`} component={CreateAuction} />
          <Route path={`${match.url}/:auctionId`} component={ViewAuction} />
        </Switch>
      </Content>
    </div>
  );
};

const FixedHeader = styled.div`
  display: flex;
  background-color: #f74040;
  border-bottom: 1px solid black;
  box-shadow: 0px 0px 5px 0px;
  padding: 10px;

  & > * {
    margin-right: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 61px);
  overflow: auto;
`;

const Styled = styled(Auction)`
  width: 100%;
`;

export default Styled;
