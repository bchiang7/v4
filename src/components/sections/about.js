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
    'LLM post-training',
    'Agent orchestration',
    'Dense retrieval',
    'Evaluation & quality',
    'Python',
    'PyTorch',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I’m Lindsay, a senior software engineer at{' '}
              <a href="https://deepmind.google/">Google DeepMind</a>, where I work on orchestration
              infrastructure and quality for long-running agents — connecting model reasoning to
              external tool execution, and figuring out how to actually measure whether agentic
              planning and browsing are any good.
            </p>

            <p>
              Before that I was an early engineer at{' '}
              <a href="https://en.wikipedia.org/wiki/Neeva">Neeva</a>, a privacy-focused search
              engine, where I architected the dense retrieval system from scratch and fine-tuned
              language models served in production for search ranking. After its acquisition by{' '}
              <a href="https://www.snowflake.com/">Snowflake</a> I contributed to the Snowflake Core
              Copilot and advised on dense retrieval for vector database systems.
            </p>

            <p>
              I hold an M.S. in Computational and Mathematical Engineering from{' '}
              <a href="https://icme.stanford.edu/">Stanford University</a>, and a B.S. in Applied
              Mathematics and a B.S. in Neuroscience from <a href="https://www.ucla.edu/">UCLA</a>,
              graduating cum laude. Along the way I was lucky to work with{' '}
              <a href="https://stanford.edu/~jlmcc/">Dr. James McClelland</a> on mathematical
              cognition, <a href="https://www.druckmannlab.com">Dr. Shaul Druckmann</a> on neural
              dynamics representation, and{' '}
              <a href="https://www.uclahealth.org/jeff-bronstein">Dr. Jeff Bronstein</a> on
              Parkinson’s Disease pathology in zebrafish models.
            </p>

            <p>
              These days I’m most interested in reinforcement learning for LLMs, adaptive compute
              and efficient inference, computer-use and agentic systems, and computational
              mathematical modelling — especially where those ideas meet real-world problems.
            </p>

            <p>Here are a few things I’ve been working with recently:</p>
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
