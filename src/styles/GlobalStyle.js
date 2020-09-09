import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';
import TransitionStyles from './TransitionStyles';
import PrismStyles from './PrismStyles';

const GlobalStyle = createGlobalStyle`
  ${Fonts};

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.slate};
    font-family: ${({ theme }) => theme.fonts.Calibre};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    line-height: 1.3;

    @media (${({ theme }) => theme.bp.mobileL}) {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${({ theme }) => theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.slate};
    color: ${({ theme }) => theme.colors.lightestSlate};
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.lightestSlate};
    margin: 0 0 10px 0;
  }

  h1 {
    &.big-title {
      font-size: 80px;
      line-height: 1.1;
      margin: 0;
      @media (${({ theme }) => theme.bp.desktopS}) {
        font-size: 70px;
      }
      @media (${({ theme }) => theme.bp.tabletL}) {
        font-size: 60px;
      }
      @media (${({ theme }) => theme.bp.mobileL}) {
        font-size: 50px;
      }
      @media (${({ theme }) => theme.bp.mobileM}) {
        font-size: 40px;
      }
    }

    &.medium-title {
      font-size: 60px;
      line-height: 1.1;
      margin: 0;
      @media (${({ theme }) => theme.bp.desktopS}) {
        font-size: 50px;
      }
      @media (${({ theme }) => theme.bp.tabletL}) {
        font-size: 40px;
      }
    }
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.green};
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${({ theme }) => theme.colors.lightblue};
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 15px 0;

    &:last-child,
    &:last-of-type {
      margin: 0;
    }

    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    & > code {
      background-color: ${({ theme }) => theme.colors.lightNavy};
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
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
    }
  }

  blockquote {
    border-left-color: ${({ theme }) => theme.colors.green};
    border-left-style: solid;
    border-left-width: 1px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: ${({ theme }) => theme.colors.lightestNavy};
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.SFMono};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }

  #logo {
    color: ${({ theme }) => theme.colors.green};
  }

  .overline {
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.SFMono};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: 400;
  }

  .subtitle {
    color: ${({ theme }) => theme.colors.green};
    margin: 0 0 20px 0;
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-family: ${({ theme }) => theme.fonts.SFMono};
    font-weight: 400;
    line-height: 1.5;
    @media (${({ theme }) => theme.bp.desktopS}) {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: ${({ theme }) => theme.fontSizes.smish};
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      line-height: 1.5;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    color: ${({ theme }) => theme.colors.green};

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-family: ${({ theme }) => theme.fonts.SFMono};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  ${TransitionStyles};

  ${PrismStyles};
`;

export default GlobalStyle;
