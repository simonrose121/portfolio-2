import React from "react"
import Helmet from "react-helmet"

import "bootstrap/dist/css/bootstrap.min.css"

import { Container } from "react-bootstrap"

export default function Home() {
  return (
    <>
      <Helmet title="Home" />
      <Container>Hello world</Container>
    </>
  )
}
