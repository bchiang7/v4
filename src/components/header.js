import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import config from '../config';
import { throttle } from '../utils';
import { IconLogo } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Nav, Ol, A } from '../style';

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
    props.scrollDirection === 'none' ? theme.headerHeight : theme.headerScrollHeight};
  box-shadow: ${props =>
    props.scrollDirection === 'up' ? `0 2px 4px ${theme.colors.transNavy}` : 'none'};
  transform: translateY(
    ${props => (props.scrollDirection === 'down' ? `-${theme.headerScrollHeight}` : '0px')}
  );

  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 22px;`};
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
    user-select: none;
  }
`;
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;
const NavList = Ol.extend`
  display: flex;
`;
const NavListItem = styled.li`
  margin: 0 10px;
  position: relative;
  font-size: ${theme.fontSizes.smallish};
  counter-increment: item 1;

  &:before {
    content: '0' counter(item) '.';
    text-align: right;
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes.xsmall};
  }
`;
const NavLink = styled(AnchorLink)`
  ${mixins.link};
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
    headerHeight: null,
    lastScrollTop: 0,
    scrollDirection: 'none',
  };

  componentDidMount() {
    this.setState({ headerHeight: this.header.offsetHeight });

    window.addEventListener('scroll', () => throttle(this.handleScroll()));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { headerHeight, lastScrollTop } = this.state;
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > headerHeight) {
      this.setState({ scrollDirection: 'down' });
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      this.setState({ scrollDirection: 'up' });
    }

    this.setState({ lastScrollTop: fromTop });
  }

  render() {
    const { scrollDirection } = this.state;

    return (
      <HeaderContainer innerRef={x => (this.header = x)} scrollDirection={scrollDirection}>
        <Navbar>
          <Logo>
            <LogoLink to="/">
              <IconLogo />
            </LogoLink>
          </Logo>
          <NavLinks>
            <NavList>
              <NavListItem>
                <NavLink href="#about">About</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink href="#jobs">Experience</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink href="#projects">Work</NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavListItem>
            </NavList>
            <ResumeLink href={config.resume} target="_blank" rel="nofollow noopener noreferrer">
              Resume
            </ResumeLink>
          </NavLinks>
        </Navbar>
      </HeaderContainer>
    );
  }
}

export default Header;
