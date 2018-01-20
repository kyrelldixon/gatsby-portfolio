import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const Wrapper = styled.div`
  margin: 2em 0;
  font-size: 2.7em;
  text-align: center;
  font-weight: bold;
  ${colors.font.gradient}
`;

const InProgress = ({pageName = ""}) => (
  <Wrapper>
    The {pageName} page is currently being developed. Stayed tuned for updates!
  </Wrapper>
)

export default InProgress;