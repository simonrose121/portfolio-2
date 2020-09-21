import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import lodash from "lodash"

import { Row, Col } from "react-bootstrap"

import Layout from "../templates/layout"

const TechList = styled.div`
  margin-left: -10px;
`

const Tech = styled.img`
  width: 45px;
  margin: 0 10px 20px 10px;
  display: inline-block;
`

const Logo = styled.img`
  padding: 20px 0;
`

const Title = styled.h2`
  font-weight: bold;
  padding: 20px 0 10px;
`

const Image = styled.img`
  width: 100%;
  margin-bottom: 10px;
`

const ProjectsLayout = props => {
  const tech = props.pageContext.frontmatter.tech.split(",")
  const imageRows = lodash.chunk(props.pageContext.frontmatter.images, 2)

  return (
    <>
      <Helmet title={props.pageContext.frontmatter.title} />
      <Layout>
        <Row>
          <Col>
            {props.pageContext.frontmatter.logo ? (
              <Logo
                src={`/${props.pageContext.frontmatter.logo}`}
                alt={props.pageContext.frontmatter.title}
                width={props.pageContext.frontmatter.logoWidth}
              />
            ) : (
              <Title>{props.pageContext.frontmatter.title}</Title>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <TechList>
              {tech.map(el => {
                return <Tech src={`/${el}.png`} alt={el} key={el} />
              })}
            </TechList>
          </Col>
        </Row>
        <Row>
          <Col>{props.children}</Col>
        </Row>
        {imageRows.map((row, rowIndex) => {
          return (
            <Row key={"row" + rowIndex}>
              {row.map((image, imageIndex) => {
                return (
                  <Col key={"col" + imageIndex}>
                    <Image src={`/${image.src}`} alt={image.alt} />
                  </Col>
                )
              })}
            </Row>
          )
        })}
      </Layout>
    </>
  )
}

export default ProjectsLayout
