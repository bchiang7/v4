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
    }
    &:hover,
    &:active,
    &:focus {
      color: ${theme.colors.green};
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${theme.colors.green};
    &:hover,
    &:focus,
    &:active {
      color: ${theme.colors.green};
      &:after {
        opacity: 1;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0.3em;
      opacity: 0;
      background-color: ${theme.colors.green};
      transition: ${theme.transition};
    }
  `,

  smallButton: css`
    color: ${theme.colors.green};
    background-color: transparent;
    border: 1px solid ${theme.colors.green};
    border-radius: ${theme.borderRadius};
    padding: 12px 17px;
    font-size: ${theme.fontSizes.smallish};
    font-family: ${theme.fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${theme.colors.green};
    background-color: transparent;
    border: 1px solid ${theme.colors.green};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${theme.fontSizes.small};
    font-family: ${theme.fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  padding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,
};

export default mixins;
