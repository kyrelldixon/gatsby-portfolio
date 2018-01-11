import styled from 'styled-components';
import { media } from '../../utils/media';
import { colors } from '../../utils/colors';

const PageTitle = styled.h5`
  font-size: 1em;
  letter-spacing: .32em;
  text-transform: uppercase;
  line-height: 1.8em;
  ${colors.font.gradient};

  ${ media.tablet`
    font-size: .9em;
  `}
  ${ media.handheld`
    text-align: center;
    font-size: .9em;
  `}
`;

export default PageTitle;