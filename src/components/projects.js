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
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  ${media.desktop`
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  `};
`;
const Project = styled.div`
  position: relative;
  border: 1px solid ${theme.colors.green};
  padding: 25px;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};

  &:hover {
    background-color: ${theme.colors.transGreen};
  }
`;
const Folder = styled.div`
  color: ${theme.colors.green};
  margin-bottom: 30px;

  svg {
    width: 40px;
    height: 40px;
  }
`;
const ProjectName = styled.h4`
  margin: 0 0 10px;
  font-size: ${theme.fontSizes.xxlarge};
`;
const ProjectDescription = styled.div`
  font-size: ${theme.fontSizes.medium};
`;
const TechList = Ul.extend`
  display: flex;
  margin-top: 20px;

  li {
    margin-right: 20px;
    font-family: ${theme.fonts.SFMono};
    font-size: ${theme.fontSizes.xsmall};
    color: ${theme.colors.lightGrey};
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
        <ProjectsGrid>
          {projects &&
            projects.map((project, i) => (
              <Project key={i}>
                <Folder>
                  <IconFolder />
                </Folder>
                <ProjectName>{project.node.frontmatter.title}</ProjectName>
                <ProjectDescription dangerouslySetInnerHTML={{ __html: project.node.html }} />
                <TechList>
                  {project.node.frontmatter.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </TechList>
                <Links>
                  <IconLink href={project.node.frontmatter.github} target="_blank" rel="noopener">
                    <IconGithub />
                  </IconLink>
                  <IconLink href={project.node.frontmatter.external} target="_blank" rel="noopener">
                    <IconExternal />
                  </IconLink>
                </Links>
              </Project>
            ))}
        </ProjectsGrid>
      </ProjectsContainer>
    );
  }
}

export default Projects;
