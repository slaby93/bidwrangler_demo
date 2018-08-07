import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';

export const FullScreenLoader = ({ className }) => {
  return (
    <div className={className}>
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
      <div className="ball" />
    </div>);
};

FullScreenLoader.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledComponent = styled(FullScreenLoader)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  background-color: ${prop('theme.color.white')};
  z-index: 1;
  top: 0px;
  left: 0px;
`;

export default StyledComponent;
