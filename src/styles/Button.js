import styled from 'styled-components';
import theme from './theme';

const Button = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 0;

  &:focus,
  &:active {
    outline-color: ${theme.colors.blue};
  }
`;

export default Button;
