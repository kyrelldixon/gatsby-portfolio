import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';
import Animated from '../components/Animated';
import InProgress from '../components/InProgress';

const WorkWrapper = styled.div`
  color: white;
`;

const Work = () => (
  <WorkWrapper>
    {/* <Animated>
      <PageTitle>Portfolio</PageTitle>
    </Animated>
    <Animated delay={150}>
      <PageDescription>Seeing is believing.</PageDescription>
    </Animated>
    <Animated delay={300}>
      <PageDetails>
        Here is a list of the projects I've curated over the years. 
      </PageDetails>
    </Animated> */}
    <Animated delay={150}>
      <InProgress pageName="Portfolio" />
    </Animated>
  </WorkWrapper>
)

export default Work;
