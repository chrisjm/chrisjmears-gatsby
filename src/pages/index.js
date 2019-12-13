import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NewsletterSignup from '../components/newsletter-signup';
import Hero from '../components/hero';
import AboutMe from '../components/about-me';
import MostRecentBlogPosts from '../components/most-recent-blog-posts';

function IndexPage(props) {
  const posts = props.data.allMarkdownRemark.nodes;

  return (
    <Layout
      headerBackgroundColor="white"
      headerTextColor="black"
      headerMobileMenuTextColor="blue-700"
    >
      <SEO
        title="Home"
        keywords={[`solopreneurs`, `small business owners`, `independent`, `website`, `developer`]}
      />
      <Hero />
      <AboutMe />
      <MostRecentBlogPosts posts={posts} />
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 2, sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          header {
            teaser
          }
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;
