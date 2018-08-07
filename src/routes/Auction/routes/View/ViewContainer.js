import React from 'react';
import { connect } from 'react-redux';
import { database } from 'utils/firebase';
import { AUCTION_BID } from 'ducks/auction';
import notificationManager from 'utils/notificationManager';
import View from './View';

export class ViewContainer extends React.PureComponent {
  state = {
    data: null,
    isOwner: false,
    isMyBidWinning: false,
  }

  componentDidMount = () => {
    this.bindFirebase();
  }

  componentWillUnmount = () => this.databaseReference.off()

  bindFirebase = () => {
    const { userUid, match: { params: { auctionId } } } = this.props;
    this.databaseReference = database.ref(`/auctions/${auctionId}`);
    this.databaseReference.on('value', (snapshot) => {
      const newData = snapshot.val();
      const isOwner = newData.authorId === userUid;
      this.findIfOutBidded(newData, isOwner);

      this.setState({
        data: newData,
        isOwner,
      });
    });
  }

  findIfOutBidded = (() => {
    let isInitialData = true;

    return (newData, isOwner) => {
      const { userUid } = this.props;
      const isMyBidWinning = isOwner || (newData.lastBidder === userUid);
      this.setState({
        isMyBidWinning,
      });

      if (isInitialData || isMyBidWinning) {
        isInitialData = false;

        return;
      }

      notificationManager.show({
        text: 'Bid again',
        layout: 'topRight',
        type: 'warning',
      });
    };
  })()

  render() {
    const { data, isOwner, isMyBidWinning } = this.state;
    const { userUid, onBid, match: { params: { auctionId } } } = this.props;

    return (
      <View {...data} isOwner={isOwner} isMyBidWinning={isMyBidWinning} userUid={userUid} auctionId={auctionId} onBid={onBid} />
    );
  }
}

export function mapStateToProps(state) {
  const userUid = state.getIn(['user', 'userUid']);

  return {
    userUid,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    onBid: (auctionId, newPrice) => {
      dispatch(AUCTION_BID({ auctionId, newPrice }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
