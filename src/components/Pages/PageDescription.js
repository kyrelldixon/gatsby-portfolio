import styled from 'styled-components';
import { media } from '../../utils/media';

const PageDescription = styled.h1`
  font-size: 4em;
  letter-spacing: -.02em;
  margin: 1.5em 0 1.1em;

  ${ media.handheld`
    text-align: center;
    font-size: 3em;
  `}
  ${ media.tablet`
    font-size: 2.9em;
  `}
`;

export default PageDescription;