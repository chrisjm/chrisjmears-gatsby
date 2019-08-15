import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Section from './section';
import Header2 from './heading2';

function MostRecentBlogPosts({ posts }) {
  return (
    <Section sectionClasses="bg-blue-600 text-white">
      <Header2 title="Most Recent Posts" />
      <ul className="flex flex-col md:flex-row">
        {posts &&
          posts.map(post => (
            <li className="flex-1 md:mr-5" key={post.id}>
              <Link
                to={post.fields.slug}
                rel="prev"
                className="hover:text-blue-200 hover:no-underline"
              >
                {post.frontmatter.header && (
                  <div className="mb-2">
                    <img src={post.frontmatter.header.teaser} alt={`Featured`} />
                  </div>
                )}
                <div className="text-lg leading-tight">{post.frontmatter.title}</div>
              </Link>
              <i className="block mt-2">{post.frontmatter.date}</i>
            </li>
          ))}
      </ul>
    </Section>
  );
}

MostRecentBlogPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default MostRecentBlogPosts;
