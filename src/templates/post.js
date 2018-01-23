import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components';
import { colors } from '../utils/colors';

const Title = styled.h1`
  font-size: 2.9em;
  color: ${colors.font.xlightGrey};
  margin-bottom: 1.1em;
`;

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const { title, content, datePublished } = post
    return (
      <div style={{color: 'white'}}>
        <Title>{title}</Title>
        <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}} />
      </div>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query postQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
      datePublished
    }
  }
`