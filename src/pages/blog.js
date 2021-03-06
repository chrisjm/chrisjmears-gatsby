import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import BlogList from "../components/blog-list"
import NewsletterSignup from "../components/newsletter-signup"

function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const blogPosts = data.allMarkdownRemark.edges.filter((post) => {
    return /^\/blog/.test(post.node.fields.slug)
  })

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <Section>
        <h1 className="text-4xl mb-6">Blog</h1>
        <BlogList posts={blogPosts} />
      </Section>
      <NewsletterSignup />
    </Layout>
  )
}

export default BlogIndex

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
            header {
              teaser
              cloudinaryPublicId
            }
          }
        }
      }
    }
  }
`
