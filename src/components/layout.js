import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../config';

import Head from '../components/head';
import Loader from '../components/loader';
import Header from '../components/header';
import Social from '../components/social';
import Email from '../components/email';
import Footer from '../components/footer';

class Layout extends Component {
  state = {
    isLoading: true,
  };

  finishLoading = () => this.setState({ isLoading: false });

  render() {
    const { children } = this.props;
    const { isLoading } = this.state;
    const navLinks = config.navLinks;

    // console.log(this.props);

    return (
      <div id="root">
        <Head />

        {isLoading ? (
          <Loader finishLoading={this.finishLoading} />
        ) : (
          <div className="content">
            <Header location={location} navLinks={navLinks} />
            <Social />
            <Email />
            {children}
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  // location: PropTypes.object.isRequired,
};

export default Layout;
