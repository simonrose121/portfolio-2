import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import { ThemeProvider } from "styled-components"

import { Row, Col } from "react-bootstrap"

import Layout from "../templates/layout"

const Profile = styled.div`
  img {
    position: absolute;
    border-radius: 70px;
    width: 130px;
    margin: 0 auto;
    display: block;
    left: 0;
    right: 0;
    top: 20px;
  }
`

const Info = styled.div`
  padding-top: 97px;
  text-align: center;
`

const CVButton = styled.button`
  border-radius: 6px;
  background: ${props => props.theme.main};
  padding: 2px 20px 0px 20px;
  border: solid 2px;
  border-color: ${props => props.theme.main};
  text-decoration: none;

  a {
    color: white;
  }
`

const theme = {
  main: "#21aff2",
  secondary: "#fafafa",
}

const Home = () => {
  return (
    <>
      <Helmet title="Home" />
      <ThemeProvider theme={theme}>
        <Layout>
          <Profile>
            <img
              src={
                "https://s.gravatar.com/avatar/5a0fd43b00b619257adf46ee7626f254?s=300"
              }
              alt="Simon Rose Profile"
            />
          </Profile>
          <Row>
            <Col>
              <Info>
                <br />
                PhD in Computer Science
                <br />
                <br />
                MComp in Software Engineering
                <br />
                <br />
                Associate Lecturer at Sheffield Hallam University and freelance
                Software Engineer
                <br />
                <br />
                Thank you for visiting.
                <br />
                <br />
                <CVButton>
                  <a href="data/SimonRoseCV.pdf" target="_blank">
                    CV
                  </a>
                </CVButton>
              </Info>
            </Col>
          </Row>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default Home
