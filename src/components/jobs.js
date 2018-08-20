import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme, mixins, Section, H3, A, P } from '../style';

const JobsContainer = Section.extend`
  position: relative;
  max-width: 700px;
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
const Tabs = styled.div`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
`;
const Tab = A.extend`
  display: block;
  height: ${theme.tabHeight}px;
  padding: 10px 10px 10px 20px;
  transition: ${theme.transition};
  border-left: 2px solid ${theme.colors.darkGrey};
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.small};
  color: ${props => (props.isActive ? theme.colors.green : theme.colors.grey)};
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
`;
const ContentContainer = styled.div`
  position: relative;
  padding-left: ${theme.margin};
  flex-grow: 1;
`;
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : 0)};
  position: ${props => (props.isActive ? 'relative' : 'absolute')};
  transition: ${theme.transition};
  transition-duration: ${props => (props.isActive ? '0.5s' : '0s')};

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li:before {
      content: '>';
      margin-right: 10px;
      color: ${theme.colors.green};
    }
  }

  a {
    ${mixins.link};
    color: ${theme.colors.green};
  }
`;

class Jobs extends Component {
  static propTypes = {
    jobs: PropTypes.array.isRequired,
  };

  state = {
    activeTabId: 0,
  };

  isActive = id => this.state.activeTabId === id;

  setActiveTab = (activeTabId, e) => {
    e.preventDefault();
    this.setState({ activeTabId });
  };

  render() {
    const { activeTabId } = this.state;
    const { jobs } = this.props;

    return (
      <JobsContainer id="jobs">
        <H3>Where I've Worked</H3>
        <TabsContainer>
          <Tabs>
            {jobs &&
              jobs.map((tab, i) => (
                <Tab
                  href="#"
                  key={i}
                  isActive={this.isActive(i)}
                  onClick={e => this.setActiveTab(i, e)}>
                  <span>{tab.node.frontmatter.company}</span>
                </Tab>
              ))}
            <Highlighter activeTabId={activeTabId} />
          </Tabs>
          <ContentContainer>
            {jobs &&
              jobs.map((job, i) => (
                <TabContent key={i} isActive={this.isActive(i)}>
                  <h4>
                    {job.node.frontmatter.title} @{' '}
                    <a href={job.node.frontmatter.url} target="_blank" rel="noopener noreferrer">
                      {job.node.frontmatter.company}
                    </a>
                  </h4>
                  <h5>
                    {job.node.frontmatter.range} &#47;&#47; {job.node.frontmatter.location}
                  </h5>
                  <P dangerouslySetInnerHTML={{ __html: job.node.html }} />
                </TabContent>
              ))}
          </ContentContainer>
        </TabsContainer>
      </JobsContainer>
    );
  }
}

export default Jobs;
