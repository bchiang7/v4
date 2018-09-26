import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../config';

import styled from 'styled-components';
import { theme, mixins, media, Section, H3, P } from '../style';

import ScrollReveal from 'scrollreveal';

const JobsContainer = styled(Section)`
  position: relative;
  max-width: 700px;
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${media.thone`display: block;`};
`;
const Tabs = styled.div`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  ${media.thone`
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    overflow-x: scroll;
  `};
`;
const Tab = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-left: 2px solid ${theme.colors.darkGrey};
  text-align: left;
  white-space: nowrap;
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.smallish};
  color: ${props => (props.isActive ? theme.colors.green : theme.colors.lightGrey)};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${theme.colors.darkGrey};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: ${theme.colors.lightNavy};
  }
`;
const Highlighter = styled.span`
  display: block;
  background: ${theme.colors.green};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: ${theme.transition};
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0)}px
  );
  ${media.thone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0)}px
    );
  `};
`;
const ContentContainer = styled.div`
  position: relative;
  padding-top: 14px;
  padding-left: 30px;
  flex-grow: 1;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
`;
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? 'relative' : 'absolute')};
  transition: ${theme.transition};
  transition-duration: ${props => (props.isActive ? '0.5s' : '0s')};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${theme.fontSizes.large};
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 5px;
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: ${theme.colors.green};
        line-height: ${theme.fontSizes.xlarge};
      }
    }
  }
  a {
    ${mixins.inlineLink};
  }
`;
const JobTitle = styled.h4`
  color: ${theme.colors.lightestSlate};
  font-size: ${theme.fontSizes.xxlarge};
  font-weight: 500;
  margin-bottom: 5px;
`;
const Company = styled.span`
  color: ${theme.colors.green};
`;
const JobDetails = styled.h5`
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.smallish};
  font-weight: normal;
  letter-spacing: 0.5px;
  color: ${theme.colors.lightSlate};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;

class Jobs extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  state = {
    activeTabId: 0,
  };

  componentDidMount() {
    ScrollReveal().reveal(this.jobs, config.srConfig());
  }

  isActive = id => this.state.activeTabId === id;

  setActiveTab = activeTabId => {
    this.setState({ activeTabId });
  };

  render() {
    const { activeTabId } = this.state;
    const { data } = this.props;

    return (
      <JobsContainer id="jobs" innerRef={el => (this.jobs = el)}>
        <H3>Where I've Worked</H3>
        <TabsContainer>
          <Tabs role="tablist">
            {data &&
              data.map(({ node }, i) => (
                <Tab
                  key={i}
                  isActive={this.isActive(i)}
                  onClick={e => this.setActiveTab(i, e)}
                  role="tab"
                  aria-selected={this.isActive(i) ? 'true' : 'false'}
                  aria-controls={`tab${i}`}
                  id={`tab${i}`}
                  tabindex={this.isActive(i) ? '0' : '-1'}>
                  <span>{node.frontmatter.company}</span>
                </Tab>
              ))}
            <Highlighter activeTabId={activeTabId} />
          </Tabs>
          <ContentContainer>
            {data &&
              data.map(({ node }, i) => (
                <TabContent
                  key={i}
                  isActive={this.isActive(i)}
                  id={`job${i}`}
                  role="tabpanel"
                  tabindex="0"
                  aria-labelledby={`job${i}`}
                  aria-hidden={!this.isActive(i)}
                  hidden={!this.isActive(i)}>
                  <JobTitle>
                    <span>{node.frontmatter.title}</span>
                    <Company>
                      &nbsp;@&nbsp;
                      <a
                        href={node.frontmatter.url}
                        target="_blank"
                        rel="nofollow noopener noreferrer">
                        {node.frontmatter.company}
                      </a>
                    </Company>
                  </JobTitle>
                  <JobDetails>
                    <span>{node.frontmatter.range}</span>
                  </JobDetails>
                  <P dangerouslySetInnerHTML={{ __html: node.html }} />
                </TabContent>
              ))}
          </ContentContainer>
        </TabsContainer>
      </JobsContainer>
    );
  }
}

export default Jobs;
