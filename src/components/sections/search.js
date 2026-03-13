import React, { useMemo, useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledSearchSection = styled.section`
  max-width: 1000px;

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
  }

  .intro {
    margin: 0 0 24px;
    max-width: 720px;
  }

  .search-shell {
    ${({ theme }) => theme.mixins.boxShadow};
    border-radius: var(--border-radius);
    background: linear-gradient(145deg, rgba(17, 34, 64, 0.95), rgba(10, 25, 47, 0.95));
    padding: 28px;

    @media (max-width: 480px) {
      padding: 20px;
    }
  }

  .search-input {
    width: 100%;
    border: 1px solid var(--lightest-navy);
    border-radius: var(--border-radius);
    background-color: rgba(2, 12, 27, 0.75);
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
    line-height: 1.5;
    padding: 14px 16px;
    transition: var(--transition);

    &::placeholder {
      color: var(--slate);
    }

    &:hover,
    &:focus {
      border-color: var(--green);
      box-shadow: 0 0 0 3px var(--green-tint);
    }
  }

  .search-input-wrap {
    position: relative;
  }

  .search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--green);
    pointer-events: none;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  .search-input.has-icon {
    padding-left: 42px;
  }

  .hint {
    margin: 10px 0 0;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }

  .results {
    ${({ theme }) => theme.mixins.resetList};
    margin-top: 18px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 12px;
  }

  .result-item {
    border: 1px solid rgba(136, 146, 176, 0.25);
    border-radius: var(--border-radius);
    background: rgba(2, 12, 27, 0.45);
    padding: 14px;
    transition: var(--transition);

    &:hover,
    &:focus-within {
      transform: translateY(-3px);
      border-color: rgba(100, 255, 218, 0.45);
    }
  }

  .result-type {
    display: inline-flex;
    margin-bottom: 8px;
    padding: 4px 10px;
    border: 1px solid rgba(100, 255, 218, 0.4);
    border-radius: 999px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    letter-spacing: 0.03em;
  }

  .result-title {
    margin: 0;
    font-size: var(--fz-xl);
    color: var(--lightest-slate);
  }

  .result-snippet {
    margin: 8px 0 14px;
    color: var(--light-slate);
    font-size: var(--fz-sm);
    line-height: 1.5;
  }

  .result-link {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }

  .empty {
    margin-top: 16px;
    color: var(--light-slate);
    font-size: var(--fz-sm);
  }
`;

const stripTags = value => (value || '').replace(/<[^>]*>/g, ' ');
const normalize = value =>
  (value || '')
    .toLowerCase()
    .replace(/[^\w\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const truncate = (value, max = 180) =>
  value && value.length > max ? `${value.slice(0, max).trim()}...` : value;

const isExternalUrl = url => /^https?:\/\//i.test(url || '');
const asArray = value => (Array.isArray(value) ? value : []);

const scoreEntry = (entry, query) => {
  const q = normalize(query);
  if (!q) {return 0;}

  const title = normalize(entry.title);
  const section = normalize(entry.section);
  const content = normalize(entry.searchableText);
  const tokens = q.split(' ').filter(Boolean);

  let score = 0;

  if (title === q) {score += 120;}
  if (title.startsWith(q)) {score += 80;}
  if (title.includes(q)) {score += 60;}
  if (section.includes(q)) {score += 25;}
  if (content.includes(q)) {score += 35;}

  tokens.forEach(token => {
    if (token.length < 2) {return;}
    if (title.includes(token)) {score += 18;}
    if (content.includes(token)) {score += 7;}
  });

  return score;
};

const Search = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            excerpt(pruneLength: 240)
            frontmatter {
              title
              company
              location
              range
            }
          }
        }
      }
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/" } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          node {
            excerpt(pruneLength: 260)
            frontmatter {
              title
              external
              tech
              domain
              role
              projectTypes
              estimationInputs
              workflow
              outcomes
            }
          }
        }
      }
      posts: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/posts/" }
          frontmatter: { draft: { ne: true } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            excerpt(pruneLength: 240)
            frontmatter {
              title
              description
              slug
              tags
            }
          }
        }
      }
    }
  `);

  const [query, setQuery] = useState('');
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const searchIndex = useMemo(() => {
    const aboutSummary =
      'Software Engineer focused on Ruby on Rails, React.js, AWS, microservices, API reliability, performance tuning, CI/CD, and technical leadership.';
    const aboutSkills =
      'Ruby JavaScript React Ruby on Rails PostgreSQL Redis AWS Docker Kubernetes RSpec Jest GraphQL REST API';

    const aboutEntry = {
      id: 'about-context',
      title: 'About Me',
      section: 'About',
      link: '/#about',
      snippet: aboutSummary,
      searchableText: `${aboutSummary} ${aboutSkills}`,
    };

    const jobsEntries = data.jobs.edges.map(({ node }, idx) => {
      const { title, company, location, range } = node.frontmatter;
      const snippet = `${range}${location ? ` • ${location}` : ''}`;

      return {
        id: `job-${idx}`,
        title: `${title} @ ${company}`,
        section: 'Experience',
        link: '/#jobs',
        snippet,
        searchableText: `${title} ${company} ${location} ${range} ${node.excerpt}`,
      };
    });

    const featuredEntries = data.featured.edges.map(({ node }, idx) => {
      const {
        title,
        external,
        tech,
        domain,
        role,
        projectTypes,
        estimationInputs,
        workflow,
        outcomes,
      } = node.frontmatter;
      const techList = asArray(tech);
      const projectTypesList = asArray(projectTypes);
      const estimationInputsList = asArray(estimationInputs);
      const workflowList = asArray(workflow);
      const outcomesList = asArray(outcomes);

      return {
        id: `featured-${idx}`,
        title,
        section: 'Featured Work',
        link: external || '/#projects',
        snippet: truncate(stripTags(node.excerpt)),
        searchableText: [
          title,
          domain,
          role,
          techList.join(' '),
          projectTypesList.join(' '),
          estimationInputsList.join(' '),
          workflowList.join(' '),
          outcomesList.join(' '),
          node.excerpt,
        ].join(' '),
      };
    });

    const postEntries = data.posts.edges.map(({ node }, idx) => {
      const { title, description, slug, tags } = node.frontmatter;
      const tagsList = asArray(tags);

      return {
        id: `post-${idx}`,
        title,
        section: 'Pensieve',
        link: slug,
        snippet: truncate(description || node.excerpt),
        searchableText: `${title} ${description} ${tagsList.join(' ')} ${node.excerpt}`,
      };
    });

    return [aboutEntry, ...jobsEntries, ...featuredEntries, ...postEntries];
  }, [data]);

  const results = useMemo(() => {
    const q = query.trim();
    if (q.length < 2) {return [];}

    return searchIndex
      .map(entry => ({ ...entry, score: scoreEntry(entry, q) }))
      .filter(entry => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 12);
  }, [query, searchIndex]);

  return (
    <StyledSearchSection id="search" ref={revealContainer}>
      <h2 className="numbered-heading">Search Everything</h2>

      <p className="intro">
        Search across everything on this portfolio: <strong>About</strong>,{' '}
        <strong>Experience</strong>, <strong>Featured Work</strong>, and{' '}
        <strong>Pensieve posts</strong>.
      </p>

      <div className="search-shell">
        <form role="search" aria-label="Portfolio search">
          <label htmlFor="portfolio-search" className="sr-only">
            Search portfolio content
          </label>
          <div className="search-input-wrap">
            <span className="search-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              id="portfolio-search"
              className="search-input has-icon"
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Try: Rails, translation, microservices, CI/CD, API, healthcare..."
              aria-label="Search through portfolio content"
            />
          </div>
        </form>
        <p className="hint">Type at least 2 characters to start searching all indexed content.</p>

        {query.trim().length >= 2 && results.length === 0 && (
          <p className="empty">No matches found. Try another keyword or a broader phrase.</p>
        )}

        {results.length > 0 && (
          <ul className="results">
            {results.map(result => (
              <li key={result.id} className="result-item">
                <span className="result-type">{result.section}</span>
                <h3 className="result-title">{result.title}</h3>
                {result.snippet && <p className="result-snippet">{result.snippet}</p>}

                {isExternalUrl(result.link) ? (
                  <a
                    href={result.link}
                    className="inline-link result-link"
                    target="_blank"
                    rel="noreferrer">
                    Open result
                  </a>
                ) : (
                  <Link to={result.link} className="inline-link result-link">
                    Open result
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </StyledSearchSection>
  );
};

export default Search;
