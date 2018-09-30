import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { srConfig } from '../config';

import styled from 'styled-components';
import { theme, mixins, media, Section, H3, P, Ul } from '../style';

import ScrollReveal from 'scrollreveal';

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const SkillsContainer = styled(Ul)`
  margin-top: 20px;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, minmax(140px, 200px));
`;
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: ${theme.fonts.SFMono};
  font-size: ${theme.fontSizes.smallish};
  color: ${theme.colors.slate};
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.small};
    line-height: 12px;
  }
`;
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
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
    ScrollReveal().reveal(this.about, srConfig());
  }

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;

    return (
      <AboutContainer id="about" innerRef={el => (this.about = el)}>
        <H3>{frontmatter.title}</H3>
        <FlexContainer>
          <ContentContainer>
            <P dangerouslySetInnerHTML={{ __html: html }} />
            <SkillsContainer>
              {frontmatter.skills &&
                frontmatter.skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
          </ContentContainer>
          <PicContainer>
            <AvatarContainer>
              <Avatar fluid={frontmatter.avatar.childImageSharp.fluid} alt="Avatar" />
            </AvatarContainer>
          </PicContainer>
        </FlexContainer>
      </AboutContainer>
    );
  }
}

export default About;
