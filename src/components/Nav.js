import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import { withPrefix } from 'gatsby-link';
import { media } from '../utils/media';

const NavWrapper = styled.nav`
  flex-basis: 50%;

  ${ media.tablet`
    width: 100%;
    flex-basis: auto;
    text-align: center;
    font-size: 1.7em;
  `}
  color: rgba(0,0,0,0.65);
`;
const NavItems = styled.ul`
  margin: 0;
`;
const NavItem = styled.li`
  list-style: none;
  margin: 20px 0;
  font-size: 1.2em;
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