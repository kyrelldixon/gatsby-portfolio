import styled from 'styled-components';
import { colors } from '../utils/colors';

const Icon = styled.i.attrs({
  className: props => props.icon || ""
}) `
  color: ${props => props.color || 'inherit'};
  font-size: 1.4em;

  &:hover {
    color: inherit;
  }
`;

export default Icon;