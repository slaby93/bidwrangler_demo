import { takeLatest, put, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import notificationManager from 'utils/notificationManager';
import { AUCTION_CREATE, AUCTION_BID } from 'ducks/auction';
import { auth, database } from 'utils/firebase';
import uuidv1 from 'uuid/v1';

export function* create({ payload: { itemName } }) {
  try {
    const uuid = uuidv1();
    const currentUser = auth.currentUser;
    yield database
      .ref(`auctions/${uuid}`)
      .set({
        authorId: currentUser.uid,
        id: uuid,
        name: itemName,
        currentPrice: 0,
      });
    yield put(push('/dashboard'));

    notificationManager.show({
      text: 'Auction created successfully',
      layout: 'topRight',
      type: 'success',
    });
  } catch (error) {
    console.error({ error });
  }
}

export function* bid({ payload: { auctionId, newPrice } }) {
  try {
    const currentUser = auth.currentUser;
    yield database
      .ref()
      .update({
        [`auctions/${auctionId}/currentPrice`]: newPrice,
        [`auctions/${auctionId}/lastBidder`]: currentUser.uid,
      });
  } catch (error) {
    console.error({ error });
  }
}

export default function* watcher() {
  yield all([
    takeLatest(AUCTION_CREATE, create),
    takeLatest(AUCTION_BID, bid),
  ]);
}
