import styled from 'styled-components';
import { prop } from 'styled-tools';

const StyledComponent = styled.h1`
  font-size: ${prop('theme.fontSize.xxbig')}px;
  font-weight: 600;
  margin: 10px;
  color: ${prop('theme.color.black')};
`;

export default StyledComponent;
