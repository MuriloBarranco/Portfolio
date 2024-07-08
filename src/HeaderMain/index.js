import React, { useState } from "react"

import {
  GlobalStyle,
  Header,
  NavBar,
  MenuButton,
  Navigation,
  MenuBackground,
  MenuWrapper,
  MenuContainer,
  MenuList,
  MenuItem,
  LogoLink,
  MenuFooter,
  Border,
  LogoOptions,
} from "./styles"

import { logotext, socialprofils } from "../content_option"

import Themetoggle from "../components/themetoggle"

import { Link } from "react-router-dom"
import { VscGrabber, VscClose } from "react-icons/vsc"

const HeaderMain = () => {
  const [isActive, setActive] = useState(true)

  const handleToggle = () => {
    setActive(!isActive)
    document.body.classList.toggle("ovhidden")
  }

  return (
    <>
      <GlobalStyle />
      <Header>
        <NavBar>
          <LogoLink to="/">{logotext}</LogoLink>
          <LogoOptions>
            <Themetoggle />
            <MenuButton onClick={handleToggle}>
              {isActive ? <VscGrabber /> : <VscClose />}
            </MenuButton>
          </LogoOptions>
        </NavBar>
        <Navigation isActive={isActive}>
          <MenuBackground isActive={isActive} />
          <MenuWrapper>
            <MenuContainer>
              <MenuList>
                <MenuItem>
                  <Link onClick={handleToggle} to="/">
                    Home
                  </Link>
                </MenuItem>
                {/* <MenuItem>
                  <Link onClick={handleToggle} to="/portfolio">
                    Portfolio
                  </Link>
                </MenuItem> */}
                <MenuItem>
                  <Link onClick={handleToggle} to="/about">
                    Sobre mim
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link onClick={handleToggle} to="/contact">
                    Contato
                  </Link>
                </MenuItem>
              </MenuList>
            </MenuContainer>
          </MenuWrapper>
          <MenuFooter>
            <div>
              <a href={socialprofils.facebook}>Facebook</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </MenuFooter>
        </Navigation>
      </Header>
      <Border className="top" />
      <Border className="bottom" />
      <Border className="left" />
      <Border className="right" />
    </>
  )
}

export default HeaderMain
