import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';

const BlogWrapper = styled.div`
  color: white;
`;

const Blog = () => (
  <BlogWrapper>
    <PageTitle>Blog</PageTitle>
    <PageDescription>This is a description of the page below</PageDescription>
    <PageDetails>
      This is where I enlightenment begins. I write stuff, you become a little hairy Buddha. 
    </PageDetails>
  </BlogWrapper>
)

export default Blog;
