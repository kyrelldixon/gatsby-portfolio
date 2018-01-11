import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import { colors } from '../utils/colors';

import Email from './Email';

const FooterWrapper = styled.footer`
  display: none;
  background-color: ${colors.font.white};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${media.handheld`
    display: flex;
  `}
`;

const Details = styled.p``;
const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
`;
const SocialMediaIcon = styled.p``;

const Footer = () => {
  return(
    <FooterWrapper>
      <Details>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo vel amet debitis temporibus, et quam veniam numquam nobis suscipit.
      </Details>
      <Email />
      <SocialMedia>
        <SocialMediaIcon>Facebook</SocialMediaIcon>
        <SocialMediaIcon>Github</SocialMediaIcon>
        <SocialMediaIcon>Twitter</SocialMediaIcon>
        <SocialMediaIcon>Instagram</SocialMediaIcon>
      </SocialMedia>
    </FooterWrapper>
  )
}

export default Footer;