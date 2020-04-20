import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { IconGitHub, IconExternal, IconPresentation } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins, media, Section, Button } from '@styles';
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  footer {
    ${mixins.flexBetween};
    margin-top: 20px;
    width: 100%;
  }
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

  .presentations {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`;
const StyledPresentationInner = styled.div`
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
const StyledPresentation = styled.div`
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
    ${StyledPresentationInner} {
      transform: translateY(-5px);
    }
  }
`;
const StyledPresentationHeader = styled.div`
  ${mixins.flexBetween};
  margin-bottom: 30px;
`;
const StyledConference = styled.div`
  color: ${colors.green};
  svg {
    width: 40px;
    height: 40px;
  }
`;
const StyledPresentationLinks = styled.div`
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
const StyledPresentationName = styled.h5`
  margin: 0 0 10px;
  font-size: ${fontSizes.xxl};
  color: ${colors.lightestSlate};
`;
const StyledPresentationDescription = styled.div`
  font-size: 17px;
  color: ${colors.lightSlate};
  a {
    ${mixins.inlineLink};
  }
`;
const StyledTechList = styled.h5`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  color: ${colors.slate};
  line-height: 1.75;
`;
const StyledMoreButton = styled(Button)`
  margin: 100px auto 0;
`;
const StyledConferenceName = styled.span`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  color: ${colors.lightSlate};
`;
const StyledPresentationType = styled.span`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  color: ${colors.lightSlate};
`;
const StyledDate = styled.span`
  text-transform: uppercase;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  color: ${colors.lightSlate};
`;

const Presentations = ({ data }) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealPresentations = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealPresentations.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const presentations = data.filter(({ node }) => node);
  const firstSix = presentations.slice(0, GRID_LIMIT);
  const presentationsToShow = showMore ? presentations : firstSix;

  return (
    <StyledContainer>
      <StyledTitle ref={revealTitle}>Presentations</StyledTitle>
      <StyledArchiveLink to="/presentations" ref={revealArchiveLink}>
        view the archive
      </StyledArchiveLink>

      <StyledGrid>
        <TransitionGroup className="presentations">
          {presentationsToShow &&
            presentationsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { external, title, conference, date, type } = frontmatter;
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledPresentation
                    key={i}
                    ref={el => (revealPresentations.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    <StyledPresentationInner>
                      <header>
                        <StyledPresentationHeader>
                          <StyledConference>
                            <IconPresentation />
                          </StyledConference>
                          <StyledPresentationLinks>
                            {external && (
                              <StyledIconLink
                                href={external}
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                aria-label="External Link">
                                <IconExternal />
                              </StyledIconLink>
                            )}
                          </StyledPresentationLinks>
                        </StyledPresentationHeader>
                        <StyledPresentationName>{title}</StyledPresentationName>
                        <StyledPresentationDescription dangerouslySetInnerHTML={{ __html: html }} />
                      </header>
                      <footer>
                        <StyledPresentationType>{type}</StyledPresentationType>
                        <StyledConferenceName>{conference}</StyledConferenceName>
                        <StyledDate>{`${new Date(date).getFullYear()}`}</StyledDate>
                      </footer>
                    </StyledPresentationInner>
                  </StyledPresentation>
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

Presentations.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Presentations;
