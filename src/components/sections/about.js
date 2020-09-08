import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Section, Heading } from '@styles';

const StyledAboutSection = styled(Section)`
  .inner {
    ${({ theme }) => theme.mixins.flexBetween};
    align-items: flex-start;

    @media (${({ theme }) => theme.bp.tabletL}) {
      display: block;
    }
  }
`;
const StyledContent = styled.div`
  width: 60%;

  @media (${({ theme }) => theme.bp.tabletL}) {
    width: 100%;
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: ${({ theme }) => theme.fonts.SFMono};
    font-size: ${({ theme }) => theme.fontSizes.smish};
    color: ${({ theme }) => theme.colors.slate};

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.colors.green};
      font-size: ${({ theme }) => theme.fontSizes.sm};
      line-height: 12px;
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;

  @media (${({ theme }) => theme.bp.tabletL}) {
    margin: 60px auto 0;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    width: 100%;
    position: relative;
    display: block;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.green};

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      border-radius: ${({ theme }) => theme.borderRadius};
      transition: ${({ theme }) => theme.transition};
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius};
      transition: ${({ theme }) => theme.transition};
    }

    &:before {
      top: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.navy};
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid ${({ theme }) => theme.colors.green};
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript (ES6+)', 'HTML & (S)CSS', 'React', 'Vue', 'Node.js', 'WordPress'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <Heading>About Me</Heading>

      <div className="inner">
        <StyledContent>
          <div>
            <p>Hello! I'm Brittany, a software engineer based in Boston, MA.</p>

            <p>
              I enjoy creating things that live on the internet, whether that be websites,
              applications, or anything in between. My goal is to always build products that provide
              pixel-perfect, performant experiences.
            </p>

            <p>
              Shortly after graduating from{' '}
              <a href="https://www.ccis.northeastern.edu">Northeastern University</a>, I joined the
              engineering team at <a href="https://www.upstatement.com">Upstatement</a> where I work
              on a wide variety of interesting and meaningful projects on a daily basis.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <SkillsList>{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}</SkillsList>
        </StyledContent>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
