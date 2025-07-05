import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

const StyledRecommendationsSection = styled.section`
    max-width: 700px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: clamp(24px, 5vw, var(--fz-heading));
    }

    .recommendation-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 30px;
    margin-top: 50px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    }

    .recommendation-card {
    background: var(--light-navy);
    border-radius: var(--border-radius);
    padding: 1.75rem;
    box-shadow: var(--box-shadow);
    color: var(--light-slate);
    font-size: var(--fz-md);
    position: relative;

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (prefers-reduced-motion: no-preference) {
        &:hover,
        &:focus-within {
        transform: translateY(-7px);
        /* optionally change shadow if projects have different on hover */
        box-shadow: var(--box-shadow);
        }
    }
    }

    .quote {
      font-style: italic;
      margin-bottom: 1rem;
      color: var(--light-slate);
      font-size: 17px;
      line-height: 1.6;
      white-space: pre-line;
    }

    .name {
      font-size: var(--fz-xxl);
      color: var(--lightest-slate);
      margin-bottom: 4px;
    }

    .title {
      font-size: var(--fz-lg);
      color: var(--slate);
      margin-bottom: 10px;
    }
    
    .expand-toggle {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      cursor: pointer;
      user-select: none;
      margin-left: 6px; /* small space before "Read more" */
    }
  }
`;

const RECOMMENDATION_PREVIEW_LENGTH = 250;

const Recommendations = () => {
    const data = useStaticQuery(graphql`
    query {
      recommendations: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/recommendations/" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              name
              title
            }
            rawMarkdownBody
          }
        }
      }
    }
  `);

    const prefersReducedMotion = usePrefersReducedMotion();
    const revealTitle = useRef(null);
    const revealRefs = useRef([]);
    const [expandedIndices, setExpandedIndices] = useState([]);

    useEffect(() => {
        if (prefersReducedMotion) return;
        sr.reveal(revealTitle.current, srConfig());
        revealRefs.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }, []);

    const toggleExpand = (index) => {
        setExpandedIndices((prev) => {
            const isCurrentlyExpanded = prev.includes(index);

            if (isCurrentlyExpanded) {
                if (revealRefs.current[index]) {
                    revealRefs.current[index].scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }

                setTimeout(() => {
                    setExpandedIndices((current) => current.filter(i => i !== index));
                }, 300);
                return prev;
            } else {
                return [...prev, index];
            }
        });
    };

    const recommendations = data.recommendations.edges.map(({ node }) => ({
        name: node.frontmatter.name,
        title: node.frontmatter.title,
        text: node.rawMarkdownBody.trim(),
    }));

    return (
        <StyledRecommendationsSection id="recommendations">
            <h2 className="numbered-heading" ref={revealTitle}>
                What People Say
            </h2>

            <div className="recommendation-grid">
                <TransitionGroup component={null}>
                    {recommendations.map((rec, i) => {
                        const { name, title, text } = rec;
                        const isExpanded = expandedIndices.includes(i);
                        const preview = text.slice(0, RECOMMENDATION_PREVIEW_LENGTH);

                        return (
                            <CSSTransition key={i} classNames="fadeup" timeout={300} exit={false}>
                                <div
                                    className="recommendation-card"
                                    ref={el => (revealRefs.current[i] = el)}>
                                    <div className="quote">
                                        <span>
                                            {isExpanded ? text : preview + (text.length > RECOMMENDATION_PREVIEW_LENGTH ? '...' : '')}
                                        </span>
                                        {text.length > RECOMMENDATION_PREVIEW_LENGTH && (
                                            <span className="expand-toggle" onClick={() => toggleExpand(i)}>
                                                {isExpanded ? 'Show less' : 'Read more'}
                                            </span>
                                        )}
                                    </div>
                                    <div className="name">{name}</div>
                                    <div className="title">{title}</div>
                                </div>
                            </CSSTransition>
                        );
                    })}
                </TransitionGroup>
            </div>
        </StyledRecommendationsSection>
    );
};

export default Recommendations; 
