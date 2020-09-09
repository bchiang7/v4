import React, { useEffect, useRef } from 'react';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import styled from 'styled-components';
import { Section, Heading } from '@styles';

const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;
const StyledHeading = styled(Heading)`
  display: block;
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.SFMono};
  font-weight: 400;
  margin-bottom: 20px;
  justify-content: center;
  @media (${({ theme }) => theme.bp.desktopS}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  &:before {
    bottom: 0;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    @media (${({ theme }) => theme.bp.desktopS}) {
      font-size: ${({ theme }) => theme.fontSizes.smish};
    }
  }
  &:after {
    display: none;
  }
`;
const StyledTitle = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  @media (${({ theme }) => theme.bp.desktopS}) {
    font-size: 50px;
  }
  @media (${({ theme }) => theme.bp.tabletL}) {
    font-size: 40px;
  }
`;
const StyledEmailLink = styled.a`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 50px;
`;

const Contact = () => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="contact" ref={revealContainer}>
      <StyledHeading>What’s Next?</StyledHeading>

      <StyledTitle>Get In Touch</StyledTitle>

      <p>
        Although I'm not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <StyledEmailLink href={`mailto:${email}`}>Say Hello</StyledEmailLink>
    </StyledContainer>
  );
};

export default Contact;
