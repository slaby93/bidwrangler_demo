import React from 'react';
import { connect } from 'react-redux';
import { AUCTION_CREATE } from 'ducks/auction';
import CreateAuction from './Create';

export class CreateContainer extends React.Component {
  render() {
    return (
      <CreateAuction {...this.props} />
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: data => dispatch(AUCTION_CREATE(data)),
  };
}

export default connect(null, mapDispatchToProps)(CreateContainer);
