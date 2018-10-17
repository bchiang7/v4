import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { srConfig } from '../config';

import { IconGithub, IconExternal, IconFolder } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '../styles';

import ScrollReveal from 'scrollreveal';

const ProjectsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const ProjectsTitle = styled.h4`
  margin: 0 auto 50px;
  font-size: ${theme.fontSizes.h3};
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
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 25px;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${theme.colors.lightNavy};
`;
const Project = styled.div`
  transition: ${theme.transition};
  &:hover,
  &:focus {
    ${ProjectInner} {
      transform: translateY(-5px);
      box-shadow: 0 2px 4px ${theme.colors.shadowNavy};
      box-shadow: 0 19px 38px ${theme.colors.darkestNavy} 0 15px 12px ${theme.colors.shadowNavy};
    }
  }
`;
const ProjectTop = styled.div``;
const ProjectBottom = styled.div``;
const ProjectHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const Folder = styled.div`
  color: ${theme.colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const Links = styled.div`
  margin-right: -10px;
  color: ${theme.colors.lightSlate};
`;
const IconLink = styled.a`
  padding: 10px;
  svg {
    width: 22px;
    height: 22px;
  }
`;
const ProjectName = styled.h5`
  margin: 0 0 10px;
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.lightestSlate};
`;
const ProjectLink = styled.a``;
const ProjectDescription = styled.div`
  font-size: 17px;
  line-height: 1.25;
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
    font-family: ${theme.fonts.SFMono};
    font-size: ${theme.fontSizes.xsmall};
    color: ${theme.colors.lightSlate};
    line-height: 2;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const ShowMoreButton = styled(Button)`
  margin: 100px auto 0;
`;

class Projects extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
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
    ScrollReveal().reveal(this.projects, srConfig());
    this.revealRefs.forEach((ref, i) => ScrollReveal().reveal(ref, srConfig(i * 100)));
  }

  showMoreToggle = () => this.setState({ showMore: !this.state.showMore });

  render() {
    const GRID_LIMIT = 6;
    const { showMore } = this.state;
    const { data } = this.props;
    const projects = data.filter(({ node }) => node.frontmatter.show === 'true');
    const firstSix = projects.slice(0, GRID_LIMIT);
    const projectsToShow = showMore ? projects : firstSix;

    return (
      <ProjectsContainer>
        <ProjectsTitle innerRef={el => (this.projects = el)}>Other Projects</ProjectsTitle>
        <ProjectsGrid>
          <TransitionGroup className="projects">
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <Project
                    key={i}
                    innerRef={el => (this.revealRefs[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <ProjectInner>
                      <ProjectTop>
                        <ProjectHeader>
                          <Folder>
                            <IconFolder />
                          </Folder>
                          <Links>
                            {node.frontmatter.github && (
                              <IconLink
                                href={node.frontmatter.github}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="Github Link">
                                <IconGithub />
                              </IconLink>
                            )}
                            {node.frontmatter.external && (
                              <IconLink
                                href={node.frontmatter.external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="External Link">
                                <IconExternal />
                              </IconLink>
                            )}
                          </Links>
                        </ProjectHeader>
                        <ProjectName>
                          {node.frontmatter.external ? (
                            <ProjectLink
                              href={node.frontmatter.external}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                              aria-label="Visit Website">
                              {node.frontmatter.title}
                            </ProjectLink>
                          ) : (
                            node.frontmatter.title
                          )}
                        </ProjectName>
                        <ProjectDescription dangerouslySetInnerHTML={{ __html: node.html }} />
                      </ProjectTop>
                      <ProjectBottom>
                        <TechList>
                          {node.frontmatter.tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </TechList>
                      </ProjectBottom>
                    </ProjectInner>
                  </Project>
                </CSSTransition>
              ))}
          </TransitionGroup>
        </ProjectsGrid>

        <ShowMoreButton onClick={this.showMoreToggle}>
          {showMore ? 'Fewer' : 'More'} Projects
        </ShowMoreButton>
      </ProjectsContainer>
    );
  }
}

export default Projects;
