import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import Link from './Link';

const NavbarWrapper = styled.header`
  display: none;

  ${ media.handheld`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 50px;
    background-color: rgba(0,0,0,);
    width: 100%;
  `}

  z-index: 3;
  height: 50px;
  color: ${props => props.mobileNavActive ? 'black' : 'white'};
  padding: 0 20px;
  overflow-y: hidden;
  overflow-x: hidden;
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
  color: white;
  letter-spacing: -0.01em;
  word-spacing: -0.1em;
  font-weight: bold;
`;

const MenuToggle = styled.button`
  color: ${props => props.color || 'inherit'};
  border: none;
  background: none;
  font-size: inherit;
`;

const Navbar = ({ location, handleClick, mobileNavActive }) => (
  <NavbarWrapper mobileNavActive={mobileNavActive}>
    <NavLeft>
      <MenuToggle onClick={handleClick}>Menu</MenuToggle>
    </NavLeft>
    <NavCenter>
      <Logo><Link color="inherit" to="/">K. Dixon</Link></Logo>
    </NavCenter>
    <NavRight>
      <Link to={null} href="mailto:hello@kyrelldixon.com">Email</Link>
    </NavRight>
  </NavbarWrapper>
)

export default Navbar;