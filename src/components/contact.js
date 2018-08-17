import React from 'react';

import styled from 'styled-components';
import { theme, mixins, Section, H3, A, P } from '../style';

const ContactContainer = Section.extend`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 100px;
`;
const Next = H3.extend`
  color: ${theme.colors.green};
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fonts.SFMono};
  font-weight: 400;
  margin-bottom: 20px;
  justify-content: center;

  &:before {
    font-size: ${theme.fontSizes.small};
    bottom: 0;
  }

  &:after {
    display: none;
  }
`;
const Title = styled.h4`
  font-size: 60px;
  margin: 0 0 20px;
`;
const EmailLink = A.extend`
  ${mixins.bigButton};
  margin-top: 50px;
`;

const Contact = () => (
  <ContactContainer>
    <Next>What's Next?</Next>
    <Title>Get In Touch</Title>
    <P>
      Lorem ipsum dolor amet umami kogi you probably haven't heard of them activated charcoal
      hexagon literally. Vice art party XOXO retro blue bottle. Squid tousled skateboard man bun
      pabst unicorn sriracha poutine echo park crucifix plaid health goth four dollar toast. XOXO
      gochujang PBR&B kombucha brooklyn street art lyft swag.
    </P>
    <EmailLink href="#" target="_blank" rel="noopener">
      Send An Email
    </EmailLink>
  </ContactContainer>
);

export default Contact;
