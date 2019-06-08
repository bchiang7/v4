import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { IconGithub, IconExternal, IconFolder } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '@styles';
const { colors, fontSizes, fonts } = theme;

const ProjectsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const ProjectsTitle = styled.h4`
  margin: 0 auto 50px;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const ProjectsGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const ProjectInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const Project = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${ProjectInner} {
      transform: translateY(-5px);
    }
  }
`;
const ProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const Folder = styled.div`
  color: ${colors.primary};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const Links = styled.div`
  margin-right: -10px;
  color: ${colors.lightSlate};
`;
const IconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
const ProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxlarge};
  color: ${colors.lightestSlate};
`;
const ProjectDescription = styled.div`
  font-size: 17px;
  a {
    ${mixins.inlineLink};
  }
`;
const TechList = styled.ul`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;
  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xsmall};
    color: ${colors.lightSlate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const ShowMoreButton = styled(Button)`
  margin: 100px auto 0;
`;

const Projects = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.filter(({ node }) => node.frontmatter.show === 'true');
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <ProjectsContainer>
      <ProjectsTitle ref={revealTitle}>Other Projects</ProjectsTitle>
      <ProjectsGrid>
        <TransitionGroup className="projects">
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { github, external, title, tech } = frontmatter;
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <Project
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <ProjectInner>
                      <header>
                        <ProjectHeader>
                          <Folder>
                            <IconFolder />
                          </Folder>
                          <Links>
                            {github && (
                              <IconLink
                                href={github}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="Github Link">
                                <IconGithub />
                              </IconLink>
                            )}
                            {external && (
                              <IconLink
                                href={external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="External Link">
                                <IconExternal />
                              </IconLink>
                            )}
                          </Links>
                        </ProjectHeader>
                        <ProjectName>{title}</ProjectName>
                        <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                      </header>
                      <footer>
                        <TechList>
                          {tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </TechList>
                      </footer>
                    </ProjectInner>
                  </Project>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ProjectsGrid>

      {projects.length > 6 && (
        <ShowMoreButton onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Fewer' : 'More'} Projects
        </ShowMoreButton>
      )}
    </ProjectsContainer>
  );
};

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;
