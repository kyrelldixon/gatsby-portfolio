import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';
import Animated from '../components/Animated';

const ContactWrapper = styled.div`
  color: white;
`;

const Contact = () => (
  <ContactWrapper>
    <Animated>
      <PageTitle>Contact</PageTitle>
    </Animated>
    <Animated delay={150}>
      <PageDescription>This is a description of the page below</PageDescription>
    </Animated>
    <Animated delay={300}>
      <PageDetails>
        If you're here, then you like what you see. Call me.
      </PageDetails>
    </Animated>
  </ContactWrapper>
)

export default Contact;
