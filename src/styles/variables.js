import { css } from 'styled-components';

const variables = css`
  :root {
    /* Palette: warm charcoal + amber.
       The variable names (navy / green / slate) are inherited from the v4
       template and describe each colour's ROLE, not its hue — --navy is the
       page background, --green the accent, --slate the body text. */

    --dark-navy: #0f0f12;
    --navy: #16161a;
    --light-navy: #212127;
    --lightest-navy: #2e2e36;
    --navy-shadow: rgba(15, 15, 18, 0.7);
    --navy-translucent: rgba(22, 22, 26, 0.85);
    --dark-slate: #6b6b76;
    --slate: #a1a1aa;
    --light-slate: #c4c4cd;
    --lightest-slate: #ececf1;
    --white: #fafafa;
    --green: #f0b429;
    --green-tint: rgba(240, 180, 41, 0.1);
    --pink: #f2779a;
    --blue: #7cc4e8;

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
