import React, { Component } from 'react';
import styled from 'styled-components';
import PageTitle from '../components/Pages/PageTitle';
import PageDescription from '../components/Pages/PageDescription';
import PageDetails from '../components/Pages/PageDetails';
import Animated from '../components/Animated';
import InProgress from '../components/InProgress';
import PostPreview from '../components/PostPreview';
import { media } from '../utils/media';
import { colors } from '../utils/colors';

const BlogWrapper = styled.div`
  color: white;
`;

const PostLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8.5em;
    
    &:first-child {
      border-top: 3px solid ${colors.font.xdarkGrey};;
    }

  ${ media.handheld`
    margin-top: 2.8em;
  `}

  ${ media.tablet`
    margin-top: 6em;
  `}
`;

class Blog extends Component {
  render() {
    const usProductEdges = this.props.data.us.edges
    return (
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

        <Animated delay={450}>
          <PostLinks>
            {usProductEdges.map(({ node }, i) => (
              <PostPreview node={node} key={node.id} />
            ))}
          </PostLinks>
        </Animated>

      </BlogWrapper>
    )
  }
}

export default Blog;

export const pageQuery = graphql`
  query PageQuery {
    us: allContentfulPost(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          datePublished
        }
      }
    }
  }
`