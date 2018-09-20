import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../config';

import styled from 'styled-components';
import { theme, mixins, media, Section, H3, A, P } from '../style';

import ScrollReveal from 'scrollreveal';

const ContactContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const Header = styled(H3)`
  display: block;
  color: ${theme.colors.green};
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.SFMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: ${theme.fontSizes.small};`};
  &:before {
    bottom: 0;
    font-size: ${theme.fontSizes.small};
    ${media.desktop`font-size: ${theme.fontSizes.smallish};`};
  }
  &:after {
    display: none;
  }
`;
const Title = styled.h4`
  margin: 0 0 20px;
  font-size: 60px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;
const EmailLink = styled(A)`
  ${mixins.bigButton};
  margin-top: 50px;
`;

class Contact extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  componentDidMount() {
    ScrollReveal().reveal(this.contact, config.srConfig());
  }

  render() {
    const { data } = this.props;
    const { node } = data[0];

    return (
      <ContactContainer id="contact" innerRef={el => (this.contact = el)}>
        <Header>What's Next?</Header>
        <Title>{node.frontmatter.title}</Title>
        <P dangerouslySetInnerHTML={{ __html: node.html }} />
        <EmailLink
          href={`mailto:${config.email}`}
          target="_blank"
          rel="nofollow noopener noreferrer">
          Say Hello
        </EmailLink>
      </ContactContainer>
    );
  }
}

export default Contact;
