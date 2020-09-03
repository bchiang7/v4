import styled from 'styled-components';

const InlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.green};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${({ theme }) => theme.colors.green};
    transition: ${({ theme }) => theme.transition};
  }
`;

export default InlineLink;
