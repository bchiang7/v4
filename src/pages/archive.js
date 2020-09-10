import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout, Head } from '@components';
import { Icon } from '@components/icons';

const StyledTableContainer = styled.div`
  margin: 100px -20px;

  @media (${({ theme }) => theme.bp.tabletL}) {
    margin: 100px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (${({ theme }) => theme.bp.tabletL}) {
        display: none;
      }
    }

    tbody tr {
      transition: ${({ theme }) => theme.transition};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.lightNavy};
      }
    }

    th,
    td {
      padding: 10px 20px;
      cursor: default;
      text-align: left;

      @media (${({ theme }) => theme.bp.tabletL}) {
        padding: 10px;
      }
    }

    td {
      &.year {
        width: 10%;
        @media (${({ theme }) => theme.bp.tabletL}) {
          font-size: ${({ theme }) => theme.fontSizes.sm};
        }
      }
      &.title {
        padding-top: 15px;
        color: ${({ theme }) => theme.colors.lightestSlate};
        font-size: ${({ theme }) => theme.fontSizes.xl};
        font-weight: 600;
        line-height: 1.25;
      }
      &.company {
        width: 15%;
        padding-top: 15px;
        font-size: ${({ theme }) => theme.fontSizes.lg};
      }
      &.tech {
        font-size: ${({ theme }) => theme.fontSizes.xxs};
        font-family: ${({ theme }) => theme.fonts.SFMono};
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }
      &.links {
        span {
          display: flex;
          align-items: center;
          a {
            ${({ theme }) => theme.mixins.flexCenter};
          }
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
  }
`;

const ArchivePage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Head title="Archive" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading">Archive</h1>
          <p className="subtitle">A big list of things I’ve worked on</p>
        </header>

        <StyledTableContainer ref={revealTable}>
          <table>
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
                  const {
                    date,
                    github,
                    external,
                    ios,
                    android,
                    title,
                    tech,
                    company,
                  } = node.frontmatter;
                  return (
                    <tr key={i} ref={el => (revealProjects.current[i] = el)}>
                      <td className="overline year">{`${new Date(date).getFullYear()}`}</td>

                      <td className="title">{title}</td>

                      <td className="company hide-on-mobile">
                        {company ? <span>{company}</span> : <span>—</span>}
                      </td>

                      <td className="tech hide-on-mobile">
                        {tech.length > 0 &&
                          tech.map((item, i) => (
                            <span key={i}>
                              {item}
                              {''}
                              {i !== tech.length - 1 && <span className="separator">&middot;</span>}
                            </span>
                          ))}
                      </td>

                      <td className="links">
                        <span>
                          {external && (
                            <a href={external} aria-label="External Link">
                              <Icon name="External" />
                            </a>
                          )}
                          {github && (
                            <a href={github} aria-label="GitHub Link">
                              <Icon name="GitHub" />
                            </a>
                          )}
                          {ios && (
                            <a href={ios} aria-label="Apple App Store Link">
                              <Icon name="AppStore" />
                            </a>
                          )}
                          {android && (
                            <a href={android} aria-label="Google Play Store Link">
                              <Icon name="PlayStore" />
                            </a>
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </StyledTableContainer>
      </main>
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            external
            ios
            android
            company
          }
          html
        }
      }
    }
  }
`;
