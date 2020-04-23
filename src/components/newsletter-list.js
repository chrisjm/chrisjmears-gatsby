import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function NewsletterList({ posts }) {
  return (
    <ul className="post-list mt-12">
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;

        return (
          <li key={node.fields.slug}>
            <Link className="underline hover:text-black text-blue-500" to={node.fields.slug}>
              <h3 className="text-lg md:text-xl">
                {title}
              </h3>
            </Link>
            <div className="mt-2 block text-sm text-gray-700">
              {node.frontmatter.date}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

NewsletterList.propType = {
  posts: PropTypes.array,
};

NewsletterList.defaultProp = {
  posts: [],
};

export default NewsletterList;
