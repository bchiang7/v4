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
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
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
      top: 14px;
      left: 14px;
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

  const skills = [
    'HTML',
    'Css',
    'Sass',
    'JavaScript (ES6+)',
    'TypeScript',
    'Angular',
    'Java',
    'PostgreSQL',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I finished my bachelor's in computer science from{' '}
              <a href="http://www.unipune.ac.in/" target="_blank" rel="noreferrer">
                Savitribai Phule Pune University
              </a>{' '}
              in 2021. During my studies, I discovered a passion for web development and have been
              hooked ever since.
            </p>

            <p>
              In addition to programming, I have a keen interest in designing interactive UIs.
              Whether it's creating a user-friendly app or designing an eye-catching website, I
              enjoy the creative process of making digital experiences that are both functional and
              aesthetically pleasing.
            </p>

            <p>
              I'm a firm believer in continuous learning, and I'm always on the lookout for new
              challenges and opportunities to expand my skillset. Currently, I'm working on some
              exciting projects related to the healthcare and real estate domains, and I'm eager to
              see where these projects will take me.
            </p>

            <p>
              I am a strong advocate for open source, and I am always interested in working on new
              projects with new people. Do check out my{' '}
              <a
                href="https://github.com/akolate?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                repositories
              </a>{' '}
              and feel free to reach out on{' '}
              <a
                href="https://api.whatsapp.com/send?phone=8956181856&text=hi"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>{' '}
              or{' '}
              <a href="mailto:%20aniketkolte18@gmail.com" target="_blank" rel="noreferrer">
                email
              </a>{' '}
              if you would like to collaborate on any project.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={100}
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
