import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import config from '../config';

import styled from 'styled-components';
import { theme, mixins, media, Section, H3, P, Ul } from '../style';

import sr from '../ScrollReveal';

const AboutContainer = Section.extend``;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  padding-right: 30px;
  ${media.tablet`
    width: 100%;
    padding-right: 0;
  `};
`;
const SkillsContainer = Ul.extend`
  margin-top: 20px;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, minmax(140px, 200px));
`;
const Skill = styled.li`
  position: relative;
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.smallish};
  margin-bottom: 10px;
  padding-left: 20px;

  &:before {
    content: '▹';
    color: ${theme.colors.green};
    position: absolute;
    top: -2px;
    left: 0;
  }
`;
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  ${media.tablet`margin: 50px auto 0;`};
  ${media.phablet`width: 70%;`};
`;
const Avatar = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const AvatarContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.green};
  background: ${theme.gradient};
  margin-left: -20px;

  &:hover,
  &:focus {
    background: transparent;

    &:after {
      top: 15px;
      left: 15px;
    }

    ${Avatar} {
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

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    sr.reveal(this.about, config.srConfig());
  }

  render() {
    const { data } = this.props;
    const { node } = data[0];

    return (
      <AboutContainer id="about" innerRef={el => (this.about = el)}>
        <H3>{node.frontmatter.title}</H3>
        <FlexContainer>
          <ContentContainer>
            <P dangerouslySetInnerHTML={{ __html: node.html }} />
            <SkillsContainer>
              {node.frontmatter.skills &&
                node.frontmatter.skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
          </ContentContainer>
          <PicContainer>
            <AvatarContainer>
              <Avatar sizes={node.frontmatter.avatar.childImageSharp.sizes} alt="Avatar" />
            </AvatarContainer>
          </PicContainer>
        </FlexContainer>
      </AboutContainer>
    );
  }
}

export default About;
