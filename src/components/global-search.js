import React, { useMemo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link, navigate, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 30;
  background: rgba(2, 12, 27, 0.75);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 9vh 18px 18px;
`;

const StyledDialog = styled.div`
  width: min(980px, 100%);
  max-height: 82vh;
  overflow: auto;
  border: 1px solid rgba(100, 255, 218, 0.25);
  border-radius: 10px;
  background: linear-gradient(145deg, rgba(17, 34, 64, 0.96), rgba(10, 25, 47, 0.96));
  box-shadow: 0 24px 60px -20px var(--navy-shadow);
  padding: 22px;

  @media (max-width: 480px) {
    padding: 16px;
  }

  .top {
    ${({ theme }) => theme.mixins.flexBetween};
    gap: 12px;
    margin-bottom: 12px;
  }

  .title {
    margin: 0;
    color: var(--lightest-slate);
    font-size: clamp(20px, 4vw, 28px);
  }

  .close-btn {
    ${({ theme }) => theme.mixins.smallButton};
    padding: 10px 12px;
    font-size: var(--fz-xxs);
  }

  .scope {
    margin: 0 0 16px;
    color: var(--light-slate);
    font-size: var(--fz-sm);

    strong {
      color: var(--lightest-slate);
      font-weight: 600;
    }
  }

  .input-wrap {
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

  .search-input {
    width: 100%;
    border: 1px solid var(--lightest-navy);
    border-radius: var(--border-radius);
    background-color: rgba(2, 12, 27, 0.75);
    color: var(--lightest-slate);
    font-size: var(--fz-lg);
    line-height: 1.5;
    padding: 14px 16px 14px 42px;
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

  .hint {
    margin: 10px 0 0;
    color: var(--slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }

  .results {
    ${({ theme }) => theme.mixins.resetList};
    margin-top: 16px;
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
    cursor: pointer;

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
`;

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
const tokenize = value =>
  normalize(value)
    .split(' ')
    .filter(token => token.length > 1);

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

const scoreRelated = (entry, query) => {
  const queryTokens = tokenize(query);
  if (queryTokens.length === 0) {return 0;}

  const entryTokens = tokenize(entry.searchableText);
  if (entryTokens.length === 0) {return 0;}

  let score = 0;
  queryTokens.forEach(qToken => {
    const hasPrefixMatch = entryTokens.some(token => token.startsWith(qToken));
    const hasContainsMatch = entryTokens.some(token => token.includes(qToken));
    if (hasPrefixMatch) {score += 14;} else if (hasContainsMatch) {score += 7;}
  });

  return score;
};

const GlobalSearch = ({ isOpen, onClose }) => {
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
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            excerpt(pruneLength: 240)
            frontmatter {
              title
              company
              external
              github
              tech
              date
            }
          }
        }
      }
    }
  `);

  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {return undefined;}

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    setTimeout(() => inputRef.current?.focus(), 0);

    const onKeyDown = event => {
      if (event.key === 'Escape') {onClose();}
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

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
      return {
        id: `job-${idx}`,
        title: `${title} @ ${company}`,
        section: 'Experience',
        link: '/#jobs',
        snippet: `${range}${location ? ` • ${location}` : ''}`,
        searchableText: `${title} ${company} ${location} ${range} ${node.excerpt}`,
      };
    });

    const featuredEntries = data.featured.edges.map(({ node }, idx) => {
      const { title, tech, domain, role, projectTypes, estimationInputs, workflow, outcomes } =
        node.frontmatter;

      return {
        id: `featured-${idx}`,
        title,
        section: 'Featured Work',
        link: '/#projects',
        snippet: truncate(node.excerpt),
        searchableText: [
          title,
          domain,
          role,
          asArray(tech).join(' '),
          asArray(projectTypes).join(' '),
          asArray(estimationInputs).join(' '),
          asArray(workflow).join(' '),
          asArray(outcomes).join(' '),
          node.excerpt,
        ].join(' '),
      };
    });

    const projectEntries = data.projects.edges.map(({ node }, idx) => {
      const { title, company, external, github, tech, date } = node.frontmatter;
      return {
        id: `project-${idx}`,
        title,
        section: 'Projects',
        link: external || github || '/archive',
        snippet: `${company ? `${company} • ` : ''}${date ? new Date(date).getFullYear() : ''}`,
        searchableText: `${title} ${company} ${asArray(tech).join(' ')} ${node.excerpt}`,
      };
    });

    return [aboutEntry, ...jobsEntries, ...featuredEntries, ...projectEntries];
  }, [data]);

  const results = useMemo(() => {
    const q = query.trim();
    if (q.length < 2) {return [];}

    const direct = searchIndex
      .map(entry => ({ ...entry, score: scoreEntry(entry, q) }))
      .filter(entry => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

    if (direct.length > 0) {
      return direct.slice(0, 12).map(item => ({ ...item, matchType: 'direct' }));
    }

    return searchIndex
      .map(entry => ({ ...entry, score: scoreRelated(entry, q) }))
      .filter(entry => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 8)
      .map(item => ({ ...item, matchType: 'related' }));
  }, [query, searchIndex]);

  const handleResultClick = link => {
    onClose();

    if (isExternalUrl(link)) {
      window.open(link, '_blank', 'noopener,noreferrer');
      return;
    }

    // Hash-based links should force section navigation from any page.
    if (link.includes('#')) {
      window.location.href = link;
      return;
    }

    navigate(link);
  };

  if (!isOpen) {return null;}

  return (
    <StyledOverlay onClick={onClose}>
      <StyledDialog
        role="dialog"
        aria-modal="true"
        aria-label="Search all portfolio content"
        onClick={event => event.stopPropagation()}>
        <div className="top">
          <h2 className="title">Search</h2>
          <button type="button" className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>

        <p className="scope">
          Search across everything: <strong>About</strong>, <strong>Experience</strong>,{' '}
          <strong>Featured Work</strong>, and <strong>Projects</strong>.
          <br />
          Only portfolio website content is searched.
        </p>

        <form role="search" aria-label="Global portfolio search">
          <label htmlFor="global-search-input" className="sr-only">
            Search all portfolio content
          </label>
          <div className="input-wrap">
            <span className="search-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="20" y1="20" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              id="global-search-input"
              ref={inputRef}
              className="search-input"
              type="search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Try: Rails, translation, microservices, CI/CD, API, healthcare..."
            />
          </div>
        </form>

        <p className="hint">Type at least 2 characters to search.</p>

        {query.trim().length >= 2 && results.length === 0 && (
          <p className="empty">No matches found. Try another keyword.</p>
        )}

        {results.length > 0 && (
          <ul className="results">
            {results.map(result => (
              <li key={result.id} className="result-item">
                <span className="result-type">
                  {result.section}
                  {result.matchType === 'related' ? ' • Related' : ''}
                </span>
                <h3 className="result-title">{result.title}</h3>
                {result.snippet && <p className="result-snippet">{result.snippet}</p>}

                {isExternalUrl(result.link) ? (
                  <a
                    href={result.link}
                    className="inline-link result-link"
                    target="_blank"
                    rel="noreferrer"
                    onClick={event => {
                      event.preventDefault();
                      handleResultClick(result.link);
                    }}>
                    Open result
                  </a>
                ) : (
                  <Link
                    to={result.link}
                    className="inline-link result-link"
                    onClick={event => {
                      event.preventDefault();
                      handleResultClick(result.link);
                    }}>
                    Open result
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}
      </StyledDialog>
    </StyledOverlay>
  );
};

GlobalSearch.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GlobalSearch;
