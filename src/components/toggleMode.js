import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mixins, media } from '@styles';
import { FiSun, FiMoon } from 'react-icons/fi';

const Button = styled.button`
  ${mixins.smallButton};
  margin-left: 10px;
  ${media.tablet`margin: 10% 0 auto;`};
`;

class ToggleMode extends Component {
  render() {
    const { isDarkMode, setIsDarkMode } = this.props;

    return (
      <Button
        onClick={() => {
          setIsDarkMode(!isDarkMode);
          localStorage.setItem('isDarkMode', !isDarkMode);
        }}>
        {isDarkMode ? <FiMoon /> : <FiSun />}
      </Button>
    );
  }
}

ToggleMode.propTypes = {
  isDarkMode: PropTypes.bool,
  setIsDarkMode: PropTypes.func,
};

export default ToggleMode;
