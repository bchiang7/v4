import React from 'react';

import { IconGithub, IconExternal } from './icons';

import styled from 'styled-components';
import { theme, mixins, Section, H3, Img, Ul, A, P } from '../style';

const FeaturedContainer = Section.extend`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const ProjectImg = Img.extend``;
const ImgContainer = styled.div`
  order: 0;
  position: relative;
  width: 60%;
  background-color: ${theme.colors.green};
  position: relative;
  border-radius: ${theme.borderRadius};

  &:hover {
    background-color: transparent;

    &:before,
    ${ProjectImg} {
      background-color: transparent;
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
    transition: ${theme.transition};
    z-index: 3;
    background-color: ${theme.colors.navy};
    mix-blend-mode: screen;
  }
  ${ProjectImg} {
    position: relative;
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    border-radius: ${theme.borderRadius};
  }
`;
const ProjectContent = styled.div`
  width: 45%;
  margin-left: -5%;
  z-index: 5;
`;
const FeaturedLabel = styled.h4`
  font-size: ${theme.fontSizes.small};
  font-weight: 400;
  color: ${theme.colors.green};
  font-family: ${theme.fonts.SFMono};
  margin-top: 0;
  padding-top: 0;
`;
const ProjectName = styled.h5`
  font-size: 36px;
  margin: 0 0 10px;
`;
const ProjectDescription = P.extend`
  background-color: ${theme.colors.navy};
  font-size: ${theme.fontSizes.large};
  padding: 20px 0 20px ${theme.margin};
`;
const TechList = Ul.extend`
  display: flex;
  justify-content: flex-end;
  margin: ${theme.margin} 0 0 auto;

  li {
    font-family: ${theme.fonts.SFMono};
    font-size: 13px;
    color: ${theme.colors.lightGrey};
    margin-left: ${theme.margin};
  }
`;
const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: ${theme.margin};

  a {
    margin-left: ${theme.margin};

    svg {
      width: ${theme.margin};
      height: ${theme.margin};
    }
  }
`;
const Project = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  margin-bottom: 100px;
  text-align: right;

  &:last-of-type {
    margin-bottom: 0;
  }

  &:nth-of-type(even) {
    text-align: left;

    ${ImgContainer} {
      order: 1;
    }
    ${ProjectContent} {
      text-align: left;
      margin: 0 -5% 0 0;
    }
    ${ProjectDescription} {
      padding: ${theme.margin} ${theme.margin} ${theme.margin} 0;
    }
    ${TechList}, ${Links} {
      justify-content: flex-start;

      li,
      a {
        margin: 0 20px 0 0;
      }
    }
  }
`;

const data = [
  {
    id: 1,
    name: 'Project One',
    github: '#',
    external: '#',
    tech: ['thing', 'thing', 'thing'],
    description: `Gluten-free you probably haven't heard of them jianbing pitchfork pabst. Kombucha occupy iPhone live-edge beard iceland freegan small batch before they sold out DIY marfa chillwave sustainable taiyaki bushwick. Meggings franzen kogi, next level fingerstache +1 kitsch YOLO activated charcoal craft beer adaptogen twee. Yuccie tumeric irony heirloom, shoreditch kinfolk swag cold-pressed 90's chicharrones.`,
  },
  {
    id: 2,
    name: 'Project Two',
    github: '#',
    external: '#',
    tech: ['thing', 'thing', 'thing'],
    description: `Gluten-free you probably haven't heard of them jianbing pitchfork pabst. Kombucha occupy iPhone live-edge beard iceland freegan small batch before they sold out DIY marfa chillwave sustainable taiyaki bushwick. Meggings franzen kogi, next level fingerstache +1 kitsch YOLO activated charcoal craft beer adaptogen twee. Yuccie tumeric irony heirloom, shoreditch kinfolk swag cold-pressed 90's chicharrones.`,
  },
];

const Featured = () => (
  <FeaturedContainer>
    <H3>Some Things I've Built</H3>

    <div className="featured__things">
      {data &&
        data.map(project => (
          <Project key={project.id}>
            <ImgContainer>
              <ProjectImg
                src="https://www.budapest.com/w/respsliders/bpcompromo02_1_2_1_2.jpg"
                alt=""
              />
            </ImgContainer>
            <ProjectContent>
              <FeaturedLabel>Featured Project</FeaturedLabel>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechList>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </TechList>
              <Links>
                <A href={project.github} target="_blank" rel="noopener">
                  <IconGithub />
                </A>
                <A href={project.external} target="_blank" rel="noopener">
                  <IconExternal />
                </A>
              </Links>
            </ProjectContent>
          </Project>
        ))}
    </div>
  </FeaturedContainer>
);

export default Featured;
