import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { settings } from '../utils/settings';

const EmailWrapper = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: ${colors.font.darkGrey};
  border-bottom: 2px solid transparent;
  transition: border-bottom-color .1s ease-in-out;

  &:hover {
    border-bottom: 2px solid ${colors.font.darkGrey};
  }
`;

const Highlight = styled.span`
  ${colors.font.gradient}
`;

const Email = ({ preAt=settings.email.preAt, postAt=settings.email.postAt }) => {
  return(
    <EmailWrapper href={`mailto:${preAt}@${postAt}`}>
      <Highlight>{preAt}</Highlight>
      @{postAt}
    </EmailWrapper>
  )
}

export default Email;