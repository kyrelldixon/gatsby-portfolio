import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';

const ServicesWrapper = styled.div`
  color: white;
`;

const Services = () => (
  <ServicesWrapper>
    <PageTitle>Services</PageTitle>
    <PageDescription>This is a description of the page below</PageDescription>
    <PageDetails>
      This is where I explain to you what I can do to help you. That's why you're here.
    </PageDetails>
  </ServicesWrapper>
)

export default Services;
