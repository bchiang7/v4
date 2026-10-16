import React from 'react';
import styled from 'styled-components';

// Static violet glow + faint grid: same atmosphere as an animated aurora, without the
// continuous blur/animation cost on a fixed full-screen layer.
const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  opacity: var(--aurora-opacity);
  transition: opacity 0.4s ease;
  background: radial-gradient(60vmax 45vmax at 8% -5%, rgba(124, 92, 255, 0.32), transparent 70%),
    radial-gradient(55vmax 45vmax at 100% 38%, rgba(109, 77, 255, 0.2), transparent 70%),
    radial-gradient(50vmax 40vmax at 25% 108%, rgba(167, 139, 250, 0.16), transparent 70%);

  /* faint grid, masked toward the top */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(var(--highlight-tint) 1px, transparent 1px),
      linear-gradient(90deg, var(--highlight-tint) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 0%, #000 20%, transparent 75%);
  }
`;

const AuroraBackground = () => <Wrapper aria-hidden="true" />;

export default AuroraBackground;
