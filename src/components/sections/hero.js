import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import styled from 'styled-components';
import { Section } from '@styles';

const StyledContainer = styled(Section)`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  @media (${({ theme }) => theme.bp.tabletL}) {
    padding-top: 150px;
  }
  div {
    width: 100%;
  }
`;
const StyledOverline = styled.h1`
  color: ${({ theme }) => theme.colors.green};
  margin: 0 0 20px 3px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.SFMono};
  font-weight: 400;
  @media (${({ theme }) => theme.bp.desktopS}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  @media (${({ theme }) => theme.bp.tabletL}) {
    font-size: ${({ theme }) => theme.fontSizes.smish};
  }
`;
const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  @media (${({ theme }) => theme.bp.desktopS}) {
    font-size: 70px;
  }
  @media (${({ theme }) => theme.bp.tabletL}) {
    font-size: 60px;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    font-size: 50px;
  }
  @media (${({ theme }) => theme.bp.mobileM}) {
    font-size: 40px;
  }
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.slate};
  @media (${({ theme }) => theme.bp.desktopS}) {
    font-size: 70px;
  }
  @media (${({ theme }) => theme.bp.tabletL}) {
    font-size: 60px;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    font-size: 50px;
  }
  @media (${({ theme }) => theme.bp.mobileM}) {
    font-size: 40px;
  }
`;
const StyledDescription = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;
const StyledEmailLink = styled.a`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 50px;
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const { frontmatter, html } = data[0].node;

  const one = () => (
    <StyledOverline style={{ transitionDelay: '100ms' }}>{frontmatter.title}</StyledOverline>
  );
  const two = () => (
    <StyledTitle style={{ transitionDelay: '200ms' }}>{frontmatter.name}.</StyledTitle>
  );
  const three = () => (
    <StyledSubtitle style={{ transitionDelay: '300ms' }}>{frontmatter.subtitle}</StyledSubtitle>
  );
  const four = () => (
    <StyledDescription
      style={{ transitionDelay: '400ms' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
  const five = () => (
    <div style={{ transitionDelay: '500ms' }}>
      <StyledEmailLink href={`mailto:${email}`}>Get In Touch</StyledEmailLink>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledContainer>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              {item}
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Hero;
