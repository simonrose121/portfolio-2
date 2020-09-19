import React from "react"
import Helmet from "react-helmet"

import Layout from "../templates/layout"

const Home = () => {
  return (
    <>
      <Helmet title="Home" />
      <Layout>Hello world!</Layout>
    </>
  )
}

export default Home
