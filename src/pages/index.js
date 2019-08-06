import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NewsletterSignup from '../components/newsletter-signup';
import Hero from '../components/hero';
import AllTheWoes from '../components/all-the-woes';
import WhyWorkWithMe from '../components/why-work-with-me';
import Testimonials from '../components/testimonials';
import AboutMe from '../components/about-me';

function IndexPage() {
  return (
    <Layout
      headerBackgroundColor="white"
      headerTextColor="black"
      headerMobileMenuTextColor="blue-700"
    >
      <SEO title="Home" keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} />
      <Hero />
      <NewsletterSignup />
      <AllTheWoes />
      <WhyWorkWithMe />
      <Testimonials />
      <AboutMe />
    </Layout>
  );
}

export default IndexPage;
