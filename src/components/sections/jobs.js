import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import { KEY_CODES } from '@utils';
import sr from '@utils/sr';

const StyledJobsSection = styled.section`
  max-width: 700px;

  .inner {
    display: flex;

    @media (${({ theme }) => theme.bp.tabletS}) {
      display: block;
    }
  }
`;

const StyledTabList = styled.ul`
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (${({ theme }) => theme.bp.tabletS}) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    margin-left: -50px;
    margin-bottom: 30px;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    width: calc(100% + 50px);
    margin-left: -25px;
  }

  li {
    &:first-of-type {
      @media (${({ theme }) => theme.bp.tabletS}) {
        margin-left: 50px;
      }
      @media (${({ theme }) => theme.bp.mobileL}) {
        margin-left: 25px;
      }
    }
    &:last-of-type {
      @media (${({ theme }) => theme.bp.tabletS}) {
        padding-right: 50px;
      }
      @media (${({ theme }) => theme.bp.mobileL}) {
        padding-right: 25px;
      }
    }
  }
`;

const StyledTabButton = styled.button`
  ${({ theme }) => theme.mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.tabHeight}px;
  padding: 0 20px 2px;
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  background-color: transparent;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.green : theme.colors.slate)};
  font-family: ${({ theme }) => theme.fonts.SFMono};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: left;
  white-space: nowrap;

  @media (${({ theme }) => theme.bp.tabletL}) {
    padding: 0 15px 2px;
  }
  @media (${({ theme }) => theme.bp.tabletS}) {
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightestNavy};
    min-width: 120px;
    text-align: center;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightNavy};
  }
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: ${({ theme }) => theme.tabHeight}px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.green};
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${({ theme, activeTabId }) => (activeTabId > 0 ? activeTabId * theme.tabHeight : 0)}px
  );
  @media (${({ theme }) => theme.bp.tabletS}) {
    width: 100%;
    max-width: ${({ theme }) => theme.tabWidth};
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${({ theme, activeTabId }) => (activeTabId > 0 ? activeTabId * theme.tabWidth : 0)}px
    );
    margin-left: 50px;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    margin-left: 25px;
  }
`;

const StyledTabContent = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  padding-left: 30px;

  @media (${({ theme }) => theme.bp.tabletL}) {
    padding-left: 20px;
  }
  @media (${({ theme }) => theme.bp.tabletS}) {
    padding-left: 0;
  }

  ul {
    ${({ theme }) => theme.mixins.fancyList};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: 500;
    margin-bottom: 5px;

    .company {
      color: ${({ theme }) => theme.colors.green};
    }
  }

  .range {
    color: ${({ theme }) => theme.colors.lightSlate};
    font-family: ${({ theme }) => theme.fonts.SFMono};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-bottom: 30px;
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
              company
              location
              range
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
  const tabs = useRef([]);

  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

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
    if (e.key === KEY_CODES.ARROW_UP || e.key === KEY_CODES.ARROW_DOWN) {
      e.preventDefault();
      // Move up
      if (e.key === KEY_CODES.ARROW_UP) {
        setTabFocus(tabFocus - 1);
      }
      // Move down
      if (e.key === KEY_CODES.ARROW_DOWN) {
        setTabFocus(tabFocus + 1);
      }
    }
  };

  return (
    <StyledJobsSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs" onKeyDown={onKeyDown}>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;
              return (
                <li key={i}>
                  <StyledTabButton
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                    ref={el => (tabs.current[i] = el)}
                    id={`tab-${i}`}
                    role="tab"
                    aria-selected={activeTabId === i ? true : false}
                    aria-controls={`panel-${i}`}
                    tabIndex={activeTabId === i ? '0' : '-1'}>
                    <span>{company}</span>
                  </StyledTabButton>
                </li>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        {jobsData &&
          jobsData.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, url, company, range } = frontmatter;

            return (
              <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames="fade">
                <StyledTabContent
                  id={`panel-${i}`}
                  role="tabpanel"
                  tabIndex={activeTabId === i ? '0' : '-1'}
                  aria-labelledby={`tab-${i}`}
                  aria-hidden={activeTabId !== i}
                  hidden={activeTabId !== i}>
                  <h3>
                    <span>{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a href={url} className="inline-link">
                        {company}
                      </a>
                    </span>
                  </h3>

                  <p className="range">{range}</p>

                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </StyledTabContent>
              </CSSTransition>
            );
          })}
      </div>
    </StyledJobsSection>
  );
};

export default Jobs;
