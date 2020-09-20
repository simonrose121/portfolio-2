import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import lodash from "lodash"

import { ThemeProvider } from "styled-components"

import { Row, Col } from "react-bootstrap"

import Layout from "../templates/layout"
import Project from "../templates/project"
import projects from "../data/projects"

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
  padding-top: 77px;
  text-align: center;
  line-height: 35px;
`

const CVButton = styled.button`
  border-radius: 6px;
  background: ${props => props.theme.main};
  padding: 2px 20px 0px 20px;
  margin-top: 20px;
  border: solid 2px;
  border-color: ${props => props.theme.main};
  text-decoration: none;
  line-height: 20px;

  a {
    color: white;
  }
`

const Projects = styled.div`
  padding: 0px;
  margin-top: 25px;
  padding-top: 25px;
  background: ${props => props.theme.secondary};
  color: black;
  float: left;
  width: 100%;
  overflow: hidden;
  text-align: center;
`

const theme = {
  main: "#21aff2",
  secondary: "#fafafa",
}

const Home = () => {
  const projectRows = lodash.chunk(projects, 3)

  projectRows.forEach(row => {
    if (row.length === 1) {
      row.push({})
      row.unshift({})
    }
  })

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
                MComp in Software Engineering
                <br />
                Associate Lecturer at Sheffield Hallam University and freelance
                Software Engineer
                <br />
                Thank you for visiting.
                <br />
                <CVButton>
                  <a href="data/SimonRoseCV.pdf" target="_blank">
                    CV
                  </a>
                </CVButton>
              </Info>
            </Col>
          </Row>
          <Projects>
            {projectRows.map((row, rowIndex) => (
              <Row>
                {row.map((project, projectIndex) => {
                  return project.title ? (
                    <Col
                      key={parseInt(rowIndex * 3) + parseInt(projectIndex + 1)}
                    >
                      <Project
                        key={project.title}
                        link={project.link}
                        image={project.image}
                        title={project.title}
                        desc={project.desc}
                        lang={project.lang}
                        year={project.year}
                      ></Project>
                    </Col>
                  ) : (
                    <Col></Col>
                  )
                })}
              </Row>
            ))}
          </Projects>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default Home
