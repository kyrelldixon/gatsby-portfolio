import React from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';
import Animated from '../components/Animated';

const BlogWrapper = styled.div`
  color: white;
`;

const Blog = () => (
  <BlogWrapper>
    <Animated>
      <PageTitle>Blog</PageTitle>
    </Animated>
    
    <Animated delay={150}>
      <PageDescription>This is a description of the page below</PageDescription>
    </Animated>

    <Animated delay={300}>
      <PageDetails>
        This is where I enlightenment begins. I write stuff, you become a little hairy Buddha.
      </PageDetails>
    </Animated>
    
  </BlogWrapper>
)

export default Blog;
