import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { settings } from '../utils/settings';

const EmailWrapper = styled.a`
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  font-size: inherit;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: ${props => props.color || colors.font.darkGrey};
  border-bottom: 2px solid transparent;
  transition: border-bottom-color .1s ease-in-out;
  margin-bottom: 1em;

  &:hover {
    border-bottom: 2px solid ${props => props.color || colors.font.darkGrey};
  }
`;

const Highlight = styled.span`
  ${colors.font.gradient}
`;

const Email = ({ preAt=settings.email.preAt, postAt=settings.email.postAt, color }) => {
  return(
    <EmailWrapper color={color} href={`mailto:${preAt}@${postAt}`}>
      <Highlight>{preAt}</Highlight>
      @{postAt}
    </EmailWrapper>
  )
}

export default Email;