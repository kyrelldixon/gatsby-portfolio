import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';
import Animated from '../components/Animated';
import Link from '../components/Link';
import { colors } from '../utils/colors';
import { media } from '../utils/media';

const HomeWrapper = styled.div`
  color: white;
`;

const ButtonGroup = styled.div`
  margin: 3.75em auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

  ${ media.handheld`
    margin: 3.6em auto 0;
  `}
`;
const ButtonLink = styled(Link)`
  padding: 0.5em;
  margin-right: 2em;
  background: transparent;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9em;
  letter-spacing: 0.1em;
  ${colors.border.gradient};
  ${colors.font.gradient};

  &:hover {
    -webkit-text-fill-color: inherit;
    -webkit-background-clip: inherit;
  }

  ${media.handheld`
    margin: 0 auto;
    font-size: 0.8em;
  `}
`;

const Home = () => (
  <HomeWrapper>
    <Animated>
      <PageTitle>Hi, I'm Kyrell</PageTitle>
    </Animated>
    <Animated delay={150}>
      <PageDescription>I help businesses and entreprenuers develop and execute vision.</PageDescription>
    </Animated>
    <Animated delay={300}>
      <PageDetails>
        If you're ready to get to work, let's get in touch. Otherwise, check out some of my work.
      </PageDetails>
    </Animated>
    <Animated delay={450}>
      <ButtonGroup>
        <ButtonLink color={colors.font.white} to={"/work"}>See My Work</ButtonLink>
        <ButtonLink color={colors.font.white} to={null} href="mailto:hello@kyrelldixon.com">Get in Touch</ButtonLink>
      </ButtonGroup>
    </Animated>
  </HomeWrapper>
)

export default Home;
