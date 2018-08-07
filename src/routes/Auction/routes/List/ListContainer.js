import React from 'react';
import { connect } from 'react-redux';
import { database } from 'utils/firebase';
import AuctionList from './List';

export class AuctionListContainer extends React.PureComponent {
  state = {
    listOfAuctions: null,
  }

  componentDidMount = () => {
    this.bindFirebase();
  }

  componentWillUnmount = () => this.databaseReference.off();


  bindFirebase = () => {
    this.databaseReference = database.ref('/auctions');
    this.databaseReference.on('value', (snapshot) => {
      this.setState({
        listOfAuctions: snapshot.val(),
      });
    });
  }

  render() {
    const { listOfAuctions } = this.state;
    const { userUid } = this.props;

    return (
      <AuctionList userUid={userUid} listOfAuctions={listOfAuctions} />
    );
  }
}

export function mapStateToProps(state) {
  const userUid = state.getIn(['user', 'userUid']);

  return {
    userUid,
  };
}

export default connect(mapStateToProps)(AuctionListContainer);
