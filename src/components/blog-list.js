import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div className="mb-10 leading-normal" key={node.fields.slug}>
            <h3 className="text-2xl mb-1">
              <Link className="underline hover:text-black text-blue-500" to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <span className="mb-2 block text-sm text-gray-700">
              {node.frontmatter.date}
            </span>
            <p
              className="text-lg"
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

BlogList.propType = {
  posts: PropTypes.array,
};

BlogList.defaultProp = {
  posts: [],
};

export default BlogList;
