const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostLayout = path.resolve(`./src/layouts/blog-post.js`)
  const mdxPageLayout = path.resolve(`./src/layouts/mdx-page.js`)

  const markdownResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              header {
                teaser
              }
            }
          }
        }
      }
    }
  `)

  if (markdownResult.errors) {
    throw markdownResult.errors
  }

  const allPosts = markdownResult.data.allMarkdownRemark.edges

  const blogPosts = allPosts.filter(post =>
    /\/blog/.test(post.node.fields.slug)
  )

  blogPosts.forEach((post, index) => {
    const { slug } = post.node.fields
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node
    const next = index === 0 ? null : blogPosts[index - 1].node

    createPage({
      path: slug,
      component: blogPostLayout,
      context: {
        slug: slug,
        previous,
        next
      }
    })
  })

  const newsletterPosts = allPosts.filter(post =>
    /\/data-nerd-newsletter/.test(post.node.fields.slug)
  )

  newsletterPosts.forEach((post, index) => {
    const { slug } = post.node.fields
    const previous =
      index === newsletterPosts.length - 1
        ? null
        : newsletterPosts[index + 1].node
    const next = index === 0 ? null : newsletterPosts[index - 1].node

    console.log(slug);

    createPage({
      path: slug,
      component: blogPostLayout,
      context: {
        slug: slug,
        previous,
        next
      }
    })
  })

  const mdxResult = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (mdxResult.errors) {
    throw mdxResult.errors
  }

  // Create pages.
  const pages = mdxResult.data.allMdx.edges
  pages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: mdxPageLayout,
      context: { id: node.id }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Markdown
  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    const relativePath = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `${relativePath}`
    })
  }
}
