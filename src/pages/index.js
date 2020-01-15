import React from "react"

import Layout from "../components/layout"
import Checkout from "../components/checkout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Buy your ticket</h1>
    <Checkout />
  </Layout>
)

export default IndexPage
