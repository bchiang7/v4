import React from 'react';

import { IconGithub, IconExternal, IconFolder } from './icons';

import styled from 'styled-components';
import { theme, mixins, Section, Ul, A, P } from '../style';

const ProjectsContainer = Section.extend`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
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
  font-size: ${theme.fontSizes.h4};
`;
const ProjectDescription = P.extend`
  font-size: ${theme.fontSizes.medium};
`;
const TechList = Ul.extend`
  display: flex;
  margin-top: 20px;

  li {
    margin-right: 20px;
    font-family: ${theme.fonts.SFMono};
    font-size: ${theme.fontSizes.smallish};
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

const data = [
  {
    id: 1,
    name: 'Project One',
    github: '#',
    external: '#',
    tech: ['thing', 'thing', 'thing'],
    description: `Gluten-free you probably haven't heard of them jianbing pitchfork pabst. Kombucha occupy iPhone live-edge beard iceland freegan small batch before they sold out DIY marfa chillwave sustainable taiyaki bushwick`,
  },
  {
    id: 2,
    name: 'Project Two',
    github: '#',
    external: '#',
    tech: ['thing', 'thing', 'thing'],
    description: `Gluten-free you probably haven't heard of them jianbing pitchfork pabst. Kombucha occupy iPhone live-edge beard iceland freegan small batch before they sold out DIY marfa chillwave sustainable taiyaki bushwick`,
  },
  {
    id: 3,
    name: 'Project Three',
    github: '#',
    external: '#',
    tech: ['thing', 'thing', 'thing'],
    description: `Gluten-free you probably haven't heard of them jianbing pitchfork pabst. Kombucha occupy iPhone live-edge beard iceland freegan small batch before they sold out DIY marfa chillwave sustainable taiyaki bushwick`,
  },
];

const Projects = () => (
  <ProjectsContainer>
    <ProjectsGrid>
      {data &&
        data.map(project => (
          <Project key={project.id}>
            <Folder>
              <IconFolder />
            </Folder>
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </TechList>
            <Links>
              <IconLink href={project.github} target="_blank" rel="noopener">
                <IconGithub />
              </IconLink>
              <IconLink href={project.external} target="_blank" rel="noopener">
                <IconExternal />
              </IconLink>
            </Links>
          </Project>
        ))}
    </ProjectsGrid>
  </ProjectsContainer>
);

export default Projects;
