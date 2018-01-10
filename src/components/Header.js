import React from 'react';
import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 33%;
  height: 100%;
  padding: 30px 40px;
`;
const HeaderTop = styled.div`
  flex-basis: 25%;
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
const Nav = styled.nav`
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
const HeaderBottom = styled.div`
  flex-basis: 25%;
`;
const Email = styled.span``;
const Link = styled(GatsbyLink)`
  text-decoration: none;
  color: inherit;
  &:hover {
    color: rgba(0,0,0,0.9);
    border-bottom: 2px solid black;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderTop>
      <Logo>Logo</Logo>
      <HeaderDetails>
        Growth Hacker<br />
        Front-end Developer<br />
        Some Third Detail About Me
      </HeaderDetails>
    </HeaderTop>
    <Nav>
      <NavItems>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/page-2">Services</Link>
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