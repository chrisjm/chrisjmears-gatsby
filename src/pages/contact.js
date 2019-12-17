import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contact-form";

function Thanks() {
  return (
    <Layout>
      <SEO title="Contact me" />
      <ContactForm />
    </Layout>
  );
}

export default Thanks;
