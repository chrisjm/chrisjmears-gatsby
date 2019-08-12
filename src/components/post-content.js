import React from 'react';
import PropTypes from 'prop-types';

function PostContent({ post }) {
  return (
    <>
      <div className="post-header mb-5">
        <h1 className="text-3xl mb-1">{post.frontmatter.title}</h1>
        <p className="text-gray-600">{post.frontmatter.date}</p>
      </div>
      <div className="post-content mb-10" dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
  );
}

PostContent.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostContent;
