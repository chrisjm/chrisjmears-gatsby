import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NewsletterSignup from '../components/newsletter-signup';
import Hero from '../components/hero';

function IndexPage() {
  return (
    <Layout headerClasses="bg-white" headerLinkClasses="text-black">
      <SEO title="Home" keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} />
      <Hero />
      <NewsletterSignup />
    </Layout>
  );
}

export default IndexPage;
