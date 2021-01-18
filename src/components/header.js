import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/logo.svg'
import styled, { createGlobalStyle } from 'styled-components'
import '../styles/header.scss'

export default function Header() {
  const [nav, showNav] = useState(false)

  return (
    <div className="header">
      <Global />
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <NavMenu nav={nav}>
          <NavLink to="/about">Our Journey</NavLink>
          <NavLink to="/productspage">Products</NavLink>
          <NavLink to="#">Stories</NavLink>
          <NavLink to="#">Contact</NavLink>
          <Download to="https://www.facebook.com">Download the App</Download>
        </NavMenu>
        <MenuIcon onClick={() => showNav(!nav)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </nav>
    </div>
  )
}

const Global = createGlobalStyle`
body,html
{
  margin:0;
  padding:0;
  overflow-x:hidden;
  height:100vh;
}

`
const NavMenu = styled.div`
  display:flex;
  width:100%;
  transition: transform 300ms;
  z-index:1;
  @media screen and (max-width:1024px)
  {
    padding-top: 25%;
    width: 50%;
    background: linear-gradient(#38ef7d, #11998e);
    height: 100vh;
    transform:translateX(100%);
    padding-left:10%;
    flex-direction:column;
      transform:${({ nav }) => (nav ? 'translateX(100%)' : 'translateX(200%)')};
  }
  @media screen and (max-width:768px)
  {
    padding-left:5%;
    height:100vh;
    transform:${({ nav }) => (nav ? 'translateX(100%)' : 'translateX(200%)')};
  }

  @media screen and (max-width:576px)
  {
    width 100%;
      transform:${({ nav }) => (nav ? 'translateX(20%)' : 'translateX(100%)')};
  }
`
const NavLink = styled(Link)`
  color: #363c4c;
  font-size: 12px;
  letter-spacing: 5px;
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 3px solid #363c4c;
  font-family: 'Corsica-semibold';
  margin-left: 8%;
  padding-bottom: 6px;
  padding-left: 4px;
  margin-top: 3%;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-top: 8%;
    border: 0;
  }
`
const Download = styled(Link)`
  color: #363c4c;
  font-size: 12px;
  letter-spacing: 5px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Corsica-semibold';
  box-shadow: inset 0 0 0 2px #363c4c;
  padding: 12px 20px 12px 23px;
  transition: all 0.5s;
  margin-left: 6%;
  margin-top: 2%;

  @media screen and (max-width: 1024px) {
    margin-top: 10%;
    display: flex;
    max-width: 240px;
  }
  &:hover {
    color: white;
    background: #4c51fb;
    transition: all 0.5s;
    box-shadow: inset 0 0 0 2px #4c51fb;
  }
`

const MenuIcon = styled.button`
  position: absolute;
  top: 2.3rem;
  right: 2rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;
  &::after {
    outline: none;
  }
  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 3px;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`
