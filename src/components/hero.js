import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import config from '../config';

import styled from 'styled-components';
import { theme, mixins, media, Section, A } from '../style';

const HeroContainer = Section.extend`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px;`};
`;
const Hi = styled.h1`
  color: ${theme.colors.green};
  margin: 0 0 20px 3px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.SFMono};
  font-weight: normal;

  ${media.desktop`font-size: ${theme.fontSizes.small};`};
  ${media.tablet`font-size: ${theme.fontSizes.smallish};`};
`;
const Name = styled.h1`
  font-size: 80px;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Subtitle = styled.h2`
  font-size: 80px;
  margin: 0 0 20px;
  color: ${theme.colors.slate};

  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Blurb = styled.div`
  width: 50%;
  max-width: 480px;

  a {
    ${mixins.inlineLink};
  }
`;
const EmailButton = styled.div``;
const EmailLink = A.extend`
  ${mixins.bigButton};
  font-size: ${theme.fontSizes.smallish};
  margin-top: 50px;
`;

class Hero extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  state = {
    show: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ show: true }), 100);
  }

  render() {
    const { data } = this.props;
    const { show } = this.state;
    const { node } = data[0];

    const one = () => <Hi style={{ transitionDelay: '100ms' }}>{node.frontmatter.title}</Hi>;
    const two = () => <Name style={{ transitionDelay: '200ms' }}>{node.frontmatter.name}.</Name>;
    const three = () => (
      <Subtitle style={{ transitionDelay: '300ms' }}>{node.frontmatter.subtitle}</Subtitle>
    );
    const four = () => (
      <Blurb style={{ transitionDelay: '400ms' }} dangerouslySetInnerHTML={{ __html: node.html }} />
    );
    const five = () => (
      <EmailButton style={{ transitionDelay: '500ms' }}>
        <EmailLink href={`mailto:${config.email}`}>Get In Touch</EmailLink>
      </EmailButton>
    );

    const items = [one, two, three, four, five];

    return (
      <HeroContainer>
        <TransitionGroup className="hero">
          {show &&
            items.map((item, i) => {
              return (
                <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                  {item}
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </HeroContainer>
    );
  }
}

export default Hero;
