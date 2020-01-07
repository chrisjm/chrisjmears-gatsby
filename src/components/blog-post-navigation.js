import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Section from './section';
import Heading2 from './heading2';

function BlogPostNavigation({ previous, next }) {
  return (
    <Section sectionClasses="bg-blue-800 text-white">
      <Heading2 title="Additional Posts" />
      <ul className="flex flex-col md:flex-row justify-center">
        {next && (
          <li className="flex-1 max-w-1/2 md:mr-5">
            <Link
              to={next.fields.slug}
              rel="prev"
              className="hover:text-blue-200 hover:no-underline"
            >
              {next.frontmatter.header && (
                <div className="mb-2">
                  <img src={next.frontmatter.header.teaser} alt={`Featured`} />
                </div>
              )}
              <div className="text-lg leading-tight">{next.frontmatter.title}</div>
            </Link>
            <i className="block mt-2">{next.frontmatter.date}</i>
          </li>
        )}
        {previous && (
          <li className="flex-1 max-w-1/2 md:ml-5">
            <Link
              to={previous.fields.slug}
              rel="prev"
              className="hover:text-blue-200 hover:no-underline"
            >
              {previous.frontmatter.header && (
                <div className="mb-2">
                  <img src={previous.frontmatter.header.teaser} alt={`Featured`} />
                </div>
              )}
              <div className="text-lg leading-tight">{previous.frontmatter.title}</div>
            </Link>
            <i className="block mt-2">{previous.frontmatter.date}</i>
          </li>
        )}
      </ul>
    </Section>
  );
}

BlogPostNavigation.propTypes = {
  previous: PropTypes.object,
  next: PropTypes.object,
};

export default BlogPostNavigation;
