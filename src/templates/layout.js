import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { Container } from "react-bootstrap"
import styled from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/global.css"

import Header from "./header"

const currentYear = new Date().getFullYear().toString()

const Wrapper = styled.div`
  min-height: calc(100vh - 36px);
`

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  background: ${props => props.theme.secondary};
  height: 18px;
  float: left;
`

const Layout = ({ children }) => {
  return (
    <>
      <Helmet titleTemplate="%s - Simon Rose" />

      <Wrapper>
        <Header />
        <Container>{children}</Container>
      </Wrapper>
      <Footer>
        <Container>Simon Rose {currentYear} &copy;</Container>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
