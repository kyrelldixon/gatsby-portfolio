import React from 'react';
import styled, { css } from 'styled-components';
import gatsbyLink from 'gatsby-link';
import { colors } from '../utils/colors';

const BaseLink = css`
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
`;

const GatsbyLink = styled(gatsbyLink)`
  ${BaseLink};
  color: ${colors.font.darkGrey};
  ${props => props.active ? colors.font.gradient : ''};
  /* ${props => props.active ? colors.border.gradient : ''}; */


  &:hover {
    ${colors.font.gradient}
    /* ${colors.border.gradient} */
  }
`;

const NormalLink = styled.a.attrs({
  to: null,
  active: false
})`
  ${BaseLink}
`;

const Link = ({ children, to, href, active, handleClick, ...rest }) => 
  (to === null) ? (
    <NormalLink onClick={handleClick} href={href}>
      {children}
    </NormalLink>
  ) : (
      <GatsbyLink active={active} to={to}>
        {children}
      </GatsbyLink>
    );


export default Link;