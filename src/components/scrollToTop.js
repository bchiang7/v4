import React from 'react';
import { Link } from 'gatsby';
import { MdArrowDropUp } from 'react-icons/md';
import styled from 'styled-components';
import { useScrollTo } from '../hooks/useScrollTo';
import { useLanguage } from '../hooks/LanguageContext';

const StyledScrollToTopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 100px;
  margin-top: 30px;
  height: 100%;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    color: var(--primary-color);
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    transition: var(--transition);
    margin: 0 auto;
    text-decoration: none;
    font-size: var(--fz-sm);
    position: relative;
    font-family: var(--font-mono);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--primary-color);
      transform: translate(-5px, -5px);
    }

    &:hover svg {
      color: var(--contrast-color);
    }

    span {
      position: absolute;
      top: calc(100% + 5px);
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      font-size: 12px;
      margin-top: 10px;
      white-space: nowrap;
    }

    &:hover span,
    &:focus-visible span {
      opacity: 1;
    }
  }
`;

function ScrollToTop() {
  const { scrollToEl } = useScrollTo();

  const { t } = useLanguage();

  const onClick = e => {
    scrollToEl(e);
  };

  return (
    <StyledScrollToTopContainer>
      <Link to="#intro" onClick={onClick} aria-label="Scroll to top">
        <MdArrowDropUp size={28} />
        <span>{t("general_scroll_to_top")}</span>
      </Link>
    </StyledScrollToTopContainer>
  );
}

export default ScrollToTop;