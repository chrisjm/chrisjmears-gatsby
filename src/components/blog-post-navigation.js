import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Section from './section';

function BlogPostNavigation({ previous, next }) {
  return (
    <Section sectionClasses="bg-blue-600 text-white">
      <ul className="flex flex-col md:flex-row">
        <li className="flex-1 md:mr-5">
          {previous && (
            <>
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
            </>
          )}
        </li>
        <li className="flex-1 md:ml-5">
          {next && (
            <>
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
            </>
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
