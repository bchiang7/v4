import styled from 'styled-components';

export const TorchEffect = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  pointer-events: none;
  transition: transform 0.2s ease-in-out;
`;
