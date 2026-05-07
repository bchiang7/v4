import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledWritingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .substack-link,
  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .section-links {
    display: flex;
    gap: 20px;
  }

  .posts-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const StyledPost = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .post-inner {
        transform: translateY(-7px);
      }
    }
  }

  a {
    position: relative;
    z-index: 1;
  }

  .post-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: auto;
  }

  .post-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .bookmark {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .post-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .post-date {
    margin: 0 0 8px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
  }

  .post-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .post-description {
    color: var(--light-slate);
    font-size: 17px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }

  .post-tags {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;

const SUBSTACK_URL = 'https://substack.com/@bachng';
const GRID_LIMIT = 6;

const Writing = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/writing/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              external
              tags
            }
            html
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealPosts = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealTitle.current, srConfig());
    revealPosts.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const posts = data.posts.edges.filter(({ node }) => node);
  const firstSix = posts.slice(0, GRID_LIMIT);
  const postsToShow = showMore ? posts : firstSix;

  const postInner = useCallback(node => {
    const { frontmatter, html } = node;
    const { external, title, date, tags } = frontmatter;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });

    return (
      <div className="post-inner">
        <header>
          <div className="post-top">
            <div className="bookmark">
              <Icon name="Bookmark" />
            </div>
            <div className="post-links">
              {external && (
                <a
                  href={external}
                  aria-label="Read on Substack"
                  className="external"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>

          <p className="post-date">{formattedDate}</p>

          <h3 className="post-title">
            <a href={external} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h3>

          <div className="post-description" dangerouslySetInnerHTML={{ __html: html }} />
        </header>

        <footer>
          {tags && (
            <ul className="post-tags">
              {tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
          )}
        </footer>
      </div>
    );
  }, []);

  return (
    <StyledWritingSection id="writing">
      <h2 className="numbered-heading" ref={revealTitle}>
        Writing
      </h2>

      <div className="section-links">
        <a
          className="inline-link substack-link"
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer">
          read all on substack
        </a>
        <Link className="inline-link archive-link" to="/archive">
          view the archive
        </Link>
      </div>

      <ul className="posts-grid">
        {prefersReducedMotion ? (
          <>
            {postsToShow.map(({ node }, i) => (
              <StyledPost key={i}>{postInner(node)}</StyledPost>
            ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {postsToShow.map(({ node }, i) => (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                exit={false}>
                <StyledPost
                  key={i}
                  ref={el => (revealPosts.current[i] = el)}
                  style={{
                    transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                  }}>
                  {postInner(node)}
                </StyledPost>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      {posts.length > GRID_LIMIT && (
        <button className="more-button" onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </StyledWritingSection>
  );
};

export default Writing;
