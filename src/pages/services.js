import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';
import Animated from '../components/Animated';

const ServicesWrapper = styled.div`
  color: white;
`;

const Services = () => (
  <ServicesWrapper>
    <Animated>
      <PageTitle>Services</PageTitle>
    </Animated>
    <Animated delay={150}>
      <PageDescription>I offer a wide array of services to fit your needs.</PageDescription>
    </Animated>
    <Animated delay={300}>
      <PageDetails>
        Here are a few ways I can help.
      </PageDetails>
    </Animated>
  </ServicesWrapper>
)

export default Services;
