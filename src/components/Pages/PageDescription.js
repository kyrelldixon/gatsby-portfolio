import styled from 'styled-components';
import { media } from '../../utils/media';

const PageDescription = styled.h1`
  font-size: 4em;
  letter-spacing: -.02em;

  ${ media.tablet`
    text-align: center;
    font-size: 3em;
  `}
`;

export default PageDescription;