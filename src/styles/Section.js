import styled from 'styled-components';

const Section = styled.section`
  margin: 0 auto;
  padding: 150px 0;
  max-width: 1000px;

  @media (${({ theme }) => theme.bp.tabletL}) {
    padding: 100px 0;
  }
`;

export default Section;
