import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';
import Animated from '../components/Animated';
import Link from '../components/Link';
import { colors } from '../utils/colors';
import { media } from '../utils/media';

import Email from '../components/Email';

const ContactWrapper = styled.div`
  color: white;
  margin-bottom: -2em;
`;

const ContactDetails = styled.div`
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 10em;

  ${ media.handheld`
    width: 100%;
    justify-content: center;
    margin-top: 2em;
    text-align: center;
    min-height: auto;
  `}
`;

const ContactItem = styled.div`
  color: ${props => props.color || colors.font.white};
  margin: 1em 0;
  font-size: ${props => `${props.size}em` || '1em'};

  ${ media.handheld`
    margin: 0 0 0.8em;
    width: 100%;
  `}
`;

const Name = styled.h3`
  letter-spacing: 0.2em;
  font-size: 1.5em;

  ${ media.handheld`
    margin-bottom: 0.5em;
  `}
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${ media.handheld`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    display: none;
  `}
`;

const SocialMediaItem = styled.a`
  text-decoration: none;
  margin-bottom: .6em;
  text-transform: uppercase;
  font-size: .89em;
`;

const Contact = () => (
  <ContactWrapper>
    <Animated>
      <PageTitle>Contact</PageTitle>
    </Animated>
    <Animated delay={150}>
      <PageDescription>Let's get in touch</PageDescription>
    </Animated>
    <Animated delay={300}>
      <PageDetails>
        I'm easily available through email, but occasionally you can find me on social media.
      </PageDetails>
    </Animated>
    <Animated delay={450}>
      <ContactDetails>
        <ContactItem><Name>Kyrell Dixon</Name></ContactItem>
        <ContactItem>
          <Email color={colors.font.white} />
        </ContactItem>
        <ContactItem>
          <SocialMedia>
            <SocialMediaItem><Link>LinkedIn</Link></SocialMediaItem>
            <SocialMediaItem><Link>Twitter</Link></SocialMediaItem>
            <SocialMediaItem><Link>Github</Link></SocialMediaItem>
            <SocialMediaItem><Link>Instagram</Link></SocialMediaItem>
          </SocialMedia>
        </ContactItem>
      </ContactDetails>
    </Animated>
  </ContactWrapper>
)

export default Contact;
