import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label, Checkbox } from './../RawElements/Elements';


export const CheckboxInput = ({
  className, id, field, children,
}) => {
  return (
    <div className={className}>
      <Label for={field || id}>{children}</Label>
      <Checkbox field={field || id} id={field || id} />
    </div>
  );
};

CheckboxInput.propTypes = {
  id: PropTypes.string,
  field: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

CheckboxInput.defaultProps = {
  id: null,
};

const StyledComponent = styled(CheckboxInput)`
  position: relative;
  display: flex;
  margin: 15px 0;

  ${Label}{
    margin-right: 5px;
  }
`;

export default StyledComponent;
