import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import { colors } from '../utils/colors';

import Email from './Email';
import PageDetails from './Pages/PageDetails';
import PageTitle from './Pages/PageTitle';

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
`;

const SocialMediaIcon = styled.i.attrs({
  className: props => props.icon || ""
})`

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
      <Email />
      <SocialMedia>
        <SocialMediaIcon icon="fab fa-facebook fa-fw"/>
        <SocialMediaIcon icon="fab fa-twitter fa-fw" />
        <SocialMediaIcon icon="fab fa-github fa-fw" />
        <SocialMediaIcon icon="fab fa-instagram fa-fw" />
      </SocialMedia>
    </FooterWrapper>
  )
}

export default Footer;