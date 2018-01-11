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
`;

const Navbar = ({ location, handleClick, mobileNavActive }) => (
  <NavbarWrapper mobileNavActive={mobileNavActive}>
    <NavLeft>
      <Link to={null} href="#" handleClick={handleClick}>Menu</Link>
    </NavLeft>
    <NavCenter>
      <Logo><Link color="inherit" to="/">Logo</Link></Logo>
    </NavCenter>
    <NavRight>
      <Link to={null} href="#">Email</Link>
    </NavRight>
  </NavbarWrapper>
)

export default Navbar;