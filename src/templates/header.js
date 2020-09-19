import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container } from "react-bootstrap"

import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons"
import {
  faGithub,
  faLinkedinIn,
  faResearchgate,
  faGoodreadsG,
} from "@fortawesome/free-brands-svg-icons"

const HeaderWrapper = styled.div`
  border: none;
  background: ${props => props.theme.main};
  boxshadow: 0 1px 50px 0 rgba(0, 0, 0, 0.26);
  height: 60px;
`

const Logo = styled.div`
  width: 100px;
  padding: 16px 0 10px 0;
  float: left;

  img {
    margin: 0 auto;
    display: block;
  }
`

const Links = styled.div`
  padding-top: 10px;
  float: right;
  font-size: 20px;
  margin-top: 5px;
`

const SocialLink = styled.div`
  display: inline;
  padding-right: 20px;

  a {
    color: white;
  }
`

const Header = () => (
  <>
    <HeaderWrapper>
      <Container>
        <Link to="/">
          <Logo>
            <img src="/logo.png" height={30} alt="Simon Rose" />
          </Logo>
        </Link>
        <Links>
          <SocialLink>
            <a href="mailto:simonrose121@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </SocialLink>
          <SocialLink>
            <a
              href="https://github.com/simonrose121"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </SocialLink>
          <SocialLink>
            <a
              href="http://uk.linkedin.com/in/simonprose/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </SocialLink>
          <SocialLink>
            <a
              href="https://scholar.google.com/citations?user=wMWa2TkAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGraduationCap} />
            </a>
          </SocialLink>
          <SocialLink>
            <a
              href="https://www.researchgate.net/profile/Simon_Rose2"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faResearchgate} />
            </a>
          </SocialLink>
          <SocialLink>
            <a
              href="https://www.goodreads.com/user/show/22312452-simon-rose"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGoodreadsG} />
            </a>
          </SocialLink>
        </Links>
      </Container>
    </HeaderWrapper>
  </>
)

export default Header
