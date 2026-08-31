import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Layout } from '@components';

const StyledMiscPage = styled.main`
  max-width: 800px;

  header {
    margin-bottom: 50px;
    text-align: center;
  }

  h1 {
    margin-bottom: 10px;
  }

  .subtitle {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
  }

  h2 {
    margin: 50px 0 20px;
    color: var(--lightest-slate);
    font-size: var(--fz-heading);
  }

  p {
    color: var(--slate);
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }

  blockquote {
    margin: 30px 0;
    padding-left: 20px;
    border-left: 2px solid var(--green);
    color: var(--light-slate);
    font-style: italic;

    p {
      margin: 6px 0;
      color: inherit;
    }
  }

  ul.likes {
    ${({ theme }) => theme.mixins.fancyList};
  }
`;

const MiscPage = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Miscellaneous" />

    <StyledMiscPage>
      <header>
        <h1 className="big-heading">Miscellaneous</h1>
        <p className="subtitle">The parts that aren’t on the résumé</p>
      </header>

      <p>
        I was born in mainland China and moved to Hong Kong SAR with my family. I went to high
        school at <a href="http://www.ghs.edu.hk/sec/">Good Hope School</a>, a girls’ school in
        Kowloon, Hong Kong. After that came UCLA, and then Stanford.
      </p>

      <blockquote>
        <p>“Once a Good Hoper, forever a Good Hoper”</p>
        <p>“Forever a Bruin!!!!!”</p>
      </blockquote>

      <h2>Things I like</h2>

      <ul className="likes">
        <li>
          I’m a huge fan of competitive swimming — I’ll watch the World Aquatics Championships
          whenever I can, and I was there in person in Budapest in 2017. (I’m not especially good at
          swimming myself. This is unrelated.)
        </li>
        <li>Lakers and Manchester City.</li>
        <li>Travel, backpacking and trekking.</li>
        <li>Cooking.</li>
        <li>Photography, very much still at the amateur stage.</li>
        <li>Playing the xiao — the Chinese vertical end-blown flute.</li>
      </ul>
    </StyledMiscPage>
  </Layout>
);

MiscPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MiscPage;
