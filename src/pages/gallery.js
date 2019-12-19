import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => (
  <Layout>
    <SEO title="Gallery" />
    <h1>This is where the gallery will be.</h1>
    <p><Link to="/">Go back to the homepage</Link></p>
    <p><Link to="/about/">Go to About</Link></p>
  </Layout>
)

export default Gallery
