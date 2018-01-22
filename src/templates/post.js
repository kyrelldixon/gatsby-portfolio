import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const { title, content, datePublished } = post
    return (
      <div style={{color: 'white'}}>
        <h1>{title}</h1>
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