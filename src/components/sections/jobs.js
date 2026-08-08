import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import { KEY_CODES } from '@utils';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { useLanguage } from '../../hooks/LanguageContext';

const StyledJobsSection = styled.section`
  .experience-intro {
    margin: -10px 0 40px;
    color: var(--light-text-color);
    font-size: var(--fz-lg);
    max-width: 540px;
  }

  .inner {
    display: flex;

    @media (max-width: 600px) {
      display: block;
    }

    // Prevent container from jumping
    @media (min-width: 700px) {
      min-height: 340px;
    }
  }
`;

const TabListWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 601px) {
    width: max-content;
  }
`;

const StyledTabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
    padding: 0 16px 4px;
    margin-bottom: 30px;
    gap: 8px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 480px) {
    padding: 0 12px 4px;
    gap: 6px;
  }
`;

const ScrollHint = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 4;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid var(--lightest-bg-color);
    background: var(--bg-color);
    color: var(--primary-color);
    align-items: center;
    justify-content: center;
    font-size: var(--fz-sm);
    cursor: pointer;
    box-shadow: 0 2px 8px var(--bg-color-shadow);
    transition: var(--transition);
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};

    &:hover {
      background: var(--primary-color-tint);
      border-color: var(--primary-color);
    }

    &.hint-left {
      left: 4px;
    }
    &.hint-right {
      right: 4px;
    }
  }
`;

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--tab-height);
  padding: 0 20px 2px;
  border-left: 2px solid var(--lightest-bg-color);
  background-color: transparent;
  color: ${({ isActive }) => (isActive ? 'var(--signal-color)' : 'var(--text-color)')};
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 0 15px 2px;
  }
  @media (max-width: 600px) {
    ${({ theme }) => theme.mixins.flexCenter};
    flex-shrink: 0;
    width: auto;
    min-width: min-content;
    padding: 0 14px;
    border-left: 0;
    border-bottom: 2px solid
      ${({ isActive }) => (isActive ? 'var(--signal-color)' : 'var(--lightest-bg-color)')};
    text-align: center;
  }
  @media (max-width: 480px) {
    padding: 0 10px;
  }

  &:hover,
  &:focus {
    background-color: var(--light-bg-color);
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: var(--tab-height);
  border-radius: var(--border-radius);
  background: var(--signal-color);
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * var(--tab-height)));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const StyledTabPanel = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    margin-bottom: 2px;
    font-size: var(--fz-xxl);
    font-weight: 500;
    line-height: 1.3;

    .company {
      color: var(--primary-color);
    }
  }

  .range {
    color: var(--light-text-color);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    margin-bottom: 25px;
  }
`;

const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              desc
              company
              location
              range
              type
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;

  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const [scrollHints, setScrollHints] = useState({ left: false, right: false });
  const tabs = useRef([]);
  const tabListRef = useRef(null);
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const updateScrollHints = useCallback(() => {
    const el = tabListRef.current;
    if (!el || window.innerWidth > 600) {
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const left = scrollLeft > 2;
    const right = scrollLeft < scrollWidth - clientWidth - 2;
    setScrollHints(prev => (prev.left === left && prev.right === right ? prev : { left, right }));
  }, []);

  useEffect(() => {
    const el = tabListRef.current;
    const run = () => {
      requestAnimationFrame(updateScrollHints);
    };
    run();
    const t = setTimeout(run, 100);
    if (!el) {
      return () => clearTimeout(t);
    }
    el.addEventListener('scroll', updateScrollHints);
    window.addEventListener('resize', updateScrollHints);
    return () => {
      clearTimeout(t);
      el.removeEventListener('scroll', updateScrollHints);
      window.removeEventListener('resize', updateScrollHints);
    };
  }, [updateScrollHints, jobsData?.length]);

  const scrollTabs = direction => {
    const el = tabListRef.current;
    if (!el) {
      return;
    }
    const amount = direction === 'left' ? -el.clientWidth * 0.6 : el.clientWidth * 0.6;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const { t } = useLanguage();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = e => {
    switch (e.key) {
      case KEY_CODES.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">{t('experience_text_title')}</h2>
      <p className="experience-intro">{t('experience_text_subtitle')}</p>

      <div className="inner">
        <TabListWrapper>
          <ScrollHint
            type="button"
            className="hint-left"
            $visible={scrollHints.left}
            onClick={() => scrollTabs('left')}
            aria-label={t('jobs_scroll_left')}>
            ←
          </ScrollHint>
          <ScrollHint
            type="button"
            className="hint-right"
            $visible={scrollHints.right}
            onClick={() => scrollTabs('right')}
            aria-label={t('jobs_scroll_right')}>
            →
          </ScrollHint>
          <StyledTabList
            ref={tabListRef}
            role="tablist"
            aria-label="Job tabs"
            onKeyDown={e => onKeyDown(e)}>
            {jobsData &&
              jobsData.map(({ node }, i) => {
                const { company } = node.frontmatter;
                return (
                  <StyledTabButton
                    key={i}
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    ref={el => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role="tab"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-selected={activeTabId === i ? true : false}
                    aria-controls={`panel-${i}`}>
                    <span>{company}</span>
                  </StyledTabButton>
                );
              })}
            <StyledHighlight activeTabId={activeTabId} />
          </StyledTabList>
        </TabListWrapper>

        <StyledTabPanels>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { frontmatter } = node;
              const { title, url, company, range, type, location, desc } = frontmatter;
              const jobKeys = Array.isArray(t(`jobs_${desc}`))
                ? t(`jobs_${desc}`)
                : [t(`jobs_${desc}`)];

              return (
                <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                  <StyledTabPanel
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? '0' : '-1'}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}>
                    <h3>
                      <span>{t(title)}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">
                      {range} | {location} | {type}
                    </p>

                    <ul>
                      {jobKeys.map((i, index) => (
                        <li key={index}>{t(i)}</li>
                      ))}
                    </ul>
                  </StyledTabPanel>
                </CSSTransition>
              );
            })}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
