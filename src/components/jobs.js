import React from 'react';

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
  width: 100px;
  height: ${theme.tabHeight};
  padding: 10px 0;
  text-align: center;
  transition: ${theme.transition};
  border-left: 2px solid ${theme.colors.darkGrey};
  color: ${theme.colors.grey};
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.small};

  &:hover,
  &.active {
    color: ${theme.colors.green};
  }

  &:focus {
    background-color: ${theme.colors.darkNavy};
  }

  a:first-of-type {
    border-top-left-radius: ${theme.borderRadius};
  }
  a:last-of-type {
    border-top-right-radius: ${theme.borderRadius};
  }

  /* @for $i from 1 through 3 {
    &.tab-#{$i}.active {
      & ~ .highlighter {
        transform: translateY(#{($i * ${theme.tabHeight}) - ${theme.tabHeight}});
      }
    }
  } */
`;
const Highlighter = styled.span`
  display: block;
  background: ${theme.colors.green};
  width: 2px;
  height: ${theme.tabHeight};
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(0);
  transition: ${theme.transition};
  transition-delay: 0.1s;
  z-index: 10;
`;
const TabContentContainer = styled.div`
  position: relative;
  padding: 0 ${theme.margin};
  flex-grow: 1;
`;
const TabContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 0;
  transition: opacity 0s ease-in-out;

  &.visible {
    position: relative;
    opacity: 1;
    width: 100%;
    height: auto;
    transition: opacity 0.5s ease-in-out;
    z-index: 2;
  }
`;

const Jobs = () => (
  <JobsContainer>
    <H3>Where I've Worked</H3>
    <TabsContainer>
      <Tabs>
        <Tab className="tab tab-1 active" href="#" data-tab="1">
          Tab 1
        </Tab>
        <Tab className="tab tab-2" href="#" data-tab="2">
          Tab 2
        </Tab>
        <Tab className="tab tab-3" href="#" data-tab="3">
          Tab 3
        </Tab>
        <Highlighter />
      </Tabs>
      <TabContentContainer>
        <TabContent data-tab="1">
          <p>
            Lorem ipsum dolor amet umami kogi you probably haven't heard of them activated charcoal
            hexagon literally. Vice art party XOXO retro blue bottle. Squid tousled skateboard man
            bun pabst unicorn sriracha poutine echo park crucifix plaid health goth four dollar
            toast. XOXO gochujang PBR&B kombucha brooklyn street art lyft swag.
          </p>
        </TabContent>
        <TabContent data-tab="2">
          <p>
            Wayfarers small batch brooklyn, pabst godard flannel blog authentic fingerstache salvia
            disrupt kombucha pickled. Actually hammock semiotics DIY cold-pressed lo-fi swag franzen
            chia locavore. Biodiesel venmo irony, salvia shaman plaid photo booth keffiyeh VHS
            slow-carb chillwave knausgaard vape occupy.
          </p>
        </TabContent>

        <TabContent data-tab="3">
          <p>
            Gluten-free you probably haven't heard of them jianbing pitchfork pabst. Kombucha occupy
            iPhone live-edge beard iceland freegan small batch before they sold out DIY marfa
            chillwave sustainable taiyaki bushwick. Meggings franzen kogi, next level fingerstache
            +1 kitsch YOLO activated charcoal craft beer adaptogen twee. Yuccie tumeric irony
            heirloom, shoreditch kinfolk swag cold-pressed 90's chicharrones.
          </p>
        </TabContent>
      </TabContentContainer>
    </TabsContainer>
  </JobsContainer>
);

export default Jobs;
