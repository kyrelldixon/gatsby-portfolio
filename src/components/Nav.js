import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import { withPrefix } from 'gatsby-link';

const NavWrapper = styled.nav`
  flex-basis: 50%;
`;
const NavItems = styled.ul`
  margin: 0;
`;
const NavItem = styled.li`
  list-style: none;
  margin: 20px 0;
  font-size: 1.2em;
  text-transform: uppercase;
  color: rgba(0,0,0,0.65);
  transition: border-color .1s,color .1s;
`;

const Nav = ({ location }) => (
  <NavWrapper>
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