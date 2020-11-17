import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
import { Projects, Papers, Presentations } from '@components';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  // ${mixins.flexCenter};
  // flex-direction: column;
  // align-items: flex-start;
  position: relative;
`;
const StyledTabs = styled.div`
  display: block;
  align-items: flex-start;
  position: relative;
  ${media.thone`
    display: block;
  `};
`;
const StyledTabList = styled.ul`
  ${mixins.flexCenter};
  display: flex;
  position: relative;
  width: 100%;
  height: ${theme.tabHeight}px;
  z-index: 3;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  list-style: none;

  ${media.thone`
    display: flex;
    overflow-x: scroll;
    margin-bottom: 30px;
    width: calc(100% + 100px);
    margin-left: -50px;
  `};
  ${media.phablet`
    width: calc(100% + 50px);
    margin-left: -25px;
  `};
  }

  li {
    &:first-of-type {
      ${media.thone`
        margin-left: 50px;
      `};
      ${media.phablet`
        margin-left: 25px;
      `};
    }
    &:last-of-type {
      ${media.thone`
        padding-right: 50px;
      `};
      ${media.phablet`
        padding-right: 25px;
      `};
    }
  }
`;
const StyledTabButton = styled.button`
  ${mixins.link};
  ${mixins.flexCenter};
  width: 100%;
  min-width: auto;
  background-color: transparent;
  height: 50px;
  padding: 0 20px;
  transition: ${theme.transition};
  border-left: 0;
  text-align: center;
  white-space: nowrap;
  font-size: ${fontSizes.h1};
  // ${media.tablet`font-size: 24px;`};
  // font-weight: 600;
  color: ${props => (props.isActive ? colors.green : colors.lightGrey)};
  border-bottom: 3px solid ${props => (props.isActive ? colors.green : colors.navy)};
  ${media.tablet`padding: 0 15px 2px; border-bottom: 2px solid ${props => (props.isActive ? colors.green : colors.navy)};`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 10px;
    text-align: center;
    border-left: 0;
    min-width: auto;
  `};
  &:hover,
  &:focus {
    background-color: ${colors.lightNavy};
  }
`;
const StyledHighlight = styled.span`
  display: flex;
  background: ${colors.green};
  width: 100%;
  max-width: 200px;
  height: 2px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: auto;
  left: 20%;
  bottom: 0;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateX(
    ${props => (props.activeTabId > 0 ? props.activeTabId * 200 : 0)}px
  );
  ${media.thone`
    width: 100%;
    max-width: 130px;
    height: 2px;
    top: auto;
    left: 0%;
    bottom: 0;
    transform: translateX(
      ${props => (props.activeTabId > 0 ? props.activeTabId * 130 : 0)}px
    );
    margin-left: 50px;
  `};
  ${media.phablet`
    margin-left: 25px;
  `};
`;
const StyledTabContent = styled.div`
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  ${media.tablet`padding-left: 0px;`};
  ${media.thone`padding-left: 0;`};

  ul {
    ${mixins.fancyList};
  }
  a {
    ${mixins.inlineLink};
  }
`;

const Works = ({ data }) => {
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

  const onKeyPressed = e => {
    if (e.keyCode === 38 || e.keyCode === 40) {
      e.preventDefault();
      if (e.keyCode === 40) {
        // Move down
        setTabFocus(tabFocus + 1);
      } else if (e.keyCode === 38) {
        // Move up
        setTabFocus(tabFocus - 1);
      }
    }
  };

  return (
    <StyledContainer id="works" ref={revealContainer}>
      <StyledTabs>
        <StyledTabList role="tablist" aria-label="Work tabs" onKeyDown={e => onKeyPressed(e)}>
            <li key={0}>
                <StyledTabButton
                isActive={activeTabId === 0}
                onClick={() => setActiveTabId(0)}
                ref={el => (tabs.current[0] = el)}
                id={`tab-${0}`}
                role="tab"
                aria-selected={activeTabId === 0 ? true : false}
                aria-controls={`panel-${0}`}
                tabIndex={activeTabId === 0 ? '0' : '-1'}>
                <span>Papers</span>
                </StyledTabButton>
            </li>
            <li key={1}>
                <StyledTabButton
                isActive={activeTabId === 1}
                onClick={() => setActiveTabId(1)}
                ref={el => (tabs.current[1] = el)}
                id={`tab-${1}`}
                role="tab"
                aria-selected={activeTabId === 1 ? true : false}
                aria-controls={`panel-${1}`}
                tabIndex={activeTabId === 1 ? '0' : '-1'}>
                <span>Presentations</span>
                </StyledTabButton>
            </li>
            <li key={2}>
                <StyledTabButton
                isActive={activeTabId === 2}
                onClick={() => setActiveTabId(2)}
                ref={el => (tabs.current[2] = el)}
                id={`tab-${2}`}
                role="tab"
                aria-selected={activeTabId === 2 ? true : false}
                aria-controls={`panel-${2}`}
                tabIndex={activeTabId === 2 ? '0' : '-1'}>
                <span>Software</span>
                </StyledTabButton>
            </li>
          {/* <StyledHighlight activeTabId={activeTabId} /> */}
        </StyledTabList>

        <StyledTabContent
        key={0}
        isActive={activeTabId === 0}
        id={`panel-${0}`}
        role="tabpanel"
        aria-labelledby={`tab-${0}`}
        tabIndex={activeTabId === 0 ? '0' : '-1'}
        hidden={activeTabId !== 0}>
        <Papers data={data.papers.edges} />
        </StyledTabContent>
        <StyledTabContent
        key={1}
        isActive={activeTabId === 1}
        id={`panel-${1}`}
        role="tabpanel"
        aria-labelledby={`tab-${1}`}
        tabIndex={activeTabId === 1 ? '0' : '-1'}
        hidden={activeTabId !== 1}>
        <Presentations data={data.presentations.edges} />
        </StyledTabContent>
        <StyledTabContent
        key={2}
        isActive={activeTabId === 2}
        id={`panel-${2}`}
        role="tabpanel"
        aria-labelledby={`tab-${2}`}
        tabIndex={activeTabId === 2 ? '0' : '-1'}
        hidden={activeTabId !== 2}>
        <Projects data={data.projects.edges} />
        </StyledTabContent>
      </StyledTabs>
    </StyledContainer>
  );
};

Works.propTypes = {
  data: PropTypes,
};

export default Works;
