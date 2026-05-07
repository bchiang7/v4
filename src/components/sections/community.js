import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledCommunitySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .events-container {
    width: 100%;
    margin-top: 50px;
  }

  .subsection-title {
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    font-weight: 600;
    margin: 0 0 30px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--lightest-navy);
  }

  .events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    margin-bottom: 60px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .subscribe-section {
    width: 100%;
    max-width: 600px;
    margin: 20px auto 0;
    padding: 50px 40px;
    background-color: var(--light-navy);
    border-radius: var(--border-radius);
    text-align: center;

    @media (max-width: 480px) {
      padding: 30px 20px;
    }

    h3 {
      color: var(--lightest-slate);
      font-size: var(--fz-xxl);
      margin: 0 0 10px;
    }

    p {
      color: var(--slate);
      font-size: var(--fz-md);
      margin: 0 0 30px;
    }

    .subscribe-form {
      display: flex;
      gap: 10px;

      @media (max-width: 480px) {
        flex-direction: column;
      }

      input[type='email'] {
        flex: 1;
        padding: 12px 16px;
        background-color: var(--navy);
        border: 1px solid var(--lightest-navy);
        border-radius: var(--border-radius);
        color: var(--lightest-slate);
        font-family: var(--font-sans);
        font-size: var(--fz-md);
        outline: none;
        transition: var(--transition);

        &::placeholder {
          color: var(--slate);
        }

        &:focus {
          border-color: var(--green);
        }
      }

      button[type='submit'] {
        ${({ theme }) => theme.mixins.button};
        white-space: nowrap;
      }
    }

    .subscribe-success {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      margin-top: 10px;
    }

    .subscribe-error {
      color: #e06c75;
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      margin-top: 6px;
      text-align: left;
    }
  }
`;

const StyledEventCard = styled.div`
  background-color: var(--light-navy);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition);
  ${({ theme }) => theme.mixins.boxShadow};

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: translateY(-7px);
    }
  }

  .event-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    background-color: var(--lightest-navy);
    display: block;
  }

  .event-image-placeholder {
    width: 100%;
    height: 180px;
    background-color: var(--lightest-navy);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--slate);
    font-size: var(--fz-xxs);
    font-family: var(--font-mono);
    letter-spacing: 0.05em;
  }

  .event-body {
    padding: 1.5rem;
  }

  .event-meta {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;

    span {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      color: var(--green);
    }
  }

  .event-title {
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    font-weight: 600;
    margin: 0 0 8px;

    a {
      color: inherit;
      text-decoration: none;
      transition: var(--transition);

      &:hover {
        color: var(--green);
      }
    }
  }

  .event-description {
    color: var(--light-slate);
    font-size: var(--fz-sm);
    line-height: 1.6;
    margin: 0 0 16px;
  }

  .event-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      color: var(--green);
    }
  }
`;

const Community = () => {
  const data = useStaticQuery(graphql`
    query {
      events: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/community/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              location
              image
              type
              url
              tags
            }
            excerpt(pruneLength: 160)
          }
        }
      }
    }
  `);

  const [formState, handleSubmit] = useForm('mkokzdva');

  const revealTitle = useRef(null);
  const revealSection = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealSection.current, srConfig(100));
  }, []);

  const events = data.events.edges.filter(({ node }) => node);
  const upcoming = events.filter(({ node }) => node.frontmatter.type === 'upcoming');
  const past = events.filter(({ node }) => node.frontmatter.type === 'past');

  const formatDate = dateStr =>
    new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const renderEventCard = ({ node }, i) => {
    const { title, date, location, image, url, tags } = node.frontmatter;
    return (
      <StyledEventCard key={i}>
        {image ? (
          <img className="event-image" src={image} alt={title} loading="lazy" />
        ) : (
          <div className="event-image-placeholder">no photo yet</div>
        )}
        <div className="event-body">
          <div className="event-meta">
            <span>{formatDate(date)}</span>
            {location && <span>{location}</span>}
          </div>

          <h3 className="event-title">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            ) : (
              title
            )}
          </h3>

          <p className="event-description">{node.excerpt}</p>

          {tags && tags.length > 0 && (
            <ul className="event-tags">
              {tags.map((tag, j) => (
                <li key={j}>{tag}</li>
              ))}
            </ul>
          )}
        </div>
      </StyledEventCard>
    );
  };

  return (
    <StyledCommunitySection id="community">
      <h2 className="numbered-heading" ref={revealTitle}>
        Community
      </h2>

      <div className="events-container" ref={revealSection}>
        {upcoming.length > 0 && (
          <>
            <h3 className="subsection-title">Upcoming Events</h3>
            <div className="events-grid">{upcoming.map(renderEventCard)}</div>
          </>
        )}

        {past.length > 0 && (
          <>
            <h3 className="subsection-title">Past Events</h3>
            <div className="events-grid">{past.map(renderEventCard)}</div>
          </>
        )}
      </div>

      <div className="subscribe-section">
        <h3>Stay in the loop</h3>
        <p>Get notified about upcoming events, workshops, and community meetups.</p>
        {formState.succeeded ? (
          <p className="subscribe-success">You're subscribed — I'll be in touch!</p>
        ) : (
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              aria-label="Email address"
            />
            <button type="submit" disabled={formState.submitting}>
              {formState.submitting ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        )}
        <ValidationError
          field="email"
          prefix="Email"
          errors={formState.errors}
          className="subscribe-error"
        />
      </div>
    </StyledCommunitySection>
  );
};

export default Community;
