import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';
import Animated from '../components/Animated';

const WorkWrapper = styled.div`
  color: white;
`;

const Work = () => (
  <WorkWrapper>
    <Animated>
      <PageTitle>Portfolio</PageTitle>
    </Animated>
    <Animated delay={150}>
      <PageDescription>This is a description of the page below</PageDescription>
    </Animated>
    <Animated delay={300}>
      <PageDetails>
        This is where I put all my work. I do stuff.
      </PageDetails>
    </Animated>
  </WorkWrapper>
)

export default Work;
