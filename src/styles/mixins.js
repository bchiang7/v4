import { css } from 'styled-components';

const button = css`
  color: black;
  background-color: transparent;
  background-color: transparent;
  border: 1px solid black;
  padding: 0.8rem 1rem;
  font-size: var(--fz-sm);
  font-family: Times New Roman;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);

  &:hover,
  &:focus,
  &:active {
    background-color: var(--red);
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
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: black);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    cursor: pointer;
    color: black;
    &:hover,
    &:focus,
    &:active {
      color: black;
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: black !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: black;
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button,

  smallButton: css`
    color: black;
    background-color: transparent;
    border: 1px solid black;
    padding: 0.5rem 0.7rem;
    font-size: var(--fz-xs);
    font-family: Times New Roman;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--red);
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: black;
    background-color: transparent;
    border: 1px solid black;
    padding: 0.8rem 1rem;
    font-size: var(--fz-sm);
    font-family: times new roman;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--red);
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
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
        content: '▸';
        position: absolute;
        left: 0;
        color: var(--red);
      }
    }
  `,
};

export default mixins;
