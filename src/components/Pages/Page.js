import styled from 'styled-components';
import { sizes } from '../../utils/sizes';
import { media } from '../../utils/media';

const Page = styled.div`
  margin-left: 33%;
  position: relative;
  background-color: #292929;
  padding: 150px 65px;
  height: 100vh;

  ${ media.tablet`
    margin-left: 0;
    padding: 80px 40px;
  `}
`;

export default Page;