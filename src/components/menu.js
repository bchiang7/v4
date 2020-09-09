import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navLinks } from '@config';

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${({ theme }) => theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;

  @media (${({ theme }) => theme.bp.tabletL}) {
    display: block;
  }
`;

const StyledSidebar = styled.aside`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightNavy};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${({ theme }) => theme.fonts.SFMono};
  box-shadow: -10px 0px 30px -15px ${({ theme }) => theme.colors.shadowNavy};

  @media (${({ theme }) => theme.bp.tabletS}) {
    padding: 25px;
  }
  @media (${({ theme }) => theme.bp.mobileL}) {
    width: 75vw;
  }
  @media (${({ theme }) => theme.bp.mobileS}) {
    padding: 10px;
  }

  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    text-align: center;
    color: ${({ theme }) => theme.colors.lightestSlate};
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      margin: 0 auto 20px;
      position: relative;
      font-size: ${({ theme }) => theme.fontSizes.lg};
      counter-increment: item 1;

      @media (${({ theme }) => theme.bp.tabletS}) {
        margin: 0 auto 10px;
        font-size: ${({ theme }) => theme.fontSizes.md};
      }

      @media (${({ theme }) => theme.bp.mobileS}) {
        font-size: ${({ theme }) => theme.fontSizes.smish};
      }

      &:before {
        display: block;
        content: '0' counter(item) '.';
        color: ${({ theme }) => theme.colors.green};
        font-size: ${({ theme }) => theme.fontSizes.sm};
        margin-bottom: 5px;
      }
    }

    a {
      ${({ theme }) => theme.mixins.link};
      padding: 3px 20px 20px;
      width: 100%;
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

const Menu = ({ menuOpen, toggleMenu }) => {
  const handleMenuClick = e => {
    const target = e.target;
    const isLink = target.hasAttribute('href');
    const isNotMenu = target.classList && target.classList[0].includes('StyledMenu');

    if (isLink || isNotMenu) {
      toggleMenu();
    }
  };

  return (
    <StyledMenu
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}>
      <StyledSidebar>
        <nav>
          {navLinks && (
            <ol>
              {navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url}>{name}</Link>
                </li>
              ))}
            </ol>
          )}
          <a href="/resume.pdf" className="resume-link">
            Resume
          </a>
        </nav>
      </StyledSidebar>
    </StyledMenu>
  );
};

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Menu;
