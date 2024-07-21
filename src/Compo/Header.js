/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react"
import jwt_decode from "jwt-decode"
import { Link } from "react-router-dom"
import { BsFillPersonFill } from "react-icons/bs"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap"

const Header = () => {
  const [user, setUser] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    const token = localStorage.getItem("music-site-token")
    if (token) {
      var decoded = jwt_decode(token)
      // console.log(decoded);
      setUser(decoded.firstName)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">
        <Link to="/dashboard" className="text-white btn">
          React Music
        </Link>
      </NavbarBrand>
      <Nav className="ms-auto d-flex justify-content-end flex-row" navbar>
        <NavItem>
          <Link to="/songs" className="btn text-white">
            Songs
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/logout" className="btn btn-outline-info text-white">
            Log Out
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
export default Header
