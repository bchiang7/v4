import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../config';
import { IconGithub, IconExternal, IconFolder } from './icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '../styles';
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
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 25px;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const Project = styled.div`
  transition: ${theme.transition};
  &:hover,
  &:focus {
    outline: 0;
    ${ProjectInner} {
      transform: translateY(-5px);
      box-shadow: 0 2px 4px ${colors.shadowNavy};
      box-shadow: 0 19px 38px ${colors.darkestNavy} 0 15px 12px ${colors.shadowNavy};
    }
  }
`;
const ProjectHeader = styled.div`
  ${mixins.flexBetween};
  align-items: flex-end;
  margin-bottom: 30px;
`;
const Folder = styled.div`
  color: ${colors.green};
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
        <ProjectsTitle ref={el => (this.projects = el)}>Other Projects</ProjectsTitle>
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
                      ref={el => (this.revealRefs[i] = el)}
                      tabIndex="0"
                      style={{
                        transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                      }}>
                      <ProjectInner>
                        <div>
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
                          <ProjectName>
                            {external ? (
                              <a
                                href={external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="Visit Website">
                                {title}
                              </a>
                            ) : (
                              title
                            )}
                          </ProjectName>
                          <ProjectDescription dangerouslySetInnerHTML={{ __html: html }} />
                        </div>
                        <div>
                          <TechList>
                            {tech.map((tech, i) => (
                              <li key={i}>{tech}</li>
                            ))}
                          </TechList>
                        </div>
                      </ProjectInner>
                    </Project>
                  </CSSTransition>
                );
              })}
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
