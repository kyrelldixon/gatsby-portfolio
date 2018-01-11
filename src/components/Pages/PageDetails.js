import styled from 'styled-components';
import { media } from '../../utils/media';

const PageDetails = styled.p`
  font-size: 1.6em;

  ${ media.handheld`
    text-align: center;
    font-size: 1.1em;
  `}
  ${ media.tablet`
    font-size: 1.5em;
  `}
`;

export default PageDetails;