import styled from 'styled-components';
import { media } from '../../utils/media';

const PageDetails = styled.p`
  font-size: 1.6em;

  ${ media.tablet`
    text-align: center;
    font-size: 1.2em;
  `}
`;

export default PageDetails;