import styled from 'styled-components';
import theme from './theme';
const { fontSizes, fonts } = theme;

const Button = styled.button`
  color: ${props => props.theme.colors.highLight};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.highLight};
  border-radius: ${theme.borderRadius};
  font-size: ${fontSizes.smish};
  font-family: ${fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${props => props.theme.colors.transColor};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
