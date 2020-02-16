import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: "white";
  color: "black";
  display: block;
  margin-top: 24px;
  max-width: 100%;
  border: none;
  line-height: 36px;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor-pointer;
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
        ToggleMode
      </Button>
    );
  }
}

ToggleMode.propTypes = {
  isDarkMode: PropTypes.bool,
  setIsDarkMode: PropTypes.func,
};

export default ToggleMode;
