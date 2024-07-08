import styled, { createGlobalStyle } from "styled-components"
import { Link } from "react-router-dom"

export const GlobalStyle = createGlobalStyle`
  body.ovhidden {
    overflow: hidden;
  }
`

export const Header = styled.header`
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 1000;
`

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoLink = styled(Link)`
  padding: 5px 15px;
  background: var(--primary-color);
  font-size: 1.25rem;
  font-family: Marcellus;
  color: var(--text-color-2);
  line-height: 2;
  height: 50px;
  font-weight: bold;
  text-decoration: none;
`

export const LogoOptions = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding: 5px 15px;
  background: var(--primary-color);
  line-height: 2;
  height: 50px;
`

export const MenuButton = styled.button`
  color: var(--text-color);
  background: none;
  border: none;

  &:focus,
  &:hover {
    color: var(--text-color);
    box-shadow: unset;
  }

  svg {
    width: 2em;
    height: 2em;
    fill: var(--text-color-2);
    color: var(--text-color-2);
  }
`

export const Navigation = styled.div`
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  visibility: ${({ isActive }) => (isActive ? "hidden" : "visible")};
  transition: visibility 0.5s;
`

export const MenuBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  transform: ${({ isActive }) =>
        isActive ? "translateY(-100%)" : "translateY(0)"};
  transition: transform 0.5s ease;
`

export const MenuWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden auto;
`

export const MenuContainer = styled.div`
  padding: 3rem;
  margin-left: 33.3333%;

  @media (max-width: 992px) {
    margin-left: 0;
  }
`

export const MenuList = styled.ul`
  padding-top: 10vh;
  padding-bottom: 10vh;
  padding-left: 0;
  list-style: none;

  @media (max-width: 992px) {
    padding-top: 20vh;
    padding-bottom: 20vh;
  }
`

export const MenuItem = styled.li`
  margin: 10px 0;

  a {
    color: var(--text-color-2);
    line-height: 1;
    font-size: 2rem;
    display: inline-block;
    position: relative;
    transition: color 250ms cubic-bezier(0, 0, 0.58, 1) 0s;
    padding: 4px 0px;
    text-decoration: none;
    font-family: Marcellus;

    &:hover {
      color: var(--text-color-3);
    }

    @media (min-width: 768px) {
      font-size: 4.8vw;
    }
  }
`

export const MenuFooter = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 3rem;
  background: var(--primary-color);
  font-family: Marcellus;
  font-size: 14px;

  a {
    color: var(--text-color-2);
    margin-right: 10px;
    text-decoration: none;
  }
`

export const Border = styled.div`
  position: fixed;
  z-index: 999999;
  background: var(--primary-color);

  &.top {
    top: 0;
    height: 10px;
    left: 0;
    width: 100%;
  }

  &.bottom {
    bottom: 0;
    left: 0;
    height: 10px;
    width: 100%;
  }

  &.right {
    width: 10px;
    right: 0;
    top: 0;
    height: 100%;
  }

  &.left {
    width: 10px;
    left: 0;
    top: 0;
    height: 100%;
  }
`
