import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';
import TransitionStyles from './TransitionStyles';
import PrismStyles from './PrismStyles';

const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }

  /* Provide basic, default focus styles.*/
  :focus {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }

  /*
    Remove default focus styles for mouse users ONLY if
    :focus-visible is supported on this platform.
  */
  :focus:not(:focus-visible) {
    outline: none;
    outline-offset: 0px;
  }

  /*
    Optionally: If :focus-visible is supported on this
    platform, provide enhanced focus styles for keyboard
    focus.
  */
  :focus-visible {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--navy);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-xl);
    line-height: 1.3;

    @media (max-width: 480px) {
      font-size: var(--fz-lg);
    }

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  main {
    margin: 0 auto;
    width: 100%;
    max-width: 1600px;
    min-height: 100vh;
    padding: 200px 150px;

    @media (max-width: 1080px) {
      padding: 200px 100px;
    }
    @media (max-width: 768px) {
      padding: 150px 50px;
    }
    @media (max-width: 480px) {
      padding: 125px 25px;
    }

    &.fillHeight {
      padding: 0 150px;

      @media (max-width: 1080px) {
        padding: 0 100px;
      }
      @media (max-width: 768px) {
        padding: 0 50px;
      }
      @media (max-width: 480px) {
        padding: 0 25px;
      }
    }
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
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

    &.feather {
      fill: none;
    }
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);

    &:hover,
    &:focus {
      color: var(--green);
    }

    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
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
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }

  ul {
    &.fancy-list {
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
          color: var(--green);
        }
      }
    }
  }

  blockquote {
    border-left-color: var(--green);
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
    background-color: var(--lightest-navy);
    height: 1px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    margin: 1rem;
  }

  code {
    font-family: var(--font-mono);
    font-size: var(--fz-md);
  }

  .skip-to-content {
    ${({ theme }) => theme.mixins.button};
    position: absolute;
    top: auto;
    left: -999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -99;

    &:hover,
    &:focus {
      background-color: var(--green);
      color: var(--navy);
      top: 0;
      left: 0;
      width: auto;
      height: auto;
      overflow: auto;
      z-index: 99;
      box-shadow: none;
      transform: none;
    }
  }

  #logo {
    color: var(--green);
  }

  .overline {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;
  }

  .subtitle {
    color: var(--green);
    margin: 0 0 20px 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    font-weight: 400;
    line-height: 1.5;
    @media (max-width: 1080px) {
      font-size: var(--fz-sm);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-xs);
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
    color: var(--green);

    .arrow {
      display: block;
      margin-right: 10px;
      padding-top: 4px;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      font-weight: 600;
      line-height: 1.5;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .bike-image {
    cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAas0lEQVR4nO1dCVTTZ7Zntjfzlpl5571z3nvz3pyZzkynagIBsgNhX5OQPSGEEMIaQiAEAUFQBBXX1q3VurRWrVWr1qXua5HgUmu11dq61KqJVhPsrtNqtb3v3A+zQUCCKDiTe8495J//P////b7fd5fv3u/7ExISpCAFKUhBClKQghSkIAUpSEEKUpCCFKQgBSlIQQrSsKJ1AD87eMPGtDrtdR1O+9YOp/2jDof9iw6H7Z7Vab9DPjvtH3Y4bZs6nLaJHdevJOw4f/6XQy333x0d6Lzy1w6HbcH9DoeA2GH/ssNpX9zeeZk+1O144snquELD0W512H4IGAi/4Nh2HnRejRjqdj1x9C68+4sOh72JmKHBAMIXlLtWp31O26VLvxrqdj4R1Hb90lMdDvuJQQeiG1sdtvfRFA51e4c1Hbh2aVSHw2Z/1GC4QXHaPm93Xo4e6nYPSzp0zc6yOm2fPS4wvEzYzfbrdnbIPwKljxjxVCplpD6dOsqSPmpUbEhIyE/8Xdfeefl3HQ779ccOhpttN/6uzVdzSMhPpWzWAikr8m8t5tJvZo6t/k6TGHdLymK+nzJixP96X9sG8HOrw24dOjDcoJw6bLf/c8jfQ+enjhrFT6OOrEqlUJSpNNq/SpmM58xZilufOT+BO7dvEP72bw5YNGPSXTEz8gyDwfiF6/dWh33q0IPh5tkhTzLhaJeymccL+KlfPzduzLc1eZqbmfSILzMjabc7HR+7wXDx7e86wSgT30yljsx2R1RO++1hAITLn9x7kucpP5GxWYeWPNt6Fzva1envtO+E11+ef7c7GC5etXAOZEaG70mjjKyY+/LCA9brl4YeCC+2OmzbQ55ESgkdwVTzom9+963Db8f3xns3rwFVDPe72RPG3jZnq8CYo4YDVz8ZToD8eKDzUmTIk0bp1FF19YV5XwUCxh0vf+IyYQ2GQqixVMCiNStg38UzwwMUp31hyJNCqTTaf0lZjJOKKM53EyoMPyybNwNufXMtYFDu3Ofzp4/C/NYJUG8oAEVMFKzctXXIAcEk5vR6w28zQp+h8cNGhKm4vx++0ZeMzTy6eKbHb1y5+AFsWL54wIDc8WL0P6o4Huw6d2rIwNj7yRmYNLEJhJG073UpiV8jCyNotyUs+orkkSP/M2Q4EY6WbD9+4/SJjkEB5M7tGzCrqR6mz5nZo6N2nz8FY6orQZ2cAMo43gNZK0iHF5a/hD6h/2Bc+Aj0Ij7RWO+Q/YbzAsyb2HhHwoz4VECh/E/IcKE06ghFbb52QH6jv7zptZegobaqR2cVKKQgjAwHeWIiKJKT+2RZfBykU0cRLlTJYH3HWz3ut+PD92Bdx37Y8eEJ93fmIj0smzezV9lemT3texmHaQ0ZLpQ6ahRHk8D7xjvMHWyeO7ERpj471afztn9wnHRutlgC+Xn5D2StMotc/wo7EQqYLMgIpUJjYx3RgNfbdkOJSgYqXhQYFRJQRHPAlKshQYUmKQ7+dut6r7LhOVUM9xZaipDhMisXMyM+Wrlg1r1HAcapd9tBxmXBtlPv9rDr6WEUUKalBQTI4ZhMuBangOXsRBCH00DCYoKExYBta1fA7W+d5JlofvdsWg0SNhOeHTfmgTLObKz5Np0yshz9SSqFEpHC+PNvhxSUVNozf8pJS/6ySqeBV+ZMh9WL5rr5/XfawHH1LKxZPM/9+eSxNrh+5Qz5brXXtd68csFsmFRtBlkUG5ZuWufXvjdPmkA6OZMRCSImo08W0iPcgHTGKQmf40mgic6FjFAKVKoV8NF7h3w6Go/74wsXTG3+nh9GvSaghd7NS038WhQZflvKZr0eT6H825AAcrDziuDAp5dg0dqV0Dq9FSa2Nrt5696tcOLcezBn+iTYsa/r867928nf1iktPtd686QpLTD35YWw82zf0dWyLRtg8rTJvd7HxXW1Fh9A3osRgfM+MO1RfChiMIEfSoV5LY3weefFPgH46gs7nPvgbfjqcxs5nj7GcmdqTeWdr7+8Qo7x77QxlttSNqP9sYPx9mfnf/M4C0gdA+T1h9p8ADkSLYRZjBg4EyMhx9fjlLCSnQjScBoouCx4Y9lCtwnrzhfPHYf2nRth+byZsHvTKr/X4URXmxT/TRplRE73bPYjJavD1jjUnd0xAECQr8UqYCkrHvZHZbi/O8+TwmRmNDFj5XIJ8WF9RoArl8DZU28T/vKzyz7nNq98+fsCftpXEib9WxmXeRoDoAF1chqF8h9p1JEnMkKptoxQir0vVsXH3stKSgBv1mUKhsfs2ukHkGgPIN68hp0Ep2PE7mNixuiMB5qxLz67BM82VMOBHW8QjTm8f1uPa1CD9m9ZB1IW/VbGqFHJAQOCkQIKL+Hx7jwovvfH8vhY4IeHwfzlLw9ah+698BFMn/MslGhUoE5N8hkA/WFFXMx9QIR+ASGRFysBLsfKfL5bwUoASXgYqKI4sG3dCpJr60tjFs+cDGdOHumhLcgH974JYkbE5/F//OOvBgRIjlz5TX9Cyu6s1+lBlZZKOmDSlIkBzYw7/PCatl0g50URkKWxPJAnJQU0QGQJ8ZAeSoHGhGT4NFbhFxAX22JlxLeg0/eOxiYyusyYOUtOcm29AYKmC/3LyvmzYPu6V3ucr1Arvk6nUMQDAkSRnHwji8//ojfOlcu/16tU4MNqtRsYtVAA6WFUqC43QtuVCwMCY8v7R0HEYoCUFw15Gm3AgyNPqwMVlwOzuAl9AuHN1++bsMXMOKIl3mYsJzwcmozF/ZpDoUZ1Bw8rpGmUkfUBAZJGpYYjIEUqJYxvbAyI66qroCDbA4pGIgVBOA2KVAqSewoUkNHlpSDmsECv1flqYW4eFOfqoESbA4Y8HRj0XVxWkA9lRV1sLMwHFZftA8aJaM/IfxCjT0FtecfL7zRGcqCxJL9fgGB4fOSt7b6TyIZqMokMCJCMp5/+ZUYodTWCIufF3BtjsUBLS0u/2WI0QJ4XKFqlCsRsJmSnJMGmY4f6DUbblQvETKnS033AKNbmQEm2GlCu8Q0NfgfG2DFjQB0TBbO48e7OXMZKgLYofr8BQXbEKWA1OwnWc1ICBqQ73/z6U1BEsW9lUCiUkIFQOnVEQkYo5Ww6lfJjnlhEGtpfUIy5OT4mRqfWgIwXDZn0iH47YmV8LPFDOTKFB5BsNVSWFPf57PHjxkE2L8ZHMw5GCYjJCQQMb3beN10DBQTTMdPGWL6TcVibQx6Gmhc3/0vzxKbTmcxIkn6QRUeBLJoLsigPy2OioWHMGJ9OmTBhAhSqFMS0eOx5LihTUwNyyMrUVJ97FGdnBQwGRk8f86QDBgP5LE8CK9iJoKOFQ1WOHD5872C/GNNF6NxLxIKbMjbz4EOnU7B06UpNT5k5xW9aQhLFBr1Y1LNzGhshXyEDfZ4+YGec74+zNWAxlAQExkDMlK9mKGERKw7k4RSYoBwBRcnPgD6RBkUySa+s46fflLFZ55GVUZzTci5rczp1pLy3RYEB5aiwwP8gWz/1uWnAp4XBuIaGHp1UX1MNepkECrPVhE0GA5hKS93H1dU1UGWpch/3xTpxJtG83sDQxPqC8To7+aHMFDI69dI4Cny06vfw+a7fwbjsp8GiEz7I/30U8ijI6rC91x/nu/vj06RQVKRU+O2sCU1NbmeLn72PW/Ca5uZ+RXD4u/6CcSha4BOyDoQRTFUkBS698X8EDBcglTrxA/rEdmPQwehw2FICCU/HNzUQh900fnxAEVnLQ3IXGLxBNVMuHkfnwGs1f3GD4QLEnCfruz8ctruDDojVaZ8bCCBYQOLTqGDI0fjVkFpLJZiLi8BiMMDosjKoriiHpnHjHh6MuMEBA7UJZ+f7uBmwjZNGWBFOhf1z/gCf7ewGiF75AEDsXww6IAPZIEMmcSwGsfMIQL5UAhI2lksp7nq2D4dSQBbFgVyhAKqMpcR0BQJGzkOCcYYnIdneCjoLBGFU/zJSR4EoYiRUif4KKxueAovor1CRr36QhpwbfECcts5AAdlw5ADpfEx1YEMwRG4YWwtL1q2GjW+3w54LH5LS657zH5BFBi8sWwwNdTWgSUsh1yOYZbpcaH4AMF1gxA4YjOMxmdBE5xBZhRHhUGkohNkLX4CVu7fA1pPvkEQm8raTx8h38+ZPhmo9H0SRXaCVF2gfpCHrBx2Q3vby4brbQpUcxtbXkA7ufr6+djSYCvPg5Q2vQ/u1/q/RXb1/J1SWFndpTTQXaszm3sGIHxgYV+MUJGriU6mgSYyHuS+9CPsunu23jLiKct5LC2HFto0PurZ20AHpcNiv+XsYCiSP44EqNYWkQ2YvfL7Pjn+9bQ/U19VAYZYS1GkpIIuJgqzkRMiTiqGurgZe3bkZrNcvu69fs38XZCcnAZ8WCmU63aCBgRVCcVgoCMND4dnnZwGWnD2D7DK8uvNNIieG6FkpSUROdWoyFKgUUFc7Gla37ep31traefWZQQfE6rAf6/4gNDcSLgtyVVlkoparVoM8MR5UiQmw7M033NdhY1tnTiVJQVRx7FwRlwPS2FiyhkoWFwfiqCjIoIWS8xIOG5pbm8kCawS3OFsFCl40OVecpXKDoU2IGxAYeA0/lNIlByMSVu7e6s6VtbS2gITLccspxixEXBwokpKIvKIoDsmnEZPKZsKkaa1w4NOLvYPhsD+aNVq4UaX7w8Y11oEyJaXHDFojlYEkmkM6EhcmSKM5xPRgg/Ac1kf8zrx1esiRK0AaF0fsuYTLBqNOA9mpycSPlOZq3aB0B+MiTwrWKEG//AWCgStTGuvrobrcRDp22uwZRM6M+3KiHCiP3/pOnh40MjmRM53aJedLG9b2Aoot75EAYu20x3s/CLO0IiYd8nL81ySw02Xx8V1Onct2a1F/OTdLDUJ6JDEV3uFwoUpJQJnAigk4lL3Ik4EmIgKkHCZZSurKJCAoqA1CJgNyVerA5FSpQcztAnLyjFZ/GnIB90cOOiAA8FPv0Le60gRSHq/XUYQpchJZJST0yF0ZjaVQWV4GpuICKNXlgDFfB2aTEQwlBo+WicQkOsNR7AIDtUQvyiRZgJzISLgSKw8IkEY6ByQMOhlMLZMmgCohzgcUcl+Z3C1DWakRLBXlYDYawKDTQll+HpGztKSkW3v1xPRie8ePb/AXZR3HFx0MOigHnbY078qdUZ8LkigOaMRSX5MlkRJVxuysz/diCQjCw0g4W19bBc8tmAsLVy2DOYvnw9i6GlLn1ktFUJSTQzqnbvRoHydelKWCPLGwSzsjw+F5Zmy/wdjF7Rogi19/zd1R5pJCEsF1B6VIqyVBB86JMsKoMGPuc0TOuUsWQEN9Dfk+XyaGClO5T/swE42mef6Kpf5AqQl5FNThsM/zfhCuJtGkp4IiPpaYJTRhqP6SmGgf7VGlpQM/ggYiLhcyaFQw5uWSuL57CD152mTye5y9e4NRlqcjHbr+0AFy7ZSZUyEzLJSYof7ULgoiIsGk1biftfvcKRBGRoAASwhR3UCJoEFdjQXesn8MBXIJvLbHd8VM25WPYULLeMgIC4UqczkU6Avc7ZTyYkg7d5w52c102b45eOPGrwcdELJF2Wnf4v0wjIQwhkfnJomOIpleb9+iSEkBIYsBOo2GHIu5XAKYiEWH5pYm2H/5HLkPrkpUxcdCeUG+DxiVhhJSe+GH08BcWtzVoR+fBjE9ApazE/qtHav37XTLbCrKJ1GdLkdLApPuoIjZDBJ9YeZ6QvM4n87FqBE1FTU8N1NAZHL7Tq2O3LeipNCPP7mSO+iAeIHSI7e16WgHUXHvBc/ETEVG+ACE1ULsXK1cAcrkJJBGc2HeK4tBJxJAsdq34FRrNnfZdqWS3Bfv71poXWspB314ZL98R74gwy0nAo/38S4Fa0XCHj4FQZn14jzITk3yaSdGZOVFevIZJ8N4fvToKh//iU5+a3cL4LRtDHmURDLADvtx1wMxykBBcGUHES43DwQR4b4lV1d0kikk29PMOdkwukBHFlHnCjJ80iRja2qIY9fK5e7Rlx5KhebWFvK8pRvXkpGPy3J6A+PTODkIw6gw84XZ7o5pahlP7pOXk0vuW6gvIOVhs6GoJygsJgFvjLEIZrY2w4pNa0kKCLc/uO63as824v+KC4s9WhJGhebJzd0AsZ8OedSE0Vd7pz2uw2mfpU5NuY3myNXpJXk6Yo+ViQlEK1zf1xqKQc5hwph8Haxa/AIYJJmgSU7yKTaNGzsW5NE4i08Ai9njPMXRUaAV8N1mCwfAm5zUPieBCNobh7t8D3KOMAMk0dHue1aWm8CYl0PO+Y2+ImgwsdIEz46vBxmHCfXlpT3MkUmfC1VVFh85s9PTuofAX4c8TkoPo95D5+0SyqDVEFOEtlbEZoAyJRlqjKWgSYiF40fb4ZMLp2HJc9MgKz62R+pdGccjJkMvyQRlXCxIeDGEhQw6GX1V5QbCAlooLOgj2sK6tzCc5k7HYOCAQYO3uSrWqGHBylfcHdc8sYn4Mm9QpGwG7NuxCY6/YwVtYjysfGO1T2e/uGo5FKtVHrOVkUHk9E6voGN/bGCIR4z4NY5EdWamWyhc4rn53a5lPpjRxUxvUSYf1q94iYBx6MBukHHZ0Fhf1yNpWFVmhNFGI4xvbICG+jFg0Oa6uUyvh/HjGgirYmNgGiO6V0BmMmIgLz3VE12dP0U0Bn2bO1xNiIUt7x316eACER+y4j2Tx4qiQqjIVhK5N772ChiVvkWpN989DHKeR+uyRWLyHGy3l4aceWyA8EeOfKZriY5nYpXJosOqvdvJPj0XY+7o/eOHScNWzJ8DFbk9C1gtAXB2SjJx2r0BMpEeBYZsTwEJ5zDdlxJh+IsRmLecci4bJldXEu3FAVNtKIbROg2R+4OT7+CbJnyux+w0hsHuIEHRlVHAMoOXhmx4bICkUCh/ICNPIvMAgqkVsZBMolwsokfAEete0rAdG9ZAXnoKTHwIQFQJ8aSW0Rsg4+lct39Axgitu5yYINWJfOXEDj/SvgdenNGKq9Qhn58OHft3ELmPHW4jfsX7ejStCKzrnjgw8TmoOY88r+WPVBTKP6EAWQKhZ5QI0mGtdZ+PajdUGOH5yRNIw5BbLCbISYoHS242FEsyoUyjgjJ9rg+X5KhBkRDv5qzUZPc5MZMOklAq6MLC/TKew8mdew5x9RPoLme+QgJr3trlI+fEump4vrXZLac3vzh9EjRXV/pcj+3UCjM85looIs9xzbHwzadtX17695DHSXxa2G3vdEl5cSGJ2b0F3/7uYVBEcUl05Wqgdd92mD62FiRMOsx78XlYsnaVm9Fx62VSYpORMTrCSaLr/OxFL8C0MlOf/PIba3xkQM31ltNUVEC2Nnhfs+v9d0jw8doij5zIa5YuhOx4Hmw/4T3y7SSsLivQ+06G6RHeIW9dyOOmTBbzbSGT7haqosIEmrRkn+IP8mbrPtL5uO24Nj8X9OkpoEmKh5y0FJ/aAkZEWn4amMs9YW8mi0mioh65ogC4RKsBbzkrqypJeN1dzvlLXgR+WCjR4Bq9FrRJCSRyWrhsCXTPVOA6ZbPZ7CUnA4qys1ym6uiQvOFUxGYUoZpi6twlWJFaQcJen4a+uhTyxALY2LYHXl2/mgCE4aHFWAKtM6a4r8N0TL7cEw3psrKJGZizZMFDAYLP75Iz20tOpc/kcf+ls5CVFA8rd26Bzdb9sGLdKtjUvpdoJfpF71dGYf29KMsTJOSqu+Scu3QRLnCwH7xhe3x7Cr0JdwJl0EK/k2Ba3pXCNhrJ5hqczbrCX5zV+ntzwq4zJ0EewyX2GDfvy2OioKzM6EncYcWOSX/oVzVhcjCTiXtMPHKayk2giOO5E4njm8aS9QD+fl+q05AMNX7G6AozxmUmk4+caBb3XTp7bMjAcJGAzZxAwkqF0sd0odC4TRp9wqSpE3vtrIWrlpF3lSCI5nJPI7VyDCOxCOTRoIfhGfOeg+5yms0VZC6BW7kxlYIrTfz9duPRDjJwcJUMVhktlWafrRaYgreUl+0fFu+UV6lCfiaIjHB2JRRzPQ6+3ARZSYkg5jDh1e2bfFSe+AuHjWxVsxhLSJUQ1/x6Z1DxfuqU5IBWrvTF+Hys/XeXs8JcQUrGGMou37rRZ8FF1+8uw5J1q04peNG3VElxd01lph9cv8UEKt5PwIi4ER8f//OQ4UISTvhTGeFhd0RsNtly4BK4IL8AKitMkCvkkwRdcbYSLGUGKNVqyHF2WjKYTWVQlF/gA0YmmwlCeji8eeLtQQHDxdtOHSOmJZPN8iREMdmIcpqMpM4j5bLJS23MhkKy3EkSxflREEG7IE9KbMvX6e94y4ml6oww6vcZDMZfQoYbiTic1Iww6l3MPXk7TxeXGkqhotxEzFJ5t/JtvlddHW09pt9XedUyBpNf3b0VBJHhIKTTSdDQQ84SA5jKjDDWYoG6SguYSkrvdb8GE6f3c2z3hByGIGS4kojFogrCaV9h6IhxeV6u777A3liv1ZHaB6bIpdFRsO7g/oczT/ifExz2ZfhGUX/ncTaNu7kwpMX5Sff9i73KmZtH5MSCHD+CdjODyRz+72HMePrp3wgZjLXpoZQfsSiFK1E0UmnPTZtaHUlnyBMTScUNOwcrcW/Zzw+GJlSgLO2dl4WYAvd3Da5YrK22kExwX3KiacOlTPKEBLJ5Fdsl4rJ3xIf/8fHOwh+WhEzmn0Us1nYhg37Hs7iaSpwgapB7ITOLARZTKbHvD+24HbYfrE672VuOI45P/tvqtC/CLQL+frPl/WNgKTe6F8t55Awnf13f8cPDbmUymTulw9FfBErPL11YN3vxgtvNk1ugerSZvFZp9uL5sOGIddB8Q5cmXMFtY34J5wdWp62sw2Hf1vVvkWw3rU7bt+TFOV3f1VaVlaWJ2OwKEZs9L5PFXI9/RSyWWcykDX/TNLB/UWQ/+CgctdVh72i/fvlPQ93GJ44A4CdWp72gw2m/NChAOO2XrQ67Bu871G17oglX9Vmdl3VWp+2tgP+XVFfktL+j06Z6JKsD/9GpvfPy73D90n3He8DqsF3tcNi/6up8+5dEC5y2NqvD9sJBh1179OrV4fWe3CAFKUhBClKQghSkIAUpSEEKUpCCFKQgBSlIQQpSkEKQ/h+C7ZWQkQVjggAAAABJRU5ErkJggg==') 5 5, auto;
    transform: scale(0.1);
  }

  .bike-cursor:hover {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bicycle" viewBox="0 0 16 16"><path d="M13 11a3 3 0 0 0 3-3V3H8.5a3.5 3.5 0 0 0-3 1.573A3.5 3.5 0 0 0 2 8a3.5 3.5 0 0 0 3 3H1v2h2.5a.5.5 0 0 0 0-1h-1a2.5 2.5 0 0 1 0-5h6a2.5 2.5 0 0 1 0 5h-1a.5.5 0 0 0 0 1H14v-2a1 1 0 0 0-1-1H9.707L11 5.707 12.293 7H13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1a1 1 0 0 0-.986.835A2.497 2.497 0 0 1 11 4.5 2.5 2.5 0 0 1 13.5 7a2.5 2.5 0 0 1 0 5H13v2z"/></svg>'), auto;
    transform: scale(1.2); /* Optional: Add a scaling effect on hover */
  }

  ${TransitionStyles};

  ${PrismStyles};
`;

export default GlobalStyle;
