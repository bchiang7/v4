import { css } from 'styled-components';

// Mouse-follow spotlight (reactbits SpotlightCard). Attach `onSpotlightMove` to the card
// and apply the `spotlight` mixin to its styles.
export const onSpotlightMove = e => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

export const spotlight = css`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.35s ease;
    background: radial-gradient(
      420px circle at var(--mx, 50%) var(--my, 50%),
      var(--glow-color),
      transparent 60%
    );
  }

  &:hover::before {
    opacity: 1;
  }
`;
