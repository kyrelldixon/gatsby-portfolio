import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../utils/media';
import { sizes } from '../utils/sizes';
import { colors } from '../utils/colors';

import Nav from './Nav';
import Email from './Email';

const fadeIn = keyframes`
  from {
    opacity: 0;
    background-color: black;
  }
  to {
    opacity: 1;
    background-color: white;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    background-color: white;
  }
  to {
    opacity: 0;
    background-color: black;
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${sizes.sidebarWidth.desktop};
  height: 100%;
  padding: 30px 40px;
  overflow-y: scroll;

  ${ media.tablet`
    width: ${sizes.sidebarWidth.tablet}
  `}
  ${ media.handheld`
    display: ${props => props.mobileNavActive ? 'flex' : 'none'};
    z-index: 2;
    background-color: white;
    width: 100%;
    min-height: 100vh;
    animation: 400ms ${props => props.mobileNavActive ? fadeIn : fadeOut} ease-in;
  `}
`;
const HeaderTop = styled.div`
  flex-basis: 25%;

  ${ media.handheld`
    display: none;
  `}
`;
const Logo = styled.h1`
  margin-top: 0;
  margin-bottom: 0.9em;
  font-size: 2.2em;
  letter-spacing: -0.01em;
  word-spacing: -0.1em;
  font-weight: bold;
  color: ${colors.font.black};
`;
const HeaderDetails = styled.ul`
  color: ${colors.font.xlightGrey};
  font-size: .8em;
  line-height: 1.6em;
  margin-bottom: 1.4em;
  list-style: none;
`;

const HeaderDetail = styled.li`

`
const HeaderBottom = styled.div`
  flex-basis: 25%;

  ${ media.handheld`
    display: none;
  `}
`;

const EmailWrapper = styled.div`
  font-size: .8em;
  color: ${colors.font.darkGrey};
`;

const Header = ({ location, mobileNavActive, handleClick }) => (
  <HeaderWrapper mobileNavActive={mobileNavActive}>
    <HeaderTop>
      <Logo>K. Dixon</Logo>
      <HeaderDetails>
        <HeaderDetail>Growth Hacker</HeaderDetail>
        <HeaderDetail>Front-end Developer</HeaderDetail>
        <HeaderDetail>Marketing and Brand Specialist</HeaderDetail>
      </HeaderDetails>
    </HeaderTop>
    <Nav handleClick={handleClick} mobileNavActive={mobileNavActive} location={location}/>
    <HeaderBottom>
      <HeaderDetails>
        <HeaderDetail>For more info or to see if my services can help your business, you can contact me at:</HeaderDetail>
      </HeaderDetails>
      <EmailWrapper>
        <Email color={"inherit"}/>
      </EmailWrapper>
    </HeaderBottom>
  </HeaderWrapper>
)

export default Header;