import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
import mixins from './mixins';
import * as fontFamilies from './fonts';
const { colors, fontSizes, fonts } = theme;

const prismColors = {
  char: `#D8DEE9`,
  comment: `#999999`,
  keyword: `#c5a5c5`,
  lineHighlight: `#14161a`,
  primitive: `#5a9bcf`,
  string: `#8dc891`,
  variable: `#d7deea`,
  boolean: `#ff8b50`,
  punctuation: `#5FB3B3`,
  tag: `#fc929e`,
  function: `#79b6f2`,
  className: `#FAC863`,
  method: `#6699CC`,
  operator: `#fc929e`,
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreLightWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreLightWOFF}) format('woff'),
    url(${fontFamilies.CalibreLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreLightItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreLightItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreRegularWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreRegularWOFF}) format('woff'),
    url(${fontFamilies.CalibreRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreRegularItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreRegularItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreMediumWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreMediumWOFF}) format('woff'),
    url(${fontFamilies.CalibreMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreMediumItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreMediumItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreSemiboldWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreSemiboldWOFF}) format('woff'),
    url(${fontFamilies.CalibreSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'Calibre';
    src: url(${fontFamilies.CalibreSemiboldItalicWOFF2}) format('woff2'),
    url(${fontFamilies.CalibreSemiboldItalicWOFF}) format('woff'),
    url(${fontFamilies.CalibreSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoRegularWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoRegularWOFF}) format('woff'),
    url(${fontFamilies.SFMonoRegularTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoRegularItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoRegularItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoRegularItalicTTF}) format('truetype');
    font-weight: normal;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoMediumWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoMediumWOFF}) format('woff'),
    url(${fontFamilies.SFMonoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoMediumItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoMediumItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoMediumItalicTTF}) format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoSemiboldWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoSemiboldWOFF}) format('woff'),
    url(${fontFamilies.SFMonoSemiboldTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'SF Mono';
    src: url(${fontFamilies.SFMonoSemiboldItalicWOFF2}) format('woff2'),
    url(${fontFamilies.SFMonoSemiboldItalicWOFF}) format('woff'),
    url(${fontFamilies.SFMonoSemiboldItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: auto;
  }

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
    background-color: ${colors.navy};
    color: ${colors.slate};
    line-height: 1.3;
    font-family: ${fonts.Calibre};
    font-size: ${fontSizes.xl};
    ${media.phablet`font-size: ${fontSizes.lg};`}

    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > #content > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${colors.highlight};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    color: ${colors.lightestSlate};
    margin: 0 0 10px 0;
  }

  h1.big-title {
    font-size: 80px;
    line-height: 1.1;
    margin: 0;
    ${media.desktop`font-size: 70px;`};
    ${media.tablet`font-size: 60px;`};
    ${media.phablet`font-size: 50px;`};
    ${media.phone`font-size: 40px;`};
  }

  h1.medium-title {
    font-size: 60px;
    line-height: 1.1;
    margin: 0;
    ${media.desktop`font-size: 50px;`};
    ${media.tablet`font-size: 40px;`};
  }

  .subtitle {
    color: ${colors.green};
    margin: 0 0 20px 0;
    font-size: ${fontSizes.md};
    font-family: ${fonts.SFMono};
    font-weight: normal;
    line-height: 1.5;
    ${media.desktop`font-size: ${fontSizes.sm};`};
    ${media.tablet`font-size: ${fontSizes.smish};`};

    a {
      ${mixins.inlineLink};
      line-height: 1.5;
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }


  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
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
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${colors.green};
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${colors.blue};
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
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

    a {
      ${mixins.inlineLink};
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: ${fontSizes.lg};
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: ${colors.green};
        }
      }
    }
  }

  .overline {
    color: ${colors.green};
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.md};
    font-weight: normal;
  }

  /* React CSS Transitions */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${theme.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }

  blockquote {
    border-left-color: ${colors.green};
    border-left-style: solid;
    border-left-width: 4px;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 1.5rem;

    p {
      font-style: italic;
      font-size: 24px;
    }
  }

  hr {
    background-color: ${colors.darkGrey};
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.md};
  }


  /* Gatsby elements */
  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .gatsby-highlight-code-line {
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    background-color: ${colors.lightNavy};
    border-left: 0.25em solid ${colors.green};
  }

  /**
   * Add back the container background-color, border-radius, padding, margin
   * and overflow that we removed from <pre>.
   */
  .gatsby-highlight {
    background-color: ${colors.lightNavy};
    color: ${colors.lightestSlate};
    border-radius: 0.3em;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.md};
  }

  /**
   * Remove the default PrismJS theme background-color, border-radius, margin,
   * padding and overflow.
   * 1. Make the element just wide enough to fit its content.
   * 2. Always fill the visible space in .gatsby-highlight.
   * 3. Adjust the position of the line numbers
   */
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .gatsby-highlight code[class*="language-"],
  .gatsby-highlight pre[class*="language-"]
  {
    height: auto !important;
    margin: 1rem;
    font-size: 14px;
    line-height: 20px;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .gatsby-highlight + .gatsby-highlight {
    margin-top: 1.250em;
  }
  .gatsby-highlight-code-line {
    background-color: ${prismColors.lineHighlight};
    display: block;
    margin: -0.125rem calc(-1rem - 15px);
    padding: 0.125rem calc(1rem + 15px);
  }
  .token.attr-name {
    color: ${prismColors.keyword};
  }
  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata
  {
    color: ${prismColors.comment};
  }
  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted
  {
    color: ${prismColors.primitive};
  }
  .token.boolean {
    color: ${prismColors.boolean};
  }
  span.token.tag {
    color: ${prismColors.tag};
  }
  .token.string {
    color: ${prismColors.string};
  }
  .token.punctuation {
    color: ${prismColors.punctuation};
  }
  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted
  {
    color: ${prismColors.char};
  }
  .token.function {
    color: ${prismColors.function};
  }
  .token.operator,
  .token.entity,
  .token.url,
  .token.variable
  {
    color: ${prismColors.variable};
  }
  .token.attr-value {
    color: ${prismColors.string};
  }
  .token.keyword {
    color: ${prismColors.keyword};
  }
  .token.atrule,
  .token.class-name
  {
    color: ${prismColors.className};
  }
  .token.important {
    font-weight: 400;
  }
  .token.bold {
    font-weight: 700;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .namespace {
    opacity: 0.7;
  }

`;

export default GlobalStyle;
