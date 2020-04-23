import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import AboutMe from "../components/about-me"
import MostRecentBlogPosts from "../components/most-recent-blog-posts"
import NewsletterSignup from "../components/newsletter-signup"
import Projects from "../components/projects"

function IndexPage(props) {
  const posts = props.data.allMarkdownRemark.nodes

  return (
    <Layout
      headerBackgroundColor="white"
      headerTextColor="black"
      headerMobileMenuTextColor="blue-700"
    >
      <SEO
        title="Home"
        keywords={[
          `data scientist`,
          `data engineer`,
          `data analysis`,
          `data science`,
          `technical support`,
          `technical support engineer`,
          `technical project manager`,
          `distributed team`,
          `remote team`,
          `full-stack web developer`,
        ]}
      />
      <Hero />
      <NewsletterSignup />
      <Projects />
      <MostRecentBlogPosts posts={posts} />
      <AboutMe />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
`
