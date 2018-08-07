import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'themes/default';

export const GlobalWrapper = (props) => {
  const { className, children } = props;

  return (
    <div className={className}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </div>
  );
}

GlobalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

const Styled = styled(GlobalWrapper)`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;

export default Styled;
