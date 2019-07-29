import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Section from './section';

function BlogPostNavigation({ previous, next }) {
  return (
    <Section>
      <ul className="flex flex-col md:flex-row">
        <li className="flex-1">
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li className="flex-1 text-right">
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Section>
  );
}

BlogPostNavigation.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
};

export default BlogPostNavigation;
