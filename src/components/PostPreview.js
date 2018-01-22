import React from 'react';
import Link from 'gatsby-link';

const PostPreview = ({ node }) => {
  const { title, id } = node;
  return (
    <div>
      <Link
        style={{ color: `inherit`, textDecoration: `none` }}
        to={`/products/${title}/`}
      >
        <div>{title}</div>
      </Link>

    </div>
  )
}

export default PostPreview;