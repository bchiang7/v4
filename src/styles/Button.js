import styled from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => theme.colors.green};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fonts.SFMono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.transGreen};
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

export default Button;
