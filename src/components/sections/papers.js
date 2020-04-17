import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { IconGitHub, IconExternal, IconPaper } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;
const StyledTitle = styled.h4`
  margin: 0 auto;
  font-size: ${fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;
const StyledArchiveLink = styled(Link)`
  ${mixins.inlineLink};
  text-align: center;
  margin: 0 auto;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.sm};
  &:after {
    bottom: 0.1em;
  }
`;
const StyledGrid = styled.div`
  margin-top: 50px;

  .papers {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const StyledPaperInner = styled.div`
  ${mixins.boxShadow};
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 2rem 1.75rem;
  height: 100%;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${colors.lightNavy};
`;
const StyledPaper = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledPaperInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledPaperHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const StyledJournal = styled.div`
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const StyledPaperLinks = styled.div`
  margin-right: -10px;
  color: ${colors.lightSlate};
`;
const StyledIconLink = styled.a`
  position: relative;
  top: -10px;
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const StyledPaperName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${colors.lightestSlate};
`;
const StyledPaperDescription = styled.div`
  font-size: 17px;
  color: ${colors.lightSlate};
  a {
    ${mixins.inlineLink};
  }
`;
const StyledTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: ${fonts.SFMono};
    font-size: ${fontSizes.xs};
    color: ${colors.slate};
    line-height: 1.75;
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
const StyledMoreButton = styled(Button)`
  margin: 100px auto 0;
`;

const Papers = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealPapers = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealPapers.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 3;
  const papers = data.filter(({ node }) => node);
  const firstSix = papers.slice(0, GRID_LIMIT);
  const papersToShow = showMore ? papers : firstSix;

  return (
    <StyledContainer>
      <StyledTitle ref={revealTitle}>Papers</StyledTitle>
      <StyledArchiveLink to="/archive" ref={revealArchiveLink}>
        view the archive
      </StyledArchiveLink>

      <StyledGrid>
        <TransitionGroup className="papers">
          {papersToShow &&
            papersToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { github, external, title } = frontmatter;
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledPaper
                    key={i}
                    ref={el => (revealPapers.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <StyledPaperInner>
                      <header>
                        <StyledPaperHeader>
                          <StyledJournal>
                            <IconPaper />
                          </StyledJournal>
                          <StyledPaperLinks>
                            {external && (
                              <StyledIconLink
                                href={external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="External Link">
                                <IconExternal />
                              </StyledIconLink>
                            )}
                          </StyledPaperLinks>
                        </StyledPaperHeader>
                        <StyledPaperName>{title}</StyledPaperName>
                        <StyledPaperDescription dangerouslySetInnerHTML={{ __html: html }} />
                      </header>
                    </StyledPaperInner>
                  </StyledPaper>
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </StyledGrid>

      <StyledMoreButton onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </StyledMoreButton>
    </StyledContainer>
  );
};

Papers.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Papers;
