import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

const Link = styled(GatsbyLink) `
  text-decoration: none;
  color: ${props => props.active ? 'rgba(0,0,0,0.9)' : 'inherit'};
  border-bottom: ${props => props.active ? '2px solid black' : 'none'};

  &:hover {
    color: rgba(0,0,0,0.9);
    border-bottom: 2px solid black;
  }
`;

export default Link;