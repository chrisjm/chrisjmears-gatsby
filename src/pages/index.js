import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NewsletterSignup from '../components/newsletter-signup';
import Hero from '../components/hero';
import AllTheWoes from '../components/all-the-woes';
import WhyWorkWithMe from '../components/why-work-with-me';
import Testimonials from '../components/testimonials';

function IndexPage() {
  return (
    <Layout headerClasses="bg-white" headerLinkClasses="text-black">
      <SEO title="Home" keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} />
      <Hero />
      <NewsletterSignup />
      <AllTheWoes />
      <WhyWorkWithMe />
      <Testimonials />
    </Layout>
  );
}

export default IndexPage;
