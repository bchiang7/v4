import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

const StyledPublicationsSection = styled.section`
  max-width: 900px;

  .publications-list {
    ${({ theme }) => theme.mixins.resetList};
  }
`;

const StyledPublication = styled.li`
  position: relative;
  padding: 25px 25px 25px 30px;
  margin-bottom: 20px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  transition: var(--transition);

  &:hover,
  &:focus-within {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    background-color: var(--green);
  }

  .publication-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    line-height: 1.3;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .publication-authors {
    margin: 0 0 6px;
    color: var(--light-slate);
    font-size: var(--fz-sm);

    strong {
      color: var(--green);
      font-weight: 600;
    }
  }

  .publication-venue {
    margin: 0 0 12px;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }

  .publication-summary {
    margin: 0 0 15px;
    color: var(--slate);
    font-size: var(--fz-md);

    p {
      margin: 0;
    }
  }

  .publication-link {
    ${({ theme }) => theme.mixins.smallButton};
    display: inline-flex;
    align-items: center;
    font-size: var(--fz-xs);

    svg {
      width: 16px;
      height: 16px;
      margin-left: 8px;
    }
  }
`;

// Highlights Lindsay's name in an author list so it stands out from co-authors.
const AuthorList = ({ authors }) => {
  const parts = authors.split(/(Sizhu Cheng)/g);
  return (
    <p className="publication-authors">
      {parts.map((part, i) =>
        part === 'Sizhu Cheng' ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>,
      )}
    </p>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.string.isRequired,
};

const Publications = () => {
  const data = useStaticQuery(graphql`
    {
      publications: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/publications/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              authors
              venue
              url
              urlLabel
            }
            html
          }
        }
      }
    }
  `);

  const publications = data.publications.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealPublications = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealPublications.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <StyledPublicationsSection id="publications">
      <h2 className="numbered-heading" ref={revealTitle}>
        Publications
      </h2>

      <ul className="publications-list">
        {publications.map(({ node }, i) => {
          const { title, authors, venue, url, urlLabel } = node.frontmatter;

          return (
            <StyledPublication key={i} ref={el => (revealPublications.current[i] = el)}>
              <h3 className="publication-title">
                {url ? (
                  <a href={url} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>

              {authors && <AuthorList authors={authors} />}
              {venue && <p className="publication-venue">{venue}</p>}

              <div
                className="publication-summary"
                dangerouslySetInnerHTML={{ __html: node.html }}
              />

              {url && (
                <a className="publication-link" href={url} target="_blank" rel="noreferrer">
                  {urlLabel || 'Read paper'}
                  <Icon name="External" />
                </a>
              )}
            </StyledPublication>
          );
        })}
      </ul>
    </StyledPublicationsSection>
  );
};

export default Publications;
