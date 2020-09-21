import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import lodash from "lodash"
import { isMobile } from "react-device-detect"

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

  @media only screen and (max-width: 620px) {
    width: 100%;
  }
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

  // should images be rows of 2 or 3
  let imagesPerRow = 2
  if (props.pageContext.frontmatter.images.length % 3 === 0) {
    imagesPerRow = 3
  }

  const imageRows = lodash.chunk(
    props.pageContext.frontmatter.images,
    imagesPerRow
  )

  let showMedia = true

  if (
    props.pageContext.frontmatter.media &&
    isMobile &&
    props.pageContext.frontmatter.media.title === "Mincemeat Game"
  ) {
    showMedia = false
  }

  return (
    <>
      <Helmet title={props.pageContext.frontmatter.title} />
      <Layout>
        <Row>
          <Col>
            {props.pageContext.frontmatter.logo ? (
              <Logo
                src={`/${props.pageContext.frontmatter.logo.src}`}
                alt={props.pageContext.frontmatter.title}
                width={props.pageContext.frontmatter.logo.width}
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
                  <Col key={"col" + imageIndex} lg={true}>
                    <Image src={`/${image.src}`} alt={image.alt} />
                  </Col>
                )
              })}
            </Row>
          )
        })}
        {props.pageContext.frontmatter.media && showMedia ? (
          <Row>
            <Col>
              <iframe
                title={props.pageContext.frontmatter.media.title}
                src={props.pageContext.frontmatter.media.src}
                width={props.pageContext.frontmatter.media.width}
                height={props.pageContext.frontmatter.media.height}
                frameBorder="0"
                scrolling="no"
                style={{ margin: "auto" }}
              ></iframe>
            </Col>
          </Row>
        ) : null}
      </Layout>
    </>
  )
}

export default ProjectsLayout
