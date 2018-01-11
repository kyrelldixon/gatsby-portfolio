import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';

const WorkWrapper = styled.div`
  color: white;
`;

const Work = () => (
  <WorkWrapper>
    <PageTitle>Portfolio</PageTitle>
    <PageDescription>This is a description of the page below</PageDescription>
    <PageDetails>
      This is where I put all my work. I do stuff.
    </PageDetails>
  </WorkWrapper>
)

export default Work;
