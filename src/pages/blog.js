import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

function BlogIndex(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <h1 className="text-4xl mb-6">Blog</h1>
      <div className="blog-list">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div className="blog-post mb-10 leading-normal" key={node.fields.slug}>
              <h3 className="text-2xl mb-1">
                <Link className="underline hover:text-black text-blue-500" to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <span className="post-date mb-2 block text-sm text-gray-700">{node.frontmatter.date}</span>
              <p
                className="post-excerpt text-lg"
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
