import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { theme, mixins, Section, H3, A, P } from '../style';

const ContactContainer = Section.extend`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 100px;
`;
const Header = H3.extend`
  color: ${theme.colors.green};
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fonts.SFMono};
  font-weight: 400;
  margin-bottom: 20px;
  justify-content: center;

  &:before {
    font-size: ${theme.fontSizes.small};
    bottom: 0;
  }

  &:after {
    display: none;
  }
`;
const Title = styled.h4`
  font-size: 60px;
  margin: 0 0 20px;
`;
const EmailLink = A.extend`
  ${mixins.bigButton};
  margin-top: 50px;
`;

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
  };

  render() {
    const { contact, email } = this.props;

    return (
      <ContactContainer>
        <Header>What's Next?</Header>
        <Title>{contact[0].node.frontmatter.title}</Title>
        <P dangerouslySetInnerHTML={{ __html: contact[0].node.html }} />
        <EmailLink href={`mailto:${email}`} target="_blank" rel="noopener">
          Send An Email
        </EmailLink>
      </ContactContainer>
    );
  }
}

export default Contact;
