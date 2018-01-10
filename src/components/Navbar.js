import React from 'react';
import styled from 'styled-components';
import { media } from '../utils/media';
import Link from './Link';

const Navbar = styled.header`
  display: none;

  ${ media.tablet`
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
  color: white;
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

const TopNav = ({ location, handleClick }) => (
  <Navbar>
    <NavLeft>
      <a href="#" onClick={handleClick}>Menu</a>
    </NavLeft>
    <NavCenter>
      <Link to="/">Logo</Link>
    </NavCenter>
    <NavRight>
      <a href="#">Email</a>
    </NavRight>
  </Navbar>
)

export default TopNav;