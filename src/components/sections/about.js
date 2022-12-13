import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
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
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['Facebook Ads', 'Google Ads', 'Shopify', 'AWS', 'Google Analytics', 'HTML&CSS'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My Name is Muhammad Niyas and I Enjoy Creating Things That Live On The Internet. My
              Interest In Branding, Social Media Marketing, Paid Campaigns, Static Web Development, Technology Enabling In Business Operation. Started Back In 2019 When I Decided To Try Developing Study Materials For BCA Calicut University
              — Turns Out To Develop Websites. Taught Me A Lot
              About Facebook Ads, Google Ads, Digital In Marketing.
            </p>

            <p>
              Fast-forward To Today, And I’ve Had The Privilege Of Working At{' '}
              <a href="https://www.instagram.com/stylatex_toys/">A Toys & Event Decoration In Qatar</a>,{' '}
              <a href="http://vpackworld.com/">A Disposable & Plastic Products In Qatar</a>,{' '}
              <a href="https://www.facebook.com/Fenila-Detergent-powder-1655511087878007">A Cleaning Product Manufacturer In Kozhikode</a>,{' '}
              <a href="https://kreamscafebh.com/">A Burger Cafe In Bahrain</a>,{' '}
              <a href="https://www.instagram.com/broastclub_">A Fried Chicken Cafe In Calicut</a>,{' '}
              <a href="https://www.instagram.com/futurelookoptics/">A Optical Shop In Dubai</a>, and{' '}
              <a href="https://www.instagram.com/_ideal_home__/">A Toys & Games Shop In Qatar</a>. My
              Main Focus These Days is Digital Marketing, Branding, Business Development,Inclusive Products And Digital
              Experiences At <a href="https://www.instagram.com/pitchkart.qa/">An E-Commerce In Qatar</a>.
            </p>


            <p>Here Are A Few Technologies I’ve Been Working With Recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
