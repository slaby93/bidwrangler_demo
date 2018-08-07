import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from './Button';

export const LinkButton = ({
  className, to, children, ...props
}) => {
  return (
    <NavLink to={to}>
      <Button className={className} {...props}>
        {children}
      </Button>
    </NavLink>
  );
};

LinkButton.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const StyledComponent = styled(LinkButton)`
  a {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    color: black;
    font-weight: 400;
    width: max-content;
  }
`;

export default StyledComponent;
