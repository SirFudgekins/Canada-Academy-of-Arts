import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>This is the home page.</h1>
      <p>This is a sentence.</p>
    </Layout>
  );
}

export default IndexPage