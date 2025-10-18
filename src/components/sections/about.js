import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 1fr;
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
    'Next.js | React.js',
    'TypeScript',
    'Tailwind',
    'React Native',
    'Node.js',
    'AWS',
    'SQL',
    'GraphQL',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hey! I'm Ben, a passionate Software Engineer originally from sunny England, I am now a
              proud citizen of Australia mate. My interest in tech started when I left school and
              studied Information Technology. Unfortunatley I was unable to follow my passions due
              to a difficult job market in my hometown of Newcastle Upon Tyne.
            </p>

            <p>
              Fast-forward to today, and I’ve had the privilege of working at a start-up called{' '}
              <a href="https://gladlyapp.com/">Glady</a> where I gained Full Stack Engineering
              skills, and now I’m diving deep into front-end development as an engineer at{' '}
              <a href="https://www.dealerstudio.com.au/">Dealer Studio.</a> My main focus is
              building accessible and impactful products that can help people lead better lives.
            </p>

            <p>
              Before becoming a Software Engineer I had a career in Recruitment, specialising in
              Software Engineering. This allowed me to develop experience in understanding business
              requirements to see the bigger picture and also to communicate effectively with
              stakeholders.
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
