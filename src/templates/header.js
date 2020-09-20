import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container } from "react-bootstrap"

import socials from "../data/socials"

const HeaderWrapper = styled.div`
  border: none;
  background: ${props => props.theme.main};
  box-shadow: 0 1px 50px 0 rgba(0, 0, 0, 0.26);
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

const SocialLink = styled.a`
  display: inline;
  padding-right: 20px;
  color: white;
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
      </Container>
    </HeaderWrapper>
  </>
)

export default Header
