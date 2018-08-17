import React, { Component } from 'react';

import styled from 'styled-components';
import { theme, Section, H3, A, P } from '../style';

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
  padding: 10px 0;
  text-align: center;
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

const tabData = [
  { id: 1, name: 'Tab 1', text: 'text' },
  { id: 2, name: 'Tab 2', text: 'text-2' },
  { id: 3, name: 'Tab 3', text: 'text-3' },
];

class Jobs extends Component {
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

    return (
      <JobsContainer>
        <H3>Where I've Worked</H3>
        <TabsContainer>
          <Tabs>
            {tabData &&
              tabData.map(tab => (
                <Tab
                  href="#"
                  key={tab.id}
                  content={tab.text}
                  isActive={this.isActive(tab.id)}
                  onClick={e => this.setActiveTab(tab.id, e)}>
                  <span>{tab.name}</span>
                </Tab>
              ))}
            <Highlighter activeTabId={activeTabId} />
          </Tabs>
          <ContentContainer>
            {tabData &&
              tabData.map(tab => (
                <TabContent key={tab.id} isActive={this.isActive(tab.id)}>
                  <P>{tab.text}</P>
                </TabContent>
              ))}
          </ContentContainer>
        </TabsContainer>
      </JobsContainer>
    );
  }
}

export default Jobs;
