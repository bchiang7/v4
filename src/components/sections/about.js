import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
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
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;
    list-style: none;
    margin: 15px 0px 0px 0px;
    padding: 0px;
    flex-wrap: wrap;

    li {
      overflow: hidden;
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 0.75rem;
      border: thin solid var(--outline-light);
      padding: 10px 15px 10px 15px;
      margin: 0.5rem;

      .skill-img {
        width: 25px;
        margin-right: 25px;
      }
      .skill-name {
        margin-top: auto;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 500px;

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
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--primary-color);
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

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hi there!</p>
            <p>
              I'm Benjamin Kostiuk, a Computer Science student at McMaster University in my third
              year. Most of my experience is in full-stack web development with personal pursuits in
              mobile development, DevOps and information security. I'm always experimenting and
              trying to build cool projects.
            </p>

            <p>
              Throughout university, I've had the opportunity to intern with{' '}
              <a href="https://www.rbcroyalbank.com/personal.html" target="_blank" rel="noreferrer">
                banks
              </a>
              ,
              <a href="https://www.peelregion.ca/" target="_blank" rel="noreferrer">
                my local branch of government
              </a>{' '}
              and an intelligent search{' '}
              <a href="https://www.coveo.com/en" target="_blank" rel="noreferrer">
                unicorn company
              </a>
              . Some of my favorite projects I've built (an am still working on) include{' '}
              <a href="https://benkostiuk.com/particle-divide/" target="_blank" rel="noreferrer">
                a little game playing with particles
              </a>
              , my{' '}
              <a
                href="https://github.com/benjaminkostiuk/benjaminkostiuk"
                target="_blank"
                rel="noreferrer">
                automatically updating github README
              </a>{' '}
              and a{' '}
              <a href="https://github.com/puffproject" target="_blank" rel="noreferrer">
                platform for students
              </a>{' '}
              to collaborate when writing unit tests for projects.
            </p>

            <p>
              Next summer I’ll be interning with{' '}
              <a href="https://www.affirm.ca/" target="_blank" rel="noreferrer">
                Affirm
              </a>
              , but I will be looking for full time positions once I graduate in April 2023.
            </p>

            <p>Here are a few of the technologies I use to build projects:</p>
          </div>
          <div className="skills-wrapper">
            <ul className="skills-list">
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/JavaScript.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">JavaScript</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/MySQL.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">MySQL</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/Java.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">Java</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/Python.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">Python</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/Azure.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">Azure</p>
              </li>
              <li>
                <div className="skill-img">
                  <StaticImage
                    src={`../../images/skills/Docker.svg`}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="JavaScript"
                  />
                </div>
                <p className="skill-name">Docker</p>
              </li>
            </ul>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
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
