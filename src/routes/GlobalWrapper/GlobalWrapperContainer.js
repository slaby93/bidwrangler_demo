import React from 'react';
import { connect } from 'react-redux';
import GlobalWrapper from './GlobalWrapper';

export const GlobalWrapperContainer = (props) => {
  return (<GlobalWrapper {...props} />);
};

export default connect(null)(GlobalWrapperContainer);
