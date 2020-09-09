import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Section, Heading } from '@styles';

const StyledContainer = styled(Section)`
  position: relative;
  max-width: 700px;
`;
const StyledTabs = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  @media (${({ theme }) => theme.bp.tabletS}) {
    display: block;
  }
`;
const StyledTabList = styled.ul`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (${({ theme }) => theme.bp.tabletS}) {
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
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
  background-color: transparent;
  height: ${({ theme }) => theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${({ theme }) => theme.transition};
  border-left: 2px solid ${({ theme }) => theme.colors.lightestNavy};
  text-align: left;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.SFMono};
  font-size: ${({ theme }) => theme.fontSizes.smish};
  color: ${({ theme, isActive }) => (isActive ? theme.colors.green : theme.colors.slate)};
  @media (${({ theme }) => theme.bp.tabletL}) {
    padding: 0 15px 2px;
  }
  @media (${({ theme }) => theme.bp.tabletS}) {
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightestNavy};
    min-width: 120px;
  }
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightNavy};
  }
`;
const StyledHighlight = styled.span`
  display: block;
  background: ${({ theme }) => theme.colors.green};
  width: 2px;
  height: ${({ theme }) => theme.tabHeight}px;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
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
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 12px;
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
  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;
const StyledJobTitle = styled.h4`
  color: ${({ theme }) => theme.colors.lightestSlate};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 500;
  margin-bottom: 5px;
`;
const StyledCompany = styled.span`
  color: ${({ theme }) => theme.colors.green};
`;
const StyledJobDetails = styled.h5`
  font-family: ${({ theme }) => theme.fonts.SFMono};
  font-size: ${({ theme }) => theme.fontSizes.smish};
  font-weight: 400;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.lightSlate};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;

const KEYCODES = {
  up: 'ArrowUp',
  down: 'ArrowDown',
};

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
    } else {
      // If we're at the end, go to the start
      if (tabFocus >= tabs.current.length) {
        setTabFocus(0);
      }
      // If we're at the start, move to the end
      if (tabFocus < 0) {
        setTabFocus(tabs.current.length - 1);
      }
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = e => {
    if (e.key === KEYCODES.up || e.key === KEYCODES.down) {
      e.preventDefault();

      // Move up
      if (e.key === KEYCODES.up) {
        setTabFocus(tabFocus - 1);
      }
      // Move down
      if (e.key === KEYCODES.down) {
        setTabFocus(tabFocus + 1);
      }
    }
  };

  return (
    <StyledContainer id="jobs" ref={revealContainer}>
      <Heading>Where I’ve Worked</Heading>

      <StyledTabs>
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
              <StyledTabContent
                key={i}
                isActive={activeTabId === i}
                id={`panel-${i}`}
                role="tabpanel"
                aria-labelledby={`tab-${i}`}
                tabIndex={activeTabId === i ? '0' : '-1'}
                hidden={activeTabId !== i}>
                <StyledJobTitle>
                  <span>{title}</span>
                  <StyledCompany>
                    <span>&nbsp;@&nbsp;</span>
                    <a href={url}>{company}</a>
                  </StyledCompany>
                </StyledJobTitle>
                <StyledJobDetails>
                  <span>{range}</span>
                </StyledJobDetails>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </StyledTabContent>
            );
          })}
      </StyledTabs>
    </StyledContainer>
  );
};

export default Jobs;
