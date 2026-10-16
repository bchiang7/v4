import { css } from 'styled-components';

const button = css`
  color: var(--primary-color);
  background-color: transparent;
  border: 1px solid var(--outline-light);
  border-radius: 999px;
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--signal-color);
    border-color: var(--signal-color);
    color: #060010;
    box-shadow: 0 0 28px -4px var(--glow-color);
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--primary-color);
      outline: 0;
    }
    &:focus-visible {
      outline: 2px solid var(--signal-color);
      outline-offset: 3px;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--primary-color);
    &:hover,
    &:focus,
    &:active {
      color: var(--primary-color);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--primary-color) !important;
        transition: var(--transition);
      }
    }
    &:focus-visible {
      outline: 2px solid var(--signal-color);
      outline-offset: 3px;
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--primary-color);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button,

  smallButton: css`
    color: var(--primary-color);
    background-color: transparent;
    border: 1px solid var(--outline-light);
    border-radius: 999px;
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    font-weight: 400;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--signal-color);
      border-color: var(--signal-color);
      color: #060010;
      box-shadow: 0 0 28px -4px var(--glow-color);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--primary-color);
    background-color: transparent;
    border: 1px solid var(--outline-light);
    border-radius: 999px;
    padding: 1.25rem 2rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    font-weight: 400;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--signal-color);
      border-color: var(--signal-color);
      color: #060010;
      box-shadow: 0 0 28px -4px var(--glow-color);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--bg-color-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--bg-color-shadow);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--primary-color);
      }
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default mixins;
