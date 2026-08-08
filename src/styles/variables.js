import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-bg-color: #000000;
    --bg-color: #0a0a0a;
    --light-bg-color: #111111;
    --lightest-bg-color: #1a1a1a;
    --bg-color-shadow: rgba(0, 0, 0, 0.8);
    --dark-text-color: #444444;
    --text-color: #888888;
    --light-text-color: #aaaaaa;
    --lightest-text-color: #e0e0e0;
    --contrast-color: #ffffff;
    --primary-color: #ffffff;
    --primary-color-tint: rgba(255, 255, 255, 0.08);
    --highlight-tint: rgba(255, 255, 255, 0.04);
    --outline-light: rgba(255, 255, 255, 0.12);
    --signal-color: #e8813a;
    --signal-color-tint: rgba(232, 129, 58, 0.12);

    --font-sans: 'Inter', 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 11px;
    --fz-xs: 12px;
    --fz-sm: 13px;
    --fz-md: 15px;
    --fz-lg: 17px;
    --fz-xl: 19px;
    --fz-xxl: 21px;
    --fz-heading: 30px;

    --border-radius: 2px;
    --border-radius-circle: 50%;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 44px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
