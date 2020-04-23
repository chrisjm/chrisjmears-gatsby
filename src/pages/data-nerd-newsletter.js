import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import NewsletterList from "../components/newsletter-list"
import NewsletterSignup from "../components/newsletter-signup"

function DataNerdNewsletterIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const newsletterPosts = data.allMarkdownRemark.edges.filter((post) => {
    return /^\/data-nerd-newsletter/.test(post.node.fields.slug)
  })

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <NewsletterSignup />
      <Section>
        <h1 className="text-4xl mb-6">Data Nerd Newsletter Archive</h1>
        <NewsletterList posts={newsletterPosts} />
      </Section>
    </Layout>
  )
}

export default DataNerdNewsletterIndex

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
          }
        }
      }
    }
  }
`
