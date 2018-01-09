import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

const HeaderWrapper = styled.header``;
const HeaderTop = styled.div``;
const Logo = styled.h1``;
const HeaderDetails = styled.p``;
const Nav = styled.nav``;
const NavItems = styled.ul``;
const NavItem = styled.li``;
const HeaderBottom = styled.div``;
const Email = styled.span``;
const Link = styled(GatsbyLink)``;

const Header = () => (
  <HeaderWrapper>
    <HeaderTop>
      <Logo>Logo</Logo>
      <HeaderDetails>
        Front-end Developer<br/>
        Growth Hacker
      </HeaderDetails>
    </HeaderTop>
    <Nav>
      <NavItems>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/">Services</Link>
        </NavItem>
        <NavItem>
          <Link to="/">Portfolio</Link>
        </NavItem>
        <NavItem>
          <Link to="/">Blog</Link>
        </NavItem>
        <NavItem>
          <Link to="/">Contact</Link>
        </NavItem>
      </NavItems>
    </Nav>
    <HeaderBottom>
      <HeaderDetails>
        For more info or to see if my services can help your business, you can contact me at:
      </HeaderDetails>
      <Email>hello@kyrelldixon.com</Email>
    </HeaderBottom>
  </HeaderWrapper>
)

export default Header;