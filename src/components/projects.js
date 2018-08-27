import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IconGithub, IconExternal, IconFolder } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Section, Ul, A } from '../style';

const ProjectsContainer = Section.extend`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const ProjectsTitle = styled.h4`
  font-size: ${theme.fontSizes.h3};
  margin: 0 auto 50px;
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  ${media.desktop`
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  `};
`;
const Project = styled.div`
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  border: 1px solid ${theme.colors.green};
  padding: 25px;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};

  &:hover {
    background-color: ${theme.colors.transGreen};
  }
`;
const ProjectTop = styled.div``;
const ProjectBottom = styled.div``;
const Folder = styled.div`
  color: ${theme.colors.green};
  margin-bottom: 30px;

  svg {
    width: 40px;
    height: 40px;
  }
`;
const ProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: 600;
`;
const ProjectDescription = styled.div`
  font-size: ${theme.fontSizes.medium};

  a {
    ${mixins.link};
    ${mixins.inlineLink};
    color: ${theme.colors.offWhite};

    &:after {
      top: -5px;
    }
  }
`;
const TechList = Ul.extend`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;

  li {
    margin-right: 15px;
    font-family: ${theme.fonts.SFMono};
    font-size: ${theme.fontSizes.xsmall};
    color: ${theme.colors.lightGrey};
    line-height: 2;
  }
`;
const Links = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  display: flex;
  align-items: center;
`;
const IconLink = A.extend`
  margin-left: 15px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  };

  render() {
    const { projects } = this.props;

    return (
      <ProjectsContainer>
        <ProjectsTitle>Other Projects</ProjectsTitle>
        <ProjectsGrid>
          {projects &&
            projects.map((project, i) => (
              <Project key={i}>
                <ProjectTop>
                  <Folder>
                    <IconFolder />
                  </Folder>
                  <Links>
                    {project.node.frontmatter.github && (
                      <IconLink
                        href={project.node.frontmatter.github}
                        target="_blank"
                        rel="nofollow noopener noreferrer">
                        <IconGithub />
                      </IconLink>
                    )}
                    {project.node.frontmatter.external && (
                      <IconLink
                        href={project.node.frontmatter.external}
                        target="_blank"
                        rel="nofollow noopener noreferrer">
                        <IconExternal />
                      </IconLink>
                    )}
                  </Links>
                  <ProjectName>{project.node.frontmatter.title}</ProjectName>
                  <ProjectDescription dangerouslySetInnerHTML={{ __html: project.node.html }} />
                </ProjectTop>
                <ProjectBottom>
                  <TechList>
                    {project.node.frontmatter.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </TechList>
                </ProjectBottom>
              </Project>
            ))}
        </ProjectsGrid>
      </ProjectsContainer>
    );
  }
}

export default Projects;
