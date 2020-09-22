import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ProjectWrapper = styled.div`
  position: relative;
  float: left;
  padding-bottom: 15px;

  img {
    width: 100%;
  }

  .desc {
    position: absolute;
    top: 5px;
    bottom: 0;
    left: 2px;
    right: 2px;
    color: black;
    text-align: center;
    visibility: hidden;
    opacity: 0;

    .year {
      text-align: left;
      position: absolute;
      bottom: 15px;
      right: 5px;
    }
  }

  &:hover {
    .desc {
      visibility: visible;
      opacity: 1;

      @media only screen and (max-width: 620px) {
        visibility: hidden;
      }
    }

    img {
      opacity: 0.1;
    }
  }
`

const Project = ({ link, title, image, desc, lang, year }) => (
  <ProjectWrapper>
    <Link to={link}>
      <img src={image} alt={title} />
      <div className="desc">
        {desc}
        <br />
        <br />
        <i>{lang}</i>
        <div className="year">{year}</div>
      </div>
    </Link>
  </ProjectWrapper>
)

export default Project
