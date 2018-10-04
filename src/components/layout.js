import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { nav } from '../config';

import Head from '../components/head';
import Loader from '../components/loader';
import Header from '../components/header';
import Social from '../components/social';
import Email from '../components/email';
import Footer from '../components/footer';

import styled from 'styled-components';
import { theme, A } from '../styles';

const SkipToContent = styled(A)`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:hover {
    background-color: ${theme.colors.darkGrey};
  }
  &:focus,
  &:active {
    outline: 0;
    color: ${theme.colors.green};
    background-color: ${theme.colors.lightNavy};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${theme.fontSizes.small};
    font-family: ${theme.fonts.SFMono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    overflow: auto;
    z-index: 99;
  }
`;

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
  };

  state = {
    isLoading: true,
  };

  finishLoading = () => this.setState({ isLoading: false });

  render() {
    const { children, location } = this.props;
    const { isLoading } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }
          }
        `}
        render={data => (
          <div id="root">
            <Head metaData={data.site.siteMetadata} />

            <SkipToContent href="#content">Skip To Content</SkipToContent>

            {isLoading ? (
              <Loader finishLoading={this.finishLoading} />
            ) : (
              <div className="container">
                <Header location={location} navLinks={nav} />
                <Social />
                <Email />
                {children}
                <Footer />
              </div>
            )}
          </div>
        )}
      />
    );
  }
}

export default Layout;
