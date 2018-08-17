import styled from 'styled-components';
import theme from './theme';

const A = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: ${theme.transition};
  cursor: pointer;

  &:focus {
    outline-color: ${theme.colors.blue};
  }

  &:hover,
  &:active,
  &:focus {
    color: ${theme.colors.green};
  }
`;

export default A;
