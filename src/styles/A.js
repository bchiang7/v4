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

  &:hover,
  &:focus {
    color: ${theme.colors.green};
    outline: 0;
  }
`;

export default A;
