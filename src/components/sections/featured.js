import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-meta,
    .workflow-list,
    .outcomes-list,
    .inputs-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }
    }
    .workflow-list li,
    .outcomes-list li,
    .inputs-list li {
      margin: 0 0 8px 12px;

      @media (max-width: 768px) {
        margin: 0 12px 8px 0;
      }
    }
    .project-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 400;
  }

  .section-intro {
    margin: 0 0 28px;
    max-width: 760px;
    color: var(--slate);
    font-size: var(--fz-lg);
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0 4px;
    padding: 0;
    list-style: none;
  }

  .meta-pill {
    border: 1px solid rgba(100, 255, 218, 0.35);
    border-radius: 999px;
    padding: 6px 12px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1.2;
    letter-spacing: 0.02em;
  }

  .project-subtitle {
    margin: 18px 0 10px;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .workflow-list,
  .outcomes-list,
  .inputs-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .workflow-list {
    counter-reset: workflow-step;
  }

  .workflow-list li,
  .outcomes-list li,
  .inputs-list li {
    display: inline-flex;
    align-items: center;
    margin: 0 12px 8px 0;
    border-radius: var(--border-radius);
    background: rgba(17, 34, 64, 0.65);
    padding: 7px 10px;
    color: var(--light-slate);
    font-size: var(--fz-xs);
    line-height: 1.5;
  }

  .workflow-list li:before {
    counter-increment: workflow-step;
    content: counter(workflow-step);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    margin-right: 8px;
    border-radius: 50%;
    background: rgba(100, 255, 218, 0.2);
    color: var(--green);
    font-family: var(--font-mono);
    font-size: 10px;
    line-height: 1;
  }

  .outcomes-list li {
    border: 1px dashed rgba(100, 255, 218, 0.28);
  }

  .inputs-list li {
    border: 1px solid rgba(136, 146, 176, 0.38);
  }

  .outcomes-list li:before {
    content: 'Outcome';
    margin-right: 8px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .inputs-list li:before {
    content: 'Input';
    margin-right: 8px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    .cta {
      ${({ theme }) => theme.mixins.smallButton};
      margin: 10px;
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;
        outline: 0;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }

  @media (max-width: 768px) {
    .meta-pill {
      border-color: rgba(100, 255, 218, 0.55);
      color: var(--lightest-slate);
      background: rgba(2, 12, 27, 0.35);
    }

    .workflow-list li,
    .outcomes-list li,
    .inputs-list li {
      color: var(--lightest-slate);
      background: rgba(2, 12, 27, 0.45);
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/(Helios|Quoting|AListEngine)//" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              tech
              github
              external
              cta
              domain
              role
              projectTypes
              estimationInputs
              workflow
              outcomes
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Client Projects I’ve Contributed To
      </h2>
      <p className="section-intro">
        A selection of client products and platforms where I contributed across architecture,
        implementation, integrations, and delivery workflows.
      </p>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const {
              external,
              title,
              tech,
              github,
              cover,
              cta,
              domain,
              role,
              projectTypes,
              estimationInputs,
              workflow,
              outcomes,
            } = frontmatter;
            const image = getImage(cover);

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content">
                  <div>
                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>

                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {(domain || role) && (
                      <ul className="project-meta">
                        {domain && <li className="meta-pill">{domain}</li>}
                        {role && <li className="meta-pill">{role}</li>}
                      </ul>
                    )}

                    {projectTypes && projectTypes.length > 0 && (
                      <>
                        <h4 className="project-subtitle">Project Types</h4>
                        <ul className="project-meta">
                          {projectTypes.map((type, idx) => (
                            <li key={idx} className="meta-pill">
                              {type}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {estimationInputs && estimationInputs.length > 0 && (
                      <>
                        <h4 className="project-subtitle">Estimation Inputs</h4>
                        <ul className="inputs-list">
                          {estimationInputs.map((input, idx) => (
                            <li key={idx}>{input}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {workflow && workflow.length > 0 && (
                      <>
                        <h4 className="project-subtitle">Translation Workflow</h4>
                        <ol className="workflow-list">
                          {workflow.map((step, idx) => (
                            <li key={idx}>{step}</li>
                          ))}
                        </ol>
                      </>
                    )}

                    {outcomes && outcomes.length > 0 && (
                      <>
                        <h4 className="project-subtitle">Project Outcomes</h4>
                        <ul className="outcomes-list">
                          {outcomes.map((outcome, idx) => (
                            <li key={idx}>{outcome}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {cta && (
                        <a href={cta} aria-label="Course Link" className="cta">
                          Learn More
                        </a>
                      )}
                      {github && (
                        <a href={github} aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && !cta && (
                        <a href={external} aria-label="External Link" className="external">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <GatsbyImage image={image} alt={title} className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
