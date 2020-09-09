import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { Section, Heading } from '@styles';

const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (${({ theme }) => theme.bp.tabletL}) {
      margin-bottom: 70px;
    }

    @media (${({ theme }) => theme.bp.mobileL}) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (${({ theme }) => theme.bp.desktopS}) {
        grid-column: 5 / -1;
      }
      @media (${({ theme }) => theme.bp.tabletL}) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (${({ theme }) => theme.bp.mobileL}) {
        padding: 25px 25px 20px;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      li {
        margin: 0 0 5px ${({ theme }) => theme.margin};

        @media (${({ theme }) => theme.bp.tabletL}) {
          margin: 0 0 5px 10px;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    .project-image {
      grid-column: 1 / 8;

      @media (${({ theme }) => theme.bp.tabletL}) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (${({ theme }) => theme.bp.desktopS}) {
      grid-column: 1 / 9;
    }

    @media (${({ theme }) => theme.bp.tabletL}) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (${({ theme }) => theme.bp.mobileL}) {
      padding: 30px 25px 20px;
    }
  }

  .project-overline {
    color: ${({ theme }) => theme.colors.green};
    font-family: ${({ theme }) => theme.fonts.SFMono};
    font-size: ${({ theme }) => theme.fontSizes.smish};
    font-weight: 400;
    margin: 10px 0 5px;
    padding-top: 0;
  }

  .project-title {
    font-size: 28px;
    margin: 0 0 20px;
    color: ${({ theme }) => theme.colors.lightestSlate};

    @media (${({ theme }) => theme.bp.tabletL}) {
      font-size: 24px;
    }
    @media (${({ theme }) => theme.bp.tabletL}) {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.lightNavy};
    color: ${({ theme }) => theme.colors.lightSlate};
    font-size: ${({ theme }) => theme.fontSizes.lg};

    @media (${({ theme }) => theme.bp.tabletL}) {
      background-color: transparent;
      padding: 20px 0;
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
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
      margin-bottom: 7px;
      color: ${({ theme }) => theme.colors.lightSlate};
      font-family: ${({ theme }) => theme.fonts.SFMono};
      font-size: ${({ theme }) => theme.fontSizes.smish};
      white-space: nowrap;
      margin: 0 ${({ theme }) => theme.margin} 5px 0;
    }

    @media (${({ theme }) => theme.bp.tabletL}) {
      margin: 15px 0 10px;

      li {
        color: ${({ theme }) => theme.colors.lightestSlate};
        margin: 0 10px 5px 0;
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: ${({ theme }) => theme.colors.lightestSlate};
    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    ${({ theme }) => theme.mixins.boxShadow};
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (${({ theme }) => theme.bp.tabletL}) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      background-color: ${({ theme }) => theme.colors.green};
      border-radius: ${({ theme }) => theme.borderRadius};
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;

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
        transition: ${({ theme }) => theme.transition};
        background-color: ${({ theme }) => theme.colors.navy};
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: ${({ theme }) => theme.borderRadius};
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (${({ theme }) => theme.bp.tabletL}) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(80%);
      }
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 700, traceSVG: { color: "#64ffda" }) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              tech
              github
              external
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
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <Section id="projects">
      <Heading ref={revealTitle}>Some Things I’ve Built</Heading>

      <div>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover } = frontmatter;

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content">
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">{title}</h3>
                  <div className="project-description" dangerouslySetInnerHTML={{ __html: html }} />

                  {tech.length && (
                    <ul className="project-tech-list">
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-links">
                    {github && (
                      <a href={github} aria-label="GitHub Link">
                        <Icon name="GitHub" />
                      </a>
                    )}
                    {external && (
                      <a href={external} aria-label="External Link">
                        <Icon name="External" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <Img fluid={cover.childImageSharp.fluid} alt={title} className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </div>
    </Section>
  );
};

export default Featured;
