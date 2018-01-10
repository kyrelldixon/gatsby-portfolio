import React from 'react';
import styled from 'styled-components';
import UnstyledLink from 'gatsby-link';

export const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.active ? 'rgba(0,0,0,0.9)' : 'inherit'};
  border-bottom: ${props => props.active ? '2px solid black' : 'none'};
  transition: border-color .1s,color .1s;
  cursor: pointer;
  
  &:hover {
    color: rgba(0,0,0,0.9);
    border-bottom: 2px solid black;
  }
`

const Link = ({ children, className, unstyled, ...rest }) => {
  let Child = StyledLink;
  if (unstyled) {
    Child = 'a';
  }

  return (
    <UnstyledLink {...rest}>
      <Child href={rest.href} className={className}>
        {children}
      </Child>
    </UnstyledLink>
  )
}

export default Link