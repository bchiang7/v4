import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconDark,
  IconDevpost,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconGmail,
  IconInstagram,
  IconLight,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconMedium,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'Dark':
      return <IconDark />;
    case 'Devpost':
      return <IconDevpost />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Gmail':
      return <IconGmail />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Light':
      return <IconLight />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'Medium':
      return <IconMedium />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
