import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme, mixins, Section, H3, A, P } from '../style';

const TAB_HEIGHT = theme.tabHeight;

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
  width: 100px;
  height: ${TAB_HEIGHT}px;
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
    ${props => (props.activeTabId > 1 ? props.activeTabId * TAB_HEIGHT - TAB_HEIGHT : 0)}px
  );
`;
const ContentContainer = styled.div`
  position: relative;
  padding: 0 ${theme.margin};
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
  transition: opacity ${props => (props.isActive ? '0.5s' : '0s')} ease-in-out;
`;

class Jobs extends Component {
  static propTypes = {
    jobs: PropTypes.array.isRequired,
  };

  state = {
    activeTabId: 1,
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
      <JobsContainer>
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
