import styled from 'styled-components';
import { media } from '../../utils/media';
import { colors } from '../../utils/colors';

const PageDescription = styled.h1`
  font-size: 4em;
  letter-spacing: -.02em;
  margin: 1.1em 0 0.8em;
  color: ${colors.font.white};

  ${ media.handheld`
    text-align: center;
    font-size: 3em;
  `}
  ${ media.tablet`
    font-size: 2.9em;
  `}
`;

export default PageDescription;