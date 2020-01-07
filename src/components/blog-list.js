import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const { teaser: featuredImageUrl } = node.frontmatter.header;

        return (
          <div className="mb-10 leading-normal" key={node.fields.slug}>
            <Link className="underline hover:text-black text-blue-500 block" to={node.fields.slug}>
              <h3 className="text-2xl md:text-3xl">
                {title}
              </h3>
            </Link>
            <div className="mt-2 block text-sm text-gray-700">
              {node.frontmatter.date}
            </div>
            {featuredImageUrl && (
              <div className="mt-2">
                <Link to={node.fields.slug}>
                  <img className="w-full h-48 object-cover" src={featuredImageUrl} alt={`Featured`} />
                </Link>
              </div>
            )}
            <div className="mt-2">
              <p className="text-lg">
                {node.frontmatter.description || node.excerpt}
              </p>
              <p className="text-body mt-1">
                <Link to={node.fields.slug}>
                  Read more.
                </Link>
              </p>
            </div>
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
