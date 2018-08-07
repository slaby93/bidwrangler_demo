import styled from 'styled-components';

const ButtonsWrapper = styled.div`
display: flex;
flex-direction: column;

& > button:first-child {
  margin-bottom: 10px;
}
`;

export default ButtonsWrapper;
