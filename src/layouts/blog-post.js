import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Signature from '../components/signature';

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;
  const { previous, next } = props.pageContext;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <section>
        <div className="container mx-auto max-w-3xl">
          <div className="content">
            <div className="post-header mb-5">
              <h1 className="post-title text-3xl mb-1">{post.frontmatter.title}</h1>
              <p className="post-date text-gray-600">{post.frontmatter.date}</p>
            </div>
            <div className="post-content mb-10" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </div>
      </section>

      <Signature />

      <ul className="flex flex-col md:flex-row">
        <li class="flex-1">
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li class="flex-1 text-right">
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
