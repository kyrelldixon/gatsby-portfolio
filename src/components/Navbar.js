import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import { colors } from '../utils/colors';
import Link from './Link';

const NavbarWrapper = styled.header`
  display: none;

  ${ media.handheld`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 50px;
    background-color: ${props => props.atTop ? 'transparent' : colors.font.white};;
    width: 100%;
  `}

  z-index: 3;
  height: 50px;
  color: ${props => (props.mobileNavActive || !props.atTop) ? colors.font.darkGrey : 'white'};
  font-weight: bold;
  padding: 0 20px;
  overflow-y: hidden;
  overflow-x: hidden;
  text-transform: uppercase;
  font-size: 0.9em;
  box-shadow: ${props => props.atTop ? 'none' : '0 0 10px 0'};
  transition: background-color .2s ease-in-out;
`;

const NavRight = styled.div`
  text-align: right;
  flex-basis: 25%;
`;
const NavLeft = styled.div`
  text-align: left;
  flex-basis: 25%;
`;
const NavCenter = styled.div`
  text-align: center;
  flex-basis: 50%;
`;

const Logo = styled.div`
  font-size: inherit;
  color: inherit;
  letter-spacing: -0.01em;
  word-spacing: -0.1em;
  font-weight: bold;
  text-transform: capitalize;
`;

const MenuToggle = styled.button`
  color: ${props => props.color || 'inherit'};
  border: none;
  background: none;
  font-size: inherit;
`;

const MenuText = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;

const Navbar = ({ location, handleClick, mobileNavActive, atTop }) => {
  console.log(`At top = ${atTop}`);
  
  return (
    <NavbarWrapper atTop={atTop} mobileNavActive={mobileNavActive}>
      <NavLeft>
        <MenuToggle onClick={handleClick}>
          <MenuText mobileNavActive={mobileNavActive}>Menu</MenuText>
        </MenuToggle>
      </NavLeft>
      <NavCenter>
        <Logo><Link color="inherit" to="/">K. Dixon</Link></Logo>
      </NavCenter>
      <NavRight>
        <Link to={null} href="mailto:hello@kyrelldixon.com">Email</Link>
      </NavRight>
    </NavbarWrapper>
  )
}

export default Navbar;