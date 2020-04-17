import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGitHub,
  IconLinkedin,
  IconCodepen,
  IconInstagram,
  IconLogo,
  IconTwitter,
  IconScholar,
  IconOrcid,
  IconFolder,
  IconPaper,
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'GitHub':
      return <IconGitHub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Logo':
      return <IconLogo />;
    case 'Folder':
      return <IconFolder />;
    case 'Paper':
      return <IconPaper />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Scholar':
      return <IconScholar />;
    case 'ORCID':
      return <IconOrcid />;
    default:
      return <IconGitHub />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
