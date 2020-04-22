const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostLayout = path.resolve(`./src/layouts/blog-post.js`)
  const pageLayout = path.resolve(`./src/layouts/page.js`)

  const blogResult = await graphql(`
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
                date(formatString: "MMMM DD, YYYY")
                header {
                  teaser
                }
              }
            }
          }
        }
      }
    `
  )

  if (blogResult.errors) {
    throw blogResult.errors
  }

  // Create blog posts pages.
  const posts = blogResult.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPostLayout,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const pagesResult = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (pagesResult.errors) {
    throw pagesResult.errors;
  }

  // Create pages.
  const pages = pagesResult.data.allMdx.edges
  pages.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: pageLayout,
      context: { id: node.id },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Blog posts
  if (node.internal.type === `MarkdownRemark`) {
    const relativePath = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${relativePath}`,
    })
  }
}
