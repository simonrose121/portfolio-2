import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"

import socials from "../data/socials"

const HeaderWrapper = styled.div`
  border: none;
  background: ${props => props.theme.main};
  box-shadow: 0 1px 50px 0 rgba(0, 0, 0, 0.26);
  height: 60px;

  .container {
    max-width: ${props => props.theme.maxWidth};
  }

  @media only screen and (max-width: 620px) {
    height: 120px;
  }
`

const Logo = styled.div`
  width: 100px;
  padding: 16px 0 10px 0;
  float: left;

  img {
    margin: 0 auto;
    display: block;
  }

  @media only screen and (max-width: 620px) {
    margin: auto;
    width: 100%;
  }
`

const Links = styled.div`
  padding-top: 10px;
  float: right;
  font-size: 20px;
  margin-top: 5px;
  display: flex;

  @media only screen and (max-width: 620px) {
    width: 100%;
  }
`

const SocialLink = styled.a`
  display: inline;
  padding: 0 10px;
  color: white;
  flex: auto;

  &:hover {
    color: white;
  }

  svg {
    display: block;
    margin: 7px auto 0;
  }
`

const Header = () => (
  <>
    <HeaderWrapper>
      <Container>
        <Row>
          <Col lg={true}>
            <Link to="/">
              <Logo>
                <img src="/logo.png" height={30} alt="Simon Rose" />
              </Logo>
            </Link>
          </Col>
          <Col lg={true}>
            <Links>
              {socials.map(social => {
                return (
                  <SocialLink
                    href={social.href}
                    alt={social.name}
                    key={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </SocialLink>
                )
              })}
            </Links>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  </>
)

export default Header
