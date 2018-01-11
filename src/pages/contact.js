import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';

const ContactWrapper = styled.div`
  color: white;
`;

const Contact = () => (
  <ContactWrapper>
    <PageTitle>Contact</PageTitle>
    <PageDescription>This is a description of the page below</PageDescription>
    <PageDetails>
      If you're here, then you like what you see. Call me.
    </PageDetails>
  </ContactWrapper>
)

export default Contact;
