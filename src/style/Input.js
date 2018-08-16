import styled from 'styled-components';

const Input = styled.input`
  border-radius: 0;
  outline: 0;
  &:focus {
    outline: 0;
  }
  &::placeholder {
  }
  &:focus,
  &:active {
    &::placeholder {
      opacity: 0.5;
    }
  }
`;

export default Input;
