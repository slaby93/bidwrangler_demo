import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { Text } from './../RawElements';

export const TextInput = ({
  className, error, id, placeholder, ...props
}) => {
  return (
    <div className={className}>
      <Text {...props} placeholder={placeholder} field={id} id={id} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

TextInput.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.node]),
  id: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  error: null,
  id: null,
};

const ErrorMessage = styled.div`
`

const StyledComponent = styled(TextInput)`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: ${prop('theme.color.black')};
  
  &:last-child {
    margin-bottom: 2px;
  }

  &:after {
      content:'';
      margin-top: 5px;
      text-transform: capitalize;
      color: ${prop('theme.color.red')};
  }

  ${Text} {
    font-size: 17px;
    height: 50px;
    border: 1px solid ${prop('theme.color.whiteShadow')};
    border-radius: 1px;
    padding: 0 10px;
  
    &::placeholder {
      color: ${prop('theme.color.noMoreIdeasForWhiteColors')};
    }

    transition: all .5s ease-out;
  }

  ${ifProp('error', css`
    ${Text} {
        border-color: ${prop('theme.color.brightRed')};
        background-color: ${prop('theme.color.brightWhite')};
        color: ${prop('theme.color.black')};

        &::placeholder {
          color: ${prop('theme.color.brightRed')};
        }
      }
      

    `)}
    ${ErrorMessage}{
        margin-top: 15px;
        content: '${prop('error')}';
        color: ${prop('theme.color.red')};
    }
`;

export default StyledComponent;
