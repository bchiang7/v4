import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Layout } from '@components';
import { IconGitHub, IconExternal } from '@components/icons';
import styled from 'styled-components';
import { theme, media, Main } from '@styles';
const { colors, fonts, fontSizes } = theme;

const StyledMainContainer = styled(Main)`
  min-height: 100vh;
  height: 100%;
  max-width: 1600px;
`;
const StyledTitleContainer = styled.header`
  margin-top: 200px;
  ${media.tablet`
    margin-top: 150px;
  `};
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
const StyledTableContainer = styled.div`
  margin: 100px -20px;
  ${media.tablet`
    margin: 100px -10px;
  `};
`;
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  .hide-on-mobile {
    ${media.tablet`
      display: none;
    `};
  }

  tbody tr {
    transition: ${theme.transition};

    &:hover,
    &:focus {
      background-color: ${colors.lightNavy};
    }
  }
  th,
  td {
    cursor: default;
    line-height: 1.5;
    padding: 10px 20px;
    ${media.tablet`
      padding: 10px;
    `};
  }
  th {
    text-align: left;
  }
  td {
    &.year {
      width: 10%;
      ${media.tablet`
        font-size: ${fontSizes.small};
      `};
    }
    &.title {
      padding-top: 15px;
      color: ${colors.lightestSlate};
      font-size: ${fontSizes.xlarge};
      font-weight: 700;
    }
    &.company {
      width: 15%;
      padding-top: 15px;
      font-size: ${fontSizes.large};
    }
    &.tech {
      font-size: ${fontSizes.xsmall};
      font-family: ${fonts.SFMono};
    }
    &.links {
      span {
        display: flex;
        a + a {
          margin-left: 10px;
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const ArchivePage = ({ location, data }) => {
  const projects = data.projects.edges;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout location={location}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames="fade">
            <StyledMainContainer>
              <StyledTitleContainer>
                <StyledTitle>Archive</StyledTitle>
                <StyledSubtitle>A big list of things I’ve worked on</StyledSubtitle>
              </StyledTitleContainer>
              <StyledTableContainer>
                <StyledTable>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Title</th>
                      <th className="hide-on-mobile">Made at</th>
                      <th className="hide-on-mobile">Built with</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.length > 0 &&
                      projects.map(({ node }, i) => {
                        const { date, github, external, title, tech, company } = node.frontmatter;
                        return (
                          <tr key={i}>
                            <td className="overline year">{`${new Date(date).getFullYear()}`}</td>

                            <td className="title">{title}</td>

                            <td className="company hide-on-mobile">
                              {company ? <span>{company}</span> : <span>—</span>}
                            </td>

                            <td className="tech hide-on-mobile">
                              {tech.length > 0 &&
                                tech.map((item, i) => (
                                  <span key={i}>
                                    <span key={i}>{item}</span>
                                    {i !== tech.length - 1 && <span>&nbsp;&middot;&nbsp;</span>}
                                  </span>
                                ))}
                            </td>

                            <td className="links">
                              <span>
                                {github && (
                                  <a
                                    href={github}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="GitHub Link">
                                    <IconGitHub />
                                  </a>
                                )}
                                {external && (
                                  <a
                                    href={external}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    aria-label="External Link">
                                    <IconExternal />
                                  </a>
                                )}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </StyledTable>
              </StyledTableContainer>
            </StyledMainContainer>
          </CSSTransition>
        )}
      </TransitionGroup>
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
            company
            show
          }
          html
        }
      }
    }
  }
`;
