import React from 'react';

import styled from 'styled-components';
import { theme, mixins, Section, H3, P, Ul, Img } from '../style';

const AboutContainer = Section.extend``;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
`;
const Content = styled.div`
  max-width: 480px;
  width: 50%;
`;
const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  margin-top: 20px;
`;
const Skill = styled.li`
  position: relative;
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.smallish};
  margin-bottom: 10px;

  &:before {
    content: '>';
    margin-right: 10px;
    color: ${theme.colors.green};
  }
`;
const ProfPic = Img.extend`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;

const PicContainer = styled.div`
  max-width: 300px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.green};
  position: relative;

  &:hover {
    &:after {
      top: 15px;
      left: 15px;
    }

    ${ProfPic} {
      filter: none;
      mix-blend-mode: normal;
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: ${theme.transition};
    background-color: ${theme.colors.navy};
    mix-blend-mode: screen;
    border-radius: ${theme.borderRadius};
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colors.green};
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: -1;
    transition: ${theme.transition};
    border-radius: ${theme.borderRadius};
  }
`;
const About = () => (
  <AboutContainer>
    <H3>About Me</H3>
    <FlexContainer>
      <Content>
        <P>
          As a software engineer, I enjoy bridging the gap between engineering and design —
          combining my technical knowledge with my keen eye for design to create a beautiful
          product. My goal is to always build applications that are scalable and efficient under the
          hood while providing engaging, pixel-perfect user experiences.
        </P>
        <P>Here's some technologies I'm good at:</P>
        <SkillsContainer>
          <Ul>
            <Skill>JavaScript (ES6)</Skill>
            <Skill>CSS/Sass</Skill>
            <Skill>Python</Skill>
            <Skill>React.js</Skill>
            <Skill>Ember.js</Skill>
            <Skill>Jekyll</Skill>
          </Ul>
          <Ul>
            <Skill>Craft</Skill>
            <Skill>Wordpress</Skill>
            <Skill>Timber</Skill>
            <Skill>Sketch</Skill>
            <Skill>InDesign</Skill>
          </Ul>
        </SkillsContainer>
      </Content>
      <PicContainer>
        <ProfPic
          src="https://avatars3.githubusercontent.com/u/6599979?s=460&v=4"
          alt="Profile Picture"
        />
      </PicContainer>
    </FlexContainer>
  </AboutContainer>
);

export default About;
