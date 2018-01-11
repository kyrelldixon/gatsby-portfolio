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
      <PageDescription>This is a description of the page below</PageDescription>
    </Animated>
    <Animated delay={300}>
      <PageDetails>
        This is where I explain to you what I can do to help you. That's why you're here.
      </PageDetails>
    </Animated>
  </ServicesWrapper>
)

export default Services;
