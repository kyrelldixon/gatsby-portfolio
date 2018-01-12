import React from 'react';
import styled, { css } from 'styled-components';
import gatsbyLink from 'gatsby-link';
import { colors } from '../utils/colors';

const BaseLink = css`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.color || 'inherit' };
  z-index: 3;
`;

const GatsbyLink = styled(gatsbyLink)`
  ${BaseLink};
  
  ${props => props.active ? colors.font.gradient : ''};

  &:hover {
    ${colors.font.gradient}
  }
`;

const NormalLink = styled.a`
  ${BaseLink}
`;

const Link = ({ children, to, href, active, handleClick, ...rest }) => 
  (to === null) ? (
    <NormalLink onClick={handleClick} href={href} {...rest}>
      {children}
    </NormalLink>
  ) : (
      <GatsbyLink active={active} to={to} {...rest}>
        {children}
      </GatsbyLink>
    );

export default Link;