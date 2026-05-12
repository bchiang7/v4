import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledContainer = styled.main`
  max-width: 1000px;
`;

const StyledHero = styled.header`
  margin-bottom: 60px;
`;

const StyledMeta = styled.p`
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  color: var(--green);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const StyledTitle = styled.h1`
  font-size: clamp(32px, 6vw, 60px);
  font-weight: 600;
  color: var(--lightest-slate);
  margin: 0 0 20px;
  line-height: 1.1;
`;

const StyledDescription = styled.p`
  font-size: var(--fz-xl);
  color: var(--slate);
  max-width: 650px;
  line-height: 1.5;
  margin-bottom: 32px;
`;

const StyledMetadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 0;
  padding-top: 32px;
  border-top: 1px solid var(--lightest-navy);
`;

const StyledMetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .label {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    color: var(--green);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .value {
    font-size: var(--fz-md);
    color: var(--lightest-slate);
  }
`;

const StyledCoverImage = styled.div`
  margin: 50px 0;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 20px 60px -10px var(--navy-shadow);

  .gatsby-image-wrapper {
    width: 100%;
    max-height: 550px;
  }
`;

const StyledContent = styled.div`
  margin-bottom: 80px;

  h2 {
    font-size: var(--fz-heading);
    color: var(--lightest-slate);
    margin: 60px 0 20px;

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: var(--fz-xxl);
    color: var(--lightest-slate);
    margin: 40px 0 16px;
  }

  p {
    font-size: var(--fz-lg);
    color: var(--slate);
    line-height: 1.7;
    margin: 0 0 20px;
  }

  ul,
  ol {
    color: var(--slate);
    font-size: var(--fz-lg);
    line-height: 1.7;
    margin: 0 0 20px;
    padding-left: 24px;

    li {
      margin-bottom: 8px;
    }
  }

  strong {
    color: var(--lightest-slate);
  }
`;

const StyledMetrics = styled.div`
  margin: 60px 0;

  h2 {
    font-size: var(--fz-heading);
    color: var(--lightest-slate);
    margin-bottom: 30px;
  }
`;

const StyledMetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const StyledMetricCard = styled.div`
  background: ${({ gradient }) =>
    gradient ||
    'linear-gradient(160deg, rgba(100, 255, 218, 0.1) 0%, rgba(100, 255, 218, 0.05) 100%)'};
  border: 1px solid ${({ borderColor }) => borderColor || 'rgba(100, 255, 218, 0.3)'};
  border-radius: var(--border-radius);
  padding: 24px;

  .metric-value {
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 700;
    color: ${({ textColor }) => textColor || 'var(--green)'};
    line-height: 1;
    margin-bottom: 8px;
    display: block;
  }

  .metric-label {
    font-size: var(--fz-sm);
    color: var(--slate);
    line-height: 1.4;
  }
`;

const StyledNav = styled.div`
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid var(--lightest-navy);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNavLink = styled(Link)`
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  color: var(--green);
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    color: var(--lightest-slate);
  }

  &.back {
    &::before {
      content: '← ';
    }
  }

  &.next {
    &::after {
      content: ' →';
    }
  }
`;

const CaseStudyTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark;
  const { title, description, company, role, timeline, cover, metrics, nextProject } = frontmatter;
  const image = getImage(cover);

  return (
    <Layout location={location}>
      <Helmet title={`${title} | Case Study`} />

      <StyledContainer>
        <span className="breadcrumb">
          <span className="arrow">&larr;</span>
          <Link to="/#work">All Work</Link>
        </span>

        <StyledHero>
          <StyledMeta>Case Study &mdash; {company}</StyledMeta>
          <StyledTitle>{title}</StyledTitle>
          {description && <StyledDescription>{description}</StyledDescription>}
          <StyledMetadata>
            {role && (
              <StyledMetaItem>
                <span className="label">Role</span>
                <span className="value">{role}</span>
              </StyledMetaItem>
            )}
            {timeline && (
              <StyledMetaItem>
                <span className="label">Timeline</span>
                <span className="value">{timeline}</span>
              </StyledMetaItem>
            )}
            {company && (
              <StyledMetaItem>
                <span className="label">Company</span>
                <span className="value">{company}</span>
              </StyledMetaItem>
            )}
          </StyledMetadata>
        </StyledHero>

        {image && (
          <StyledCoverImage>
            <GatsbyImage image={image} alt={title} />
          </StyledCoverImage>
        )}

        <StyledContent dangerouslySetInnerHTML={{ __html: html }} />

        {metrics && metrics.length > 0 && (
          <StyledMetrics>
            <h2>Results</h2>
            <StyledMetricsGrid>
              {metrics.map(({ value, label, gradient, borderColor, textColor }, i) => (
                <StyledMetricCard
                  key={i}
                  gradient={gradient}
                  borderColor={borderColor}
                  textColor={textColor}>
                  <span className="metric-value">{value}</span>
                  <span className="metric-label">{label}</span>
                </StyledMetricCard>
              ))}
            </StyledMetricsGrid>
          </StyledMetrics>
        )}

        <StyledNav>
          <StyledNavLink to="/#work" className="back">
            All Work
          </StyledNavLink>
          {nextProject && (
            <StyledNavLink to={nextProject.url} className="next">
              {nextProject.title}
            </StyledNavLink>
          )}
        </StyledNav>
      </StyledContainer>
    </Layout>
  );
};

export default CaseStudyTemplate;

CaseStudyTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
};

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        company
        role
        timeline
        slug
        cover {
          childImageSharp {
            gatsbyImageData(width: 1000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        metrics {
          value
          label
          gradient
          borderColor
          textColor
        }
        nextProject {
          title
          url
        }
      }
    }
  }
`;
