import { css } from 'styled-components';
import theme from './theme';
import media from './media';

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

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:focus {
      outline-color: ${theme.colors.blue};
    }

    &:hover,
    &:active,
    &:focus {
      color: ${theme.colors.green};
    }
  `,

  smallButton: css`
    color: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};
    border-radius: ${theme.borderRadius};
    padding: 15px 20px 10px;
    font-size: ${theme.fontSizes.medium};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.transGreen};
    }
  `,

  bigButton: css`
    color: ${theme.colors.green};
    border: 1px solid ${theme.colors.green};
    border-radius: ${theme.borderRadius};
    padding: 20px 25px 15px;
    font-size: ${theme.fontSizes.large};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.transGreen};
    }
  `,

  inlineLink: css`
    color: ${theme.colors.green};

    &:hover,
    &:focus,
    &:active {
      &:after {
        opacity: 1;
      }
    }

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      position: relative;
      top: 0px;
      opacity: 0;
      background-color: ${theme.colors.green};
      transition: ${theme.transition};
    }
  `,

  padding: css`
    padding: 0 150px;

    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 30px;`};
  `,
};

export default mixins;
