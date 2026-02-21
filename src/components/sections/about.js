import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  margin-top: -100px; /* Add margin to the top to ensure spacing */

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
    grid-template-columns: repeat(3, minmax(140px, 200px));
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
    'Python',
    'TypeScript',
    'React',
    'Kubernetes',
    'Node.js',
    'Docker',
    'Ruby',
    'PostgreSQL',
    'GraphQL',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi! I'm <span style={{ color: 'var(--green)' }}>Grant</span>, a software engineer with{' '}
              <span style={{ color: 'var(--green)' }}>3+ years of professional experience</span> and
              a deep passion for developing innovative solutions. I'm constantly learning new
              technologies in the ever-evolving world of computer science.
            </p>

            <p>
              I am currently a{' '}
              <span style={{ color: 'var(--green)' }}>Software Engineer, Backend</span> on the Core
              Product Team at <span style={{ color: 'var(--green)' }}>Otter.ai</span>. I recently
              completed my <span style={{ color: 'var(--green)' }}>Master of Computer Science</span>{' '}
              at the University of Illinois Urbana-Champaign (January 2024 – January 2026) while
              working full-time.
            </p>

            <p>
              In my spare time, I’m passionate about{' '}
              <span style={{ color: 'var(--green)' }}>ML/AI</span> and enjoy working on personal
              projects to explore this exciting field.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
