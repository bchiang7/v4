import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-bg-color: #030008;
    --bg-color: #060010;
    --light-bg-color: #0e0824;
    --lightest-bg-color: #1b1236;
    --bg-color-shadow: rgba(3, 0, 8, 0.8);
    --dark-text-color: #4b4568;
    --text-color: #9a94b8;
    --light-text-color: #bcb7d6;
    --lightest-text-color: #ece9ff;
    --contrast-color: #ffffff;
    --primary-color: #ffffff;
    --primary-color-tint: rgba(167, 139, 250, 0.14);
    --highlight-tint: rgba(167, 139, 250, 0.06);
    --outline-light: rgba(167, 139, 250, 0.18);
    --signal-color: #a78bfa;
    --signal-color-tint: rgba(167, 139, 250, 0.14);
    --signal-soft: #c4b5fd;
    --glow-color: rgba(124, 92, 255, 0.35);
    --aurora-opacity: 1;
    --nav-bg: rgba(6, 0, 16, 0.55);

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

    --border-radius: 14px;
    --border-radius-sm: 8px;
    --gradient-text: linear-gradient(110deg, var(--signal-color) 0%, var(--signal-soft) 100%);
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
