import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const StyledLeftSideSocialLinks = styled.div`
  position: fixed;
  bottom: 50%;
  left: 20px;
  transform: translateY(50%);
  color: var(--light-slate);
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 10px;

      a {
        padding: 10px;
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`;

const Footer = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
  }, []);

  return (
    <>
      <StyledLeftSideSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name} target="_blank" rel="noopener noreferrer">
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledLeftSideSocialLinks>
      <StyledFooter>
        <StyledCredit tabIndex="-1">
          <div>2024 Grant Chiu</div>
          <div>
            <a href="https://github.com/bchiang7/v4" target="_blank" rel="noopener noreferrer">
              Check out the inspiration
            </a>
          </div>
        </StyledCredit>
      </StyledFooter>
    </>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;
