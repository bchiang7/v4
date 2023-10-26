import React from 'react';
import styled, { keyframes } from 'styled-components';

const wobble = keyframes`
  to {
    filter: hue-rotate(360deg);
    transform: translate(var(--x, -50%), var(--y, -50%)) rotate(360deg);
  }
`;

const StyledContainer = styled.div`
  margin: 0;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDiv = styled.div`
  --deg: 1;
  --x: -50%;
  --y: -50%;
  --speed: 100ms;

  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(var(--x, -50%), var(--y, -50%)) rotate(0deg);
  font-size: 20vmin;
  width: 3em;
  height: 3em;
  border-radius: 90% 95% 85% 105%;
  background: #0f0;
  mix-blend-mode: screen;
  filter: hue-rotate(0deg);
  animation: ${wobble} calc(var(--speed) * var(--t)) linear infinite;
  transform-origin: calc(-1 * var(--y)) calc(-1 * var(--x));
  box-shadow:
    0 0 0.5em 0.2em #000 inset,
    0 0 0.15em 0 #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(1) {
    --x: -53%;
    --y: -53%;
    --t: 37;
  }
  &:nth-child(2) {
    --x: -47%;
    --y: -52%;
    --t: 58;
  }
  &:nth-child(3) {
    --x: -45%;
    --y: -50%;
    --t: 46;
  }
  &:nth-child(4) {
    --x: -53%;
    --y: -45%;
    --t: 72;
  }
  &:nth-child(5) {
    --x: -55%;
    --y: -45%;
    --t: 62;
  }

  &::after {
    font-size: 1em;
    white-space: nowrap;
  }
`;

const Portal = () => {
  return (
    <StyledContainer>
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
      <StyledDiv />
    </StyledContainer>
  );
};

export default Portal;