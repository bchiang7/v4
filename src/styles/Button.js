import styled from 'styled-components';
import theme from './theme';

const Button = styled.button`
  color: ${theme.colors.green};
  background-color: transparent;
  border: 1px solid ${theme.colors.green};
  border-radius: ${theme.borderRadius};
  font-size: ${theme.fontSizes.smallish};
  font-family: ${theme.fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 18px 23px;

  &:hover,
  &:focus,
  &:active {
    background-color: ${theme.colors.transGreen};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
