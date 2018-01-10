import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';

import Nav from './Nav';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 33%;
  height: 100%;
  padding: 30px 40px;

  ${ media.tablet`
    display: ${props => props.mobileNavActive ? 'flex' : 'none'};
    z-index: 2;
    background-color: white;
    width: 100%;
    height: 100vh;
  `}
`;
const HeaderTop = styled.div`
  flex-basis: 25%;

  ${ media.tablet`
    display: none;
  `}
`;
const Logo = styled.h1`
  margin-top: 0;
`;
const HeaderDetails = styled.p`
  color: rgba(0,0,0,0.45);
  font-size: .8em;
  line-height: 1.6em;
  margin-bottom: 1.4em;
`;
const HeaderBottom = styled.div`
  flex-basis: 25%;

  ${ media.tablet`
    display: none;
  `}
`;
const Email = styled.span``;

const Header = ({ location, mobileNavActive }) => (
  <HeaderWrapper mobileNavActive={mobileNavActive}>
    <HeaderTop>
      <Logo>Logo</Logo>
      <HeaderDetails>
        Growth Hacker<br />
        Front-end Developer<br />
        Some Third Detail About Me
      </HeaderDetails>
    </HeaderTop>
    <Nav mobileNavActive={mobileNavActive} location={location}/>
    <HeaderBottom>
      <HeaderDetails>
        For more info or to see if my services can help your business, you can contact me at:
      </HeaderDetails>
      <Email>hello@kyrelldixon.com</Email>
    </HeaderBottom>
  </HeaderWrapper>
)

export default Header;