import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Signature from '../components/signature';
import BlogPostNavigation from '../components/blog-post-navigation';
import NewsletterSignup from '../components/newsletter-signup';
import Section from '../components/section';
import PostContent from '../components/post-content';

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

      <Section containerClasses="container mx-auto max-w-3xl p-5 md:pt-10">
        <PostContent post={post} />
        <Signature />
      </Section>

      <BlogPostNavigation previous={previous} next={next} />

      <NewsletterSignup />
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
        header {
          teaser
        }
      }
    }
  }
`;
