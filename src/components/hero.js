import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../config';

import styled from 'styled-components';
import { theme, mixins, media, Section, A, P } from '../style';

const HeroContainer = Section.extend`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
`;
const Hi = styled.h1`
  color: ${theme.colors.green};
  margin: 0 0 20px 3px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.SFMono};
  font-weight: normal;

  ${media.desktop`font-size: ${theme.fontSizes.small};`};
  ${media.tablet`font-size: ${theme.fontSizes.smallish};`};
`;
const Name = styled.h1`
  font-size: 80px;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Subtitle = styled.h2`
  font-size: 80px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${theme.colors.slate};

  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Blurb = styled.div`
  max-width: 50%;
  max-width: 480px;

  a {
    ${mixins.link};
    ${mixins.inlineLink};

    &:after {
      top: -5px;
    }
  }
`;
const EmailLink = A.extend`
  ${mixins.smallButton};
  margin-top: 50px;
`;

class Hero extends Component {
  static propTypes = {
    hero: PropTypes.array.isRequired,
  };

  render() {
    const { hero } = this.props;
    const { node } = hero[0];

    return (
      <HeroContainer>
        <Hi>{node.frontmatter.title}</Hi>
        <Name>{node.frontmatter.name}.</Name>
        <Subtitle>{node.frontmatter.subtitle}</Subtitle>
        <Blurb>
          <P dangerouslySetInnerHTML={{ __html: node.html }} />
        </Blurb>
        <EmailLink href={`mailto:${config.email}`} className="git">
          Get In Touch
        </EmailLink>
      </HeroContainer>
    );
  }
}

export default Hero;
