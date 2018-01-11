import styled from 'styled-components';
import { media } from '../../utils/media';
import { colors } from '../../utils/colors';

const PageDetails = styled.p`
  font-size: 1.6em;
  color: ${colors.font.lightGrey};

  ${ media.handheld`
    text-align: center;
    font-size: 1.1em;
  `}
  ${ media.tablet`
    font-size: 1.5em;
  `}
`;

export default PageDetails;