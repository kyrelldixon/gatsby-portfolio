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
      <PageDescription>Content is key.</PageDescription>
    </Animated>

    <Animated delay={300}>
      <PageDetails>
        This is primarily an outlet for my thoughts on tech, psychology, and anything that catches my attention. <br /><br />
        If you see anything that interests you, leave a comment. I always reply.
      </PageDetails>
    </Animated>
    
  </BlogWrapper>
)

export default Blog;
