import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { giscus } from '@config';

const StyledComments = styled.section`
  margin: 80px 0 100px;
  padding-top: 40px;
  border-top: 1px solid var(--lightest-navy);

  h2 {
    margin: 0 0 25px;
    color: var(--lightest-slate);
    font-size: var(--fz-heading);
  }

  .comments-fallback {
    padding: 20px 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--slate);
    font-size: var(--fz-sm);
    line-height: 1.6;

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    code {
      background-color: var(--lightest-navy);
      color: var(--lightest-slate);
      border-radius: var(--border-radius);
      font-size: var(--fz-xs);
      padding: 0.2em 0.4em;
    }
  }
`;

// Giscus renders comments from GitHub Discussions. It has to be injected as a real
// <script> tag (React can't render one via JSX), so it's appended on mount.
const Comments = () => {
  const containerRef = useRef(null);
  const [isConfigured] = useState(() => Boolean(giscus.repoId && giscus.categoryId));

  useEffect(() => {
    if (!isConfigured || !containerRef.current) {
      return;
    }

    // Avoid mounting twice during client-side navigation.
    if (containerRef.current.querySelector('script')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-repo', giscus.repo);
    script.setAttribute('data-repo-id', giscus.repoId);
    script.setAttribute('data-category', giscus.category);
    script.setAttribute('data-category-id', giscus.categoryId);
    script.setAttribute('data-mapping', giscus.mapping);
    script.setAttribute('data-strict', '1');
    script.setAttribute('data-reactions-enabled', giscus.reactionsEnabled);
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', giscus.inputPosition);
    script.setAttribute('data-theme', 'transparent_dark');
    script.setAttribute('data-lang', giscus.lang);
    script.setAttribute('data-loading', 'lazy');

    containerRef.current.appendChild(script);
  }, [isConfigured]);

  return (
    <StyledComments>
      <h2>Comments</h2>

      {isConfigured ? (
        <div ref={containerRef} className="giscus" />
      ) : (
        <div className="comments-fallback">
          Comments aren’t switched on yet. To enable them, follow the “Blog comments” section of the{' '}
          <a href="https://github.com/szcheng0702/v4-personal-website#blog-comments">README</a> and
          fill in <code>repoId</code> and <code>categoryId</code> in <code>src/config.js</code>.
        </div>
      )}
    </StyledComments>
  );
};

export default Comments;
