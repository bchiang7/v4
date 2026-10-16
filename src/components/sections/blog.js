import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { useLanguage } from '../../hooks/LanguageContext';
import { spotlight, onSpotlightMove } from '../fx';

const BLOG_URL = 'https://angelortizv.com';

const StyledBlogSection = styled.section`
  max-width: 900px;
  margin: 0 auto 100px;

  @media (max-width: 768px) {
    margin: 0 auto 60px;
  }

  .blog-intro {
    margin: -10px 0 30px;
    color: var(--light-text-color);
    font-size: var(--fz-lg);
    line-height: 1.5;
    max-width: 540px;
  }

  .blog-list {
    ${({ theme }) => theme.mixins.resetList};
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .blog-item {
    a {
      ${({ theme }) => theme.mixins.flexBetween};
      align-items: center;
      gap: 16px;
      padding: 1.25rem 1.5rem;
      ${spotlight};
      background: var(--light-bg-color);
      border: 1px solid var(--outline-light);
      border-radius: var(--border-radius);
      color: var(--light-text-color);
      text-decoration: none;
      transition: var(--transition);

      &:hover {
        border-color: var(--signal-color);
        color: var(--primary-color);
        box-shadow: 0 4px 24px -4px var(--glow-color);

        .blog-item-icon {
          color: var(--primary-color);
        }
      }
    }
  }

  .blog-item-title {
    font-size: var(--fz-md);
    font-weight: 500;
    color: var(--lightest-text-color);
    margin: 0;
    flex: 1;
    min-width: 0;
  }

  .blog-item-date {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--light-text-color);
    flex-shrink: 0;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .blog-item-icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: var(--light-text-color);
    transition: var(--transition);
  }

  .blog-footer {
    margin-top: 24px;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
    }
  }
`;

const formatDate = (dateStr, locale) => {
  if (!dateStr) {
    return '';
  }
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat(locale === 'es' ? 'es' : 'en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
};

const toAbsoluteUrl = link => {
  if (!link) {
    return BLOG_URL;
  }
  if (link.startsWith('http://') || link.startsWith('https://')) {
    return link;
  }
  const base = BLOG_URL.replace(/\/$/, '');
  const path = link.startsWith('/') ? link : `/${link}`;
  return `${base}${path}`;
};

const Blog = () => {
  const revealContainer = useRef(null);
  const { t, lang } = useLanguage();

  const data = useStaticQuery(graphql`
    query LatestBlogPosts {
      allFeedBlog(sort: { fields: [pubDate], order: DESC }, limit: 3) {
        edges {
          node {
            id
            title
            link
            pubDate
          }
        }
      }
    }
  `);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealContainer.current, srConfig());
    }
  }, []);

  const posts = data?.allFeedBlog?.edges ?? [];

  if (posts.length === 0) {
    return null;
  }

  const locale = lang === 'es' ? 'es' : 'en';

  return (
    <StyledBlogSection id="blog" ref={revealContainer}>
      <h2 className="numbered-heading">{t('blog_section_title')}</h2>
      <p className="blog-intro">{t('blog_section_intro')}</p>

      <ul className="blog-list">
        {posts.map(({ node }) => (
          <li key={node.id} className="blog-item">
            <a
              href={toAbsoluteUrl(node.link)}
              target="_blank"
              rel="noopener noreferrer"
              onMouseMove={onSpotlightMove}>
              <span className="blog-item-title">{node.title}</span>
              <span className="blog-item-date">{formatDate(node.pubDate, locale)}</span>
              <span className="blog-item-icon" aria-hidden="true">
                <Icon name="External" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="blog-footer">
        <a href={BLOG_URL} target="_blank" rel="noopener noreferrer">
          {t('blog_section_link')} →
        </a>
      </p>
    </StyledBlogSection>
  );
};

export default Blog;
