import React, { Component } from 'react';

import { IconLogo } from './icons';

import styled from 'styled-components';
import { theme, mixins, Nav, Ol, A } from '../style';

const HeaderContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${theme.colors.navy};
  transition: ${theme.transition};
  z-index: 10;
  width: 100%;
  height: ${props =>
    props.scrollDirection === 'none' ? theme.navbarHeight : theme.navbarScrollHeight};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 2px 4px ${theme.colors.transNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.navbarScrollHeight}` : '0px')}
  );
`;
const Navbar = Nav.extend`
  ${mixins.flexBetween};
  font-family: ${theme.fonts.SFMono};
  width: 100%;
  color: ${theme.colors.white};
  counter-reset: item 0;
`;
const Logo = styled.div`
  ${mixins.flexCenter};
`;
const LogoLink = A.extend`
  color: ${theme.colors.green};
  width: 40px;
  height: 40px;

  &:hover {
    svg {
      fill: ${theme.colors.transGreen};
    }
  }

  svg {
    fill: none;
    transition: ${theme.transition};
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;
const NavList = Ol.extend`
  display: flex;
`;
const NavListItem = styled.li`
  margin: 10px;
  position: relative;
  font-size: 13px;
  counter-increment: item 1;

  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.xsmall};
  }
`;
const NavLink = A.extend`
  padding: 10px;
`;
const ResumeLink = A.extend`
  ${mixins.smallButton};
  padding: 10px;
  margin-left: 10px;
  padding: 10px 15px 10px;
  font-size: ${theme.fontSizes.smallish};
`;

const DELTA = 5;

class Header extends Component {
  state = {
    didScroll: false,
    lastScrollTop: 0,
    scrollDirection: 'none',
  };

  componentDidMount() {
    window.addEventListener('scroll', () => this.setState({ didScroll: true }));

    // throttle scroll event
    setInterval(() => {
      if (this.state.didScroll) {
        this.handleScroll();
        this.setState({ didScroll: false });
      }
    }, 200);
  }

  componentWillUnmount() {
    // TODO: need to clear the setInterval
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { lastScrollTop } = this.state;
    const fromTop = window.scrollY;
    const navbarHeight = this.header.offsetHeight;

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA) {
      return;
    }

    if (fromTop === 0) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > navbarHeight) {
      this.setState({ scrollDirection: 'down' });
    } else {
      if (fromTop + window.innerHeight < document.body.scrollHeight) {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  }

  render() {
    const { scrollDirection } = this.state;

    return (
      <HeaderContainer innerRef={x => (this.header = x)} scrollDirection={scrollDirection}>
        <Navbar>
          <Logo>
            <LogoLink to="/" target="_blank" rel="noopener">
              <IconLogo />
            </LogoLink>
          </Logo>
          <NavLinks>
            <NavList>
              <NavListItem>
                <NavLink to="#">About</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="#">Experience</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="#">Work</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="#">Contact</NavLink>
              </NavListItem>
            </NavList>
            <ResumeLink to="#" target="_blank" rel="noopener">
              Resume
            </ResumeLink>
          </NavLinks>
        </Navbar>
      </HeaderContainer>
    );
  }
}

export default Header;
