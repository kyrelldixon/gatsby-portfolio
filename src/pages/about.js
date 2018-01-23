import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';
import Animated from '../components/Animated';
import InProgress from '../components/InProgress';

const AboutWrapper = styled.div`
  color: white;
`;

const About = () => (
  <AboutWrapper>
    {/* <Animated>
      <PageTitle>About</PageTitle>
    </Animated>
    <Animated delay={150}>
      <PageDescription>I offer a wide array of About to fit your needs.</PageDescription>
    </Animated>
    <Animated delay={300}>
      <PageDetails>
        Here are a few ways I can help.
      </PageDetails>
    </Animated> */}
    <Animated delay={150}>
      <InProgress pageName="About" />
    </Animated>
  </AboutWrapper>
)

export default About;
