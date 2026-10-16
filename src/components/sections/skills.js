import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { useLanguage } from '../../hooks/LanguageContext';
import { spotlight, onSpotlightMove } from '../fx';

const StyledSkillsSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    align-items: stretch;

    > article:last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .skills-intro {
    margin: -10px 0 40px;
    color: var(--light-text-color);
    font-size: var(--fz-lg);
    line-height: 1.5;
    max-width: 540px;
  }
`;

const CategoryCard = styled.article`
  ${spotlight};
  backdrop-filter: blur(10px);
  background: var(--light-bg-color);
  border: 1px solid var(--outline-light);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.5rem;
  transition: var(--transition);

  &:hover {
    border-color: var(--primary-color-tint);
    box-shadow: 0 4px 20px -2px var(--primary-color-tint);
  }
`;

const CategoryHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
  padding-bottom: 0.65rem;
  border-bottom: 1px solid var(--outline-light);

  .category-accent {
    width: 4px;
    height: 24px;
    border-radius: 2px;
    background: var(--gradient-text);
  }

  h3 {
    margin: 0;
    font-size: var(--fz-md);
    font-family: var(--font-mono);
    color: var(--signal-color);
    font-weight: 500;
  }
`;

const SkillGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillPill = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: var(--highlight-tint);
  border: 1px solid var(--outline-light);
  border-radius: 999px;
  color: var(--light-text-color);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  transition: var(--transition);
  cursor: default;

  .pill-icon {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    color: var(--light-text-color);
    transition: var(--transition);

    /* one accent: icons rest in monochrome and regain their color on hover */
    svg {
      filter: grayscale(1) brightness(1.25);
      opacity: 0.8;
      transition: var(--transition);
    }
  }

  &:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px -4px var(--primary-color-tint);

    .pill-icon {
      color: var(--primary-color);

      svg {
        filter: none;
        opacity: 1;
      }
    }
  }
`;

// Icon component expects exact names (e.g. 'HTML', 'CSS', 'REST API', 'GCP', 'AWS')
const SKILL_CATEGORIES = {
  ai: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'LLM Agents', 'Evals', 'OpenCV'],
  backend: [
    'FastAPI',
    'Flask',
    'Node.js',
    'PHP',
    'Laravel',
    'REST API',
    'GraphQL',
    'PostgreSQL',
    'Real-Time Systems',
    'System Design',
  ],
  frontend: ['TypeScript', 'React', 'React Native', 'Ember.js'],
  infra: ['AWS', 'GCP', 'Docker', 'CI/CD'],
  systems: ['C++', 'CUDA', 'Verilog/FPGA'],
};

const Skills = () => {
  const revealContainer = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (sr) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, []);

  const categoryKeys = [
    { key: 'ai', titleKey: 'skills_text_ai' },
    { key: 'backend', titleKey: 'skills_text_backend' },
    { key: 'frontend', titleKey: 'skills_text_frontend' },
    { key: 'infra', titleKey: 'skills_text_infra' },
    { key: 'systems', titleKey: 'skills_text_systems' },
  ];

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">{t('skills_text_title')}</h2>
      <p className="skills-intro">{t('skills_text_subtitle')}</p>

      <div className="skills-grid">
        {categoryKeys.map(({ key, titleKey }) => (
          <CategoryCard key={key} onMouseMove={onSpotlightMove}>
            <CategoryHeader>
              <div className="category-accent" aria-hidden="true" />
              <h3>{t(titleKey)}</h3>
            </CategoryHeader>
            <SkillGrid>
              {SKILL_CATEGORIES[key].map(skill => (
                <SkillPill key={skill}>
                  <span className="pill-icon" aria-hidden="true">
                    <Icon name={skill} />
                  </span>
                  <span>{skill}</span>
                </SkillPill>
              ))}
            </SkillGrid>
          </CategoryCard>
        ))}
      </div>
    </StyledSkillsSection>
  );
};

export default Skills;
