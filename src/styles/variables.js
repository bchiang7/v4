import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-bg-color: #f2f2f2;
    --bg-color: #ffffff;
    --light-bg-color: #f1f5f9;
    --lightest-bg-color: #c7c7c7;
    --bg-color-shadow: rgba(148, 148, 148, 0.7);
    --dark-text-color: #07090d;
    --text-color: #676f85;
    --light-text-color: #39393b;
    --lightest-text-color: #1c2333;
    --contrast-color: #1c1d1f;
    --primary-color: #3b83f6;
    --primary-color-tint: rgba(59, 131, 246, 0.1);
    --highlight-tint: rgba(59, 131, 246, 0.1);
    --outline-light: #e2e8f0;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
