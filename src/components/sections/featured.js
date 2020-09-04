import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { Section, Heading } from '@styles';

const StyledContainer = styled(Section)`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledContent = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  @media (${({ theme }) => theme.bp.tabletS}) {
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    padding: 30px 25px 20px;
  }
`;
const StyledLabel = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.smish};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.SFMono};
  margin-top: 10px;
  padding-top: 0;
`;
const StyledProjectName = styled.h5`
  font-size: 28px;
  margin: 0 0 20px;
  color: ${({ theme }) => theme.colors.lightestSlate};
  @media (${({ theme }) => theme.bp.tabletL}) {
    font-size: 24px;
  }
  @media (${({ theme }) => theme.bp.tabletS}) {
    color: ${({ theme }) => theme.colors.white};
  }
  a {
    @media (${({ theme }) => theme.bp.tabletL}) {
      display: block;
    }
  }
`;
const StyledDescription = styled.div`
  ${({ theme }) => theme.mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  color: ${({ theme }) => theme.colors.lightSlate};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border-radius: ${({ theme }) => theme.borderRadius};
  @media (${({ theme }) => theme.bp.tabletS}) {
    background-color: transparent;
    padding: 20px 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
    }
  }
  p {
    margin: 0;
  }
  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;
const StyledTechList = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 25px 0 10px;
  list-style: none;

  li {
    font-family: ${({ theme }) => theme.fonts.SFMono};
    font-size: ${({ theme }) => theme.fontSizes.smish};
    color: ${({ theme }) => theme.colors.slate};
    margin-right: ${({ theme }) => theme.margin};
    margin-bottom: 7px;
    white-space: nowrap;
    &:last-of-type {
      margin-right: 0;
    }
    @media (${({ theme }) => theme.bp.tabletS}) {
      color: ${({ theme }) => theme.colors.lightestSlate};
      margin-right: 10px;
    }
  }
`;
const StyledLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: ${({ theme }) => theme.colors.lightestSlate};
  a {
    padding: 10px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const StyledFeaturedImg = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1) brightness(90%);
  @media (${({ theme }) => theme.bp.tabletL}) {
    object-fit: cover;
    width: auto;
    height: 100%;
    filter: grayscale(100%) contrast(1) brightness(80%);
  }
`;
const StyledImgContainer = styled.a`
  ${({ theme }) => theme.mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.radius + 1}px;
  transition: ${({ theme }) => theme.transition};
  @media (${({ theme }) => theme.bp.tabletL}) {
    height: 100%;
  }
  @media (${({ theme }) => theme.bp.tabletS}) {
    grid-column: 1 / -1;
    opacity: 0.25;
  }
  &:hover,
  &:focus {
    background: transparent;
    &:before,
    ${StyledFeaturedImg} {
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
`;
const StyledProject = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
  @media (${({ theme }) => theme.bp.tabletS}) {
    margin-bottom: 70px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  &:nth-of-type(odd) {
    ${StyledContent} {
      grid-column: 7 / -1;
      text-align: right;
      @media (${({ theme }) => theme.bp.tabletS}) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (${({ theme }) => theme.bp.mobileL}) {
        padding: 30px 25px 20px;
      }
    }
    ${StyledTechList} {
      justify-content: flex-end;
      li {
        margin-left: ${({ theme }) => theme.margin};
        margin-right: 0;
      }
    }
    ${StyledLinkWrapper} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    ${StyledImgContainer} {
      grid-column: 1 / 8;
      @media (${({ theme }) => theme.bp.tabletL}) {
        height: 100%;
      }
      @media (${({ theme }) => theme.bp.tabletS}) {
        grid-column: 1 / -1;
        opacity: 0.25;
      }
    }
  }
`;

const Featured = ({ data }) => {
  const featuredProjects = data.filter(({ node }) => node);

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <StyledContainer id="projects">
      <Heading ref={revealTitle}>Some Things I&apos;ve Built</Heading>

      <div>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover } = frontmatter;

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <StyledContent>
                  <StyledLabel>Featured Project</StyledLabel>
                  <StyledProjectName>
                    {external ? (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </StyledProjectName>
                  <StyledDescription dangerouslySetInnerHTML={{ __html: html }} />
                  {tech && (
                    <StyledTechList>
                      {tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </StyledTechList>
                  )}
                  <StyledLinkWrapper>
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="GitHub Link">
                        <FormattedIcon name="GitHub" />
                      </a>
                    )}
                    {external && (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        <FormattedIcon name="External" />
                      </a>
                    )}
                  </StyledLinkWrapper>
                </StyledContent>

                <StyledImgContainer
                  href={external ? external : github ? github : '#'}
                  target="_blank"
                  rel="nofollow noopener noreferrer">
                  <StyledFeaturedImg fluid={cover.childImageSharp.fluid} alt={title} />
                </StyledImgContainer>
              </StyledProject>
            );
          })}
      </div>
    </StyledContainer>
  );
};

Featured.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Featured;
