import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import { IconGithub, IconExternal } from '@components/icons';
import styled from 'styled-components';
import { theme, media, Main } from '@styles';
const { colors, fonts, fontSizes } = theme;

const StyledMainContainer = styled(Main)`
  min-height: 100vh;
  height: 100%;
`;
const StyledTitleContainer = styled.div`
  margin-top: 200px;
`;
const StyledTitle = styled.h1`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const StyledSubtitle = styled.p`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`;
const StyledList = styled.ul`
  margin-top: 100px;

  li {
    margin-bottom: 50px;
  }
`;

const ArchivePage = ({ location, data }) => {
  const projects = data.projects.edges;
  console.log('📣: ArchivePage -> projects', projects);

  return (
    <Layout location={location}>
      <StyledMainContainer>
        <StyledTitleContainer>
          <StyledTitle>Archive</StyledTitle>
          <StyledSubtitle>A big list of things I’ve worked on</StyledSubtitle>
          <StyledList>
            {projects.length > 0 &&
              projects.map(({ node }, i) => {
                const { frontmatter, html } = node;
                const { date, github, external, title, tech } = frontmatter;
                return (
                  <li key={i}>
                    <h1>{`${new Date(date).getFullYear()}`}</h1>
                    <h2>{title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: html }} />

                    <div>
                      {tech.map((tech, i) => (
                        <span key={i}>{tech} &bull; </span>
                      ))}
                    </div>

                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="Github Link">
                        {/* <IconGithub /> */}
                        GitHub Link
                      </a>
                    )}
                    {external && (
                      <a
                        href={external}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label="External Link">
                        {/* <IconExternal /> */}
                        Live Site Link
                      </a>
                    )}
                  </li>
                );
              })}
          </StyledList>
        </StyledTitleContainer>
      </StyledMainContainer>
    </Layout>
  );
};
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ArchivePage;

export const pageQuery = graphql`
  {
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            image
            tech
            github
            external
            show
          }
          html
        }
      }
    }
  }
`;
