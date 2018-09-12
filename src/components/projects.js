import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import config from '../config';

import { IconGithub, IconExternal, IconFolder } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Section, Ul, A, Button } from '../style';

import sr from '../ScrollReveal';

const ProjectsContainer = Section.extend`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const ProjectsTitle = styled.h4`
  margin: 0 auto 50px;
  font-size: ${theme.fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
`;
const ProjectsGrid = styled.div`
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    position: relative;

    ${media.desktop`
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    `};
  }
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

  &:hover,
  &:focus {
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
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.lightestSlate};
`;
const ProjectLink = A.extend``;
const ProjectDescription = styled.div`
  font-size: 17px;
  line-height: 1.25;

  a {
    ${mixins.inlineLink};
    color: ${theme.colors.offWhite};
  }
`;
const TechList = Ul.extend`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 20px;

  li {
    font-family: ${theme.fonts.SFMono};
    font-size: ${theme.fontSizes.xsmall};
    color: ${theme.colors.slate};
    line-height: 2;
    margin-right: 15px;

    &:last-of-type {
      margin-right: 0;
    }
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
const ShowMoreButton = Button.extend`
  ${mixins.bigButton};
  margin: 100px auto 0;
`;

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.revealRefs = [];
    this.restRefs = [];
  }

  state = {
    showMore: false,
  };

  componentDidMount() {
    this.revealRefs.forEach((ref, i) => sr.reveal(ref, config.srConfig(i * 100)));
  }

  showMoreToggle = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { showMore } = this.state;
    const { projects } = this.props;
    const firstSix = projects.slice(0, 6);
    const projectsToShow = showMore ? projects : firstSix;

    return (
      <ProjectsContainer>
        <ProjectsTitle>Other Projects</ProjectsTitle>
        <ProjectsGrid>
          <TransitionGroup className="projects">
            {projectsToShow &&
              projectsToShow.map((project, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i > 5 ? (i - 6) * 300 : 300}
                  exit={false}>
                  <Project
                    key={i}
                    innerRef={el => (this.revealRefs[i] = el)}
                    style={{ transitionDelay: `${i > 5 ? (i - 6) * 100 : 0}ms` }}>
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
                      <ProjectName>
                        {project.node.frontmatter.external ? (
                          <ProjectLink
                            href={project.node.frontmatter.external}
                            target="_blank"
                            rel="nofollow noopener noreferrer">
                            {project.node.frontmatter.title}
                          </ProjectLink>
                        ) : (
                          project.node.frontmatter.title
                        )}
                      </ProjectName>
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
                </CSSTransition>
              ))}
          </TransitionGroup>
        </ProjectsGrid>

        <ShowMoreButton onClick={this.showMoreToggle}>
          {showMore ? 'Less' : 'More'} Projects
        </ShowMoreButton>
      </ProjectsContainer>
    );
  }
}

export default Projects;
