/**
 * https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
 */

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () => {
  // For our initial server render, we won't know if the user
  // prefers reduced motion, but it doesn't matter.
  // This value will be overwritten on the client,
  // before any animations occur.
  if (isRenderingOnServer || !window || !window.matchMedia) {
    return null; // or any other default value of non-browser environments
  }
  return !window.matchMedia(QUERY).matches;
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);

    // Register our event listener
    const listener = event => {
      setPrefersReducedMotion(!event.matches);
    };

    // For the best possible UX
    // Support as many browsers as possible, we'll use both.
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener); // Newer browsers syntax
    } else {
      mediaQueryList.addListener(listener); // For older browsers
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, []); // Empty dependency array, so the effect runs only once

  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
