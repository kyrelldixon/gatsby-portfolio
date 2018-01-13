import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import { colors } from '../utils/colors';

import Email from './Email';
import PageDetails from './Pages/PageDetails';
import PageTitle from './Pages/PageTitle';
import Link from './Link';
import Icon from './Icon';

const FooterWrapper = styled.footer`
  display: none;
  background-color: ${colors.font.white};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2em;

  ${media.handheld`
    display: flex;
  `}
`;

const Title = styled(PageTitle)`
`;

const Details = styled(PageDetails)`
  margin: 1.3em 0 1.5em;
  color: ${colors.font.darkGrey};
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  margin-top: 0.8em;
`;

const Footer = () => {
  return(
    <FooterWrapper>
      <Title>
        Get in touch
      </Title>
      <Details>
        For more information, or to have a casual chat about what I do, contact me at: 
      </Details>
      <Email color={colors.font.darkGrey}/>
      <SocialMedia>
        <Link color={colors.font.grey} to={null} href="https://www.linkedin.com" target="_blank"><Icon icon="fab fa-linkedin fa-fw"/></Link>
        <Link color={colors.font.grey} to={null} href="https://www.twitter.com" target="_blank"><Icon icon="fab fa-twitter fa-fw" /></Link>
        <Link color={colors.font.grey} to={null} href="https://www.github.com/kyrelldixon" target="_blank"><Icon icon="fab fa-github fa-fw" /></Link>
        <Link color={colors.font.grey} to={null} href="https://www.instagram.com" target="_blank"><Icon icon="fab fa-instagram fa-fw" /></Link>
      </SocialMedia>
    </FooterWrapper>
  )
}

export default Footer;