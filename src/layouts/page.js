import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/section';

const shortcodes = { Link }

function PageLayout({ data: { mdx }}) {
  const { header, description, title } = mdx.frontmatter
  const ogImagePath = header && header.teaser

  return (
    <Layout title={title}>
      <SEO
        title={title}
        description={description || mdx.excerpt}
        image={ogImagePath}
      />

      <Section containerClasses="container mx-auto max-w-3xl p-5 md:pt-10">
        <MDXProvider components={shortcodes}>
          <div className="post-content">
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
        </MDXProvider>
      </Section>
    </Layout>
  );
}

export default PageLayout;

export const pageQuery = graphql`
  query PageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        header {
          teaser
        }
      }
    }
  }
`
