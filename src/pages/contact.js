import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"
import NewsletterSignup from "../components/newsletter-signup"

function Thanks() {
  return (
    <Layout>
      <SEO title="Contact me" />
      <ContactForm />
      <NewsletterSignup />
    </Layout>
  )
}

export default Thanks
