import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Thanks() {
  return (
    <Layout>
      <SEO title="Thank you for contact me!" />
      <div>
        <h2 className="text-2xl text-center font-bold my-8 p-3">
          Thank you for contacting me! I will respond within 1-2 business days.
        </h2>
      </div>
    </Layout>
  );
}

export default Thanks;
