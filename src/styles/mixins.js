import { css } from 'styled-components';

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
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.colors.green};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.green};
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.colors.green};
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: ${({ theme }) => theme.colors.green} !important;
        transition: ${({ theme }) => theme.transition};
      }
    }
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${({ theme }) => theme.colors.green};
      transition: ${({ theme }) => theme.transition};
      opacity: 0.5;
    }
  `,

  smallButton: css`
    color: ${({ theme }) => theme.colors.green};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.green};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.75rem 1rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-family: ${({ theme }) => theme.fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${({ theme }) => theme.colors.green};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.green};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1.25rem 1.75rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-family: ${({ theme }) => theme.fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${({ theme }) => theme.colors.shadowNavy};
    transition: ${({ theme }) => theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${({ theme }) => theme.colors.shadowNavy};
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.green};
      }
    }
  `,
};

export default mixins;
