import styled from 'styled-components';
import { sizes } from '../../utils/sizes';
import { media } from '../../utils/media';
import { colors } from '../../utils/colors';

const Page = styled.div`
  margin-left: ${sizes.sidebarWidth.desktop};
  position: relative;
  background: ${colors.background};
  padding: 150px 65px;
  min-height: 100vh;

  ${ media.handheld`
    margin-left: 0;
    padding: 80px 40px;
  `}

  ${ media.tablet`
    margin-left: ${sizes.sidebarWidth.tablet};
  `}
`;

export default Page;