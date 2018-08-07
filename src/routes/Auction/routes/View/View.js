import React from 'react';
import styled from 'styled-components';
import Button, { LinkButton, ButtonsWrapper } from 'components/elements/Button';

export const View = ({
  className, currentPrice, name,
  authorId, userUid, onBid, auctionId,
  isOwner, isMyBidWinning,
}) => {
  const newPrice = currentPrice + 100;

  return (
    <div className={className}>
      <h1>{isOwner ? 'Auctioner' : 'Bidder'}</h1>
      <h1>Name: {name}</h1>
      <span>Current price: ${currentPrice}</span>
      <ButtonsWrapper>
        {!isOwner && !isMyBidWinning && <Button bgColor="#d2e686" onClick={() => onBid(auctionId, newPrice)}>Bid ${newPrice}</Button>}
        {!isOwner && isMyBidWinning && <Button disabled>My winning bid ${newPrice}</Button>}
        {isOwner && <Button disabled>Current price ${currentPrice}</Button> }
        <LinkButton grow to="/auctions/list">
         Back
        </LinkButton>
      </ButtonsWrapper>
    </div>
  );
};

const Styled = styled(View)`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;

  ${ButtonsWrapper} {
    align-self: center;
    margin-top: 20px;
    width: 240px;
  }
`;

export default Styled;

