import React from 'react';
import styled, { keyframes } from 'styled-components';
import { withPrefix } from 'gatsby-link';
import { media } from '../utils/media';
import Link from './Link';
import Animated from './Animated';

const fader = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 0.5rem, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const NavWrapper = styled.nav`
  display: block;
  flex-basis: 50%;

  ${ media.handheld`
    width: 100%;
    flex-basis: auto;
    text-align: center;
    font-size: 1.7em;
    animation: ${fader} 400ms ease-in;
  `}

  color: rgba(0,0,0,0.65);
`;
const NavItems = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  ${ media.handheld`
    align-items: center;
  `}
`;
const NavItem = styled.li`
  list-style: none;
  margin: 20px 0;
  font-size: 1.4em;
  text-transform: uppercase;
  color: inherit;

  ${ media.handheld`
    margin: 0.6em 0;
    font-size: 1.05em;
  `}
`;

const Nav = ({ location, mobileNavActive, handleClick }) => (
  <NavWrapper mobileNavActive={mobileNavActive} onClick={handleClick}>
    <NavItems onClick={handleClick}>
      <NavItem>
        <Link
          active={location === withPrefix("/")}
          to="/"
          onClick={handleClick}>Home</Link>
      </NavItem>
      <NavItem>
        <Link
          active={location === withPrefix("/services")}
          to="/services"
          onClick={handleClick}>Services</Link>
      </NavItem>
      <NavItem>
        <Link
          active={location === withPrefix("/work")}
          to="/work"
          onClick={handleClick}>Portfolio</Link>
      </NavItem>
      <NavItem>
        <Link
          active={location === withPrefix("/blog")}
          to="/blog"
          onClick={handleClick}>Blog</Link>
      </NavItem>
      <NavItem>
        <Link
          active={location === withPrefix("/contact")}
          to="/contact"
          onClick={handleClick}>Contact</Link>
      </NavItem>
    </NavItems>
  </NavWrapper>
)

export default Nav;