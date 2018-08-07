import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { LinkButton } from 'components/elements/Button';

export const AuctionList = ({ userUid, listOfAuctions }) => {
  const mappedAuctionList = listOfAuctions && Object.entries(listOfAuctions).map(([key, value]) => {
    const isOwner = userUid === value.authorId;

    return (
      <ListItem isOwner={isOwner} key={value.id}>
        <div>
          <h1>{value.name}</h1>
          <span>Price: ${value.currentPrice}</span>
        </div>
        <LinkButton to={`/auction/${value.id}`}>
          View
        </LinkButton>
      </ListItem>
    );
  });

  return (
    <List>
      {mappedAuctionList}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  margin: 0 20px;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  border-bottom: 1px solid black;
  justify-content: flex-end;
  align-items: center;


  & > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
    
    & > span {
      margin-left: 15px;
    }
  }

  ${ifProp('isOwner', css`
     &:before {
      content: 'My Auction';
      margin-right: auto;
      padding: 10px;
      border: 1px solid black;
      font-weight: bold;
      margin-right: auto;
      background-color: #e4e4e4;
     }
  `)}
`;

export default AuctionList;

