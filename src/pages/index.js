import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';
import Animated from '../components/Animated';

const HomeWrapper = styled.div`
  color: white;
`;

const Home = () => (
  <HomeWrapper>
    <Animated>
      <PageTitle>Home</PageTitle>
    </Animated>
    <Animated delay={150}>
      <PageDescription>This is a description of the page below</PageDescription>
    </Animated>
    <Animated delay={300}>
      <PageDetails>
        This is the base of operations, the homepage.
        This is where I get your attention. BANG! Got it? Good.
      </PageDetails>
    </Animated>
  </HomeWrapper>
)

export default Home;
