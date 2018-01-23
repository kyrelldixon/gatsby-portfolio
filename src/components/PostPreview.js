import React from 'react';
import styled from 'styled-components';
import Link from './Link';
import { media } from '../utils/media';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;

  ${ media.handheld`
    flex-direction: column;
    margin-bottom: 1.8em;
    text-align: center;
  `}
`;

const Title = styled.h3`
  margin-bottom: 0.3em;
`;

const DatePublished = styled.span``;

const PostPreview = ({ node }) => {
  const { title, datePublished } = node;
  return (
      <Link to={`/posts/${title}/`}>
        <ContentWrapper>
          <Title>{title}</Title>
          <DatePublished>{datePublished}</DatePublished>
        </ContentWrapper>
      </Link>
  )
}

export default PostPreview;