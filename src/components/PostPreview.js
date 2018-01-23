import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import { media } from '../utils/media';
import { dateToMonth } from '../utils/convert-date';
import { colors } from '../utils/colors';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid ${colors.font.xdarkGrey};
  height: 4em;
  align-items: center;

  ${ media.handheld`
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: auto;
  `}
`;

const Title = styled.h3`

`;

const DatePublished = styled.span`
  font-size: 0.9em;
  color: #bbb;
  text-transform: uppercase;
  word-spacing: .1em;
  letter-spacing: .1em;
`;

const PostPreview = ({ node }) => {
  const { title, datePublished } = node;
  const date = dateToMonth(datePublished);
  return (
      <Link to={`/posts/${title}/`}>
        <ContentWrapper>
          <Title>{title}</Title>
          <DatePublished>{date}</DatePublished>
        </ContentWrapper>
      </Link>
  )
}

export default PostPreview;