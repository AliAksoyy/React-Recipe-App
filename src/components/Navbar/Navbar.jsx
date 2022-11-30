import React from 'react'
import { Links,  Logo, Nav, NavLink } from './Navbar.style'
import logo from "../../assets/tastybites.png"


const Navbar = () => {

  return (
    <Nav >
      <Logo src={logo} />
      <Links>
        <NavLink  href="/home">Home</NavLink>
        <NavLink  href="/private/about">About</NavLink>
        <NavLink  href="https://github.com/AliAksoyy" target={"_blank"}>Githubs</NavLink>
        <NavLink  href="/login" >Logout</NavLink>
      </Links>
    </Nav>
    
  )
}

export default Navbar