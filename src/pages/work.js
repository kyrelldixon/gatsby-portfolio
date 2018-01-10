import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';

const WorkWrapper = styled.div`
  color: white;
`;

const Work = () => (
  <WorkWrapper>
    <PageTitle>Work</PageTitle>
    <PageDescription>This is a description of the page below</PageDescription>
    <PageDetails>
      This is the base of operations, the homepage.
      This is where I get your attention. BANG! Got it? Good.
    </PageDetails>
  </WorkWrapper>
)

export default Work;
