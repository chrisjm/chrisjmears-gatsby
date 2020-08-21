import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/about-me"
import NewsletterSignup from "../components/newsletter-signup"

function About() {
  return (
    <Layout>
      <SEO title="About Me" />
      <AboutMe />
      <NewsletterSignup />
    </Layout>
  )
}

export default About
