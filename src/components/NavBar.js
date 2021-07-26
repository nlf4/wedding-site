import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar>
      <NavbarBrand href="/">Lindsay & Zach</NavbarBrand>
      <Nav className="nav">
        <NavItem>
          <NavLink tag={Link} to="/Home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/OurStory">Our Story</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/Details">Details</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/Rsvp">RSVP</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/Registry">Registry</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default NavBar