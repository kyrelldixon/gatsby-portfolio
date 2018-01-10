import styled from 'styled-components';
import { media } from '../../utils/media';

const PageTitle = styled.h5`
  font-size: 1em;
  letter-spacing: .32em;
  text-transform: uppercase;
  line-height: 1.8em;

  ${ media.tablet`
    text-align: center;
    font-size: .9em;
  `}
`;

export default PageTitle;