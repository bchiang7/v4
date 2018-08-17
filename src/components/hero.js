import React from 'react';

import styled from 'styled-components';
import { theme, mixins, Section, A, P } from '../style';

const HeroContainer = Section.extend`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`;
const Hi = styled.h1`
  color: ${theme.colors.green};
  margin: 0 0 10px 3px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.SFMono};
  font-weight: 400;
`;
const Name = styled.h1`
  font-size: 80px;
  font-weight: 600;
  margin: 0;
`;
const Subtitle = styled.h2`
  font-size: 80px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${theme.colors.slate};
`;
const Blurb = styled.div`
  max-width: 50%;
  max-width: 480px;
`;
const UpsLink = A.extend`
  ${mixins.inlineLink};
  &:after {
    top: -5px;
  }
`;
const EmailLink = A.extend`
  ${mixins.smallButton};
  margin-top: 50px;
`;

const Hero = () => (
  <HeroContainer>
    <Hi>Hi, my name is</Hi>
    <Name>Brittany Chiang.</Name>
    <Subtitle>I build things for the web.</Subtitle>
    <Blurb>
      <P>
        I'm a design-minded software engineer based in Boston, Massachusetts. I specialize in
        developing (and occasionally designing) beautiful, high-quality websites and web
        applications.
      </P>
      <P>
        Currently, I'm an Engineer at
        <UpsLink href="#" target="_blank" rel="noopener">
          &nbsp;Upstatement&nbsp;
        </UpsLink>
        working on some exciting projects with some amazing people.
      </P>
    </Blurb>
    <EmailLink href="#" className="git">
      Get In Touch
    </EmailLink>
  </HeroContainer>
);

export default Hero;
