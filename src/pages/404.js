import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"

import { Row, Col } from "react-bootstrap"

import Layout from "../templates/layout"

const Warning = styled.div`
  text-align: center;
  top: 30px;
  position: relative;
`

const NotFound = () => {
  return (
    <>
      <Helmet title="Page Not Found" />

      <Layout>
        <Row>
          <Col>
            <Warning>Oops, that page was not found!</Warning>
          </Col>
        </Row>
      </Layout>
    </>
  )
}

export default NotFound
