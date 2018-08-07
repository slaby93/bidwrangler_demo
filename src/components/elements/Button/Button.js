import styled, { css } from 'styled-components';
import { prop, ifProp } from 'styled-tools';

const StyledComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${prop('theme.color.black')};
  font-size: 16px;
  background-color: ${prop('theme.color.white')};
  border-radius: 2px;
  border-color: ${prop('theme.color.dirtyWhite')};
  padding: 10px;
  color:  ${prop('color', prop('theme.color.black'))};
  background-color:  ${prop('bgColor', prop('theme.color.white'))};
  min-height: 50px;
  box-shadow: 0px 1px 8px 1px ${prop('theme.color.whiteShadow')};
  transition: all .5s ease-out, opacity .5s ease-out;
  outline: none;
  cursor: pointer;
  &:active {
    box-shadow: 2px 2px 7px 0px ${prop('theme.color.dirtyShadow')};
  }
  &:hover:not(:active) {
    transform: scale(1.03);
  }
  ${ifProp('grow', css`
      width: 100%;
  `)}
  ${ifProp('disabled', css`
     cursor: not-allowed;
     opacity: 0.4;
  `)}
  ${ifProp('round', css`
     border-radius: 50%;
  `)}
  ${ifProp('text', css`
      display: inline;
      border: none;
      box-shadow: none;
      margin-bottom: 10px;
      height: initial;
      margin: 0;
      width: fit-content;
      &:active {
        box-shadow:none;
      }
      &:hover {
        transform: scale(1.05);
      }
  `)}

  ${ifProp('noBorder', css`
    border: none;
  `)}
`;

export default StyledComponent;
