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
`;
const NavItem = styled.li`
  list-style: none;
  margin: 20px 0;
  font-size: 1.4em;
  text-transform: uppercase;
  color: inherit;
`;

const Nav = ({ location, mobileNavActive }) => (
  <NavWrapper mobileNavActive={mobileNavActive}>
    <NavItems>
      <NavItem>
        <Link active={location === withPrefix("/")} to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link active={location === withPrefix("/services")} to="/services">Services</Link>
      </NavItem>
      <NavItem>
        <Link active={location === withPrefix("/work")} to="/work">Portfolio</Link>
      </NavItem>
      <NavItem>
        <Link active={location === withPrefix("/blog")} to="/blog">Blog</Link>
      </NavItem>
      <NavItem>
        <Link active={location === withPrefix("/contact")} to="/contact">Contact</Link>
      </NavItem>
    </NavItems>
  </NavWrapper>
)

export default Nav;