import React, { Component } from "react";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import "./MainNavbar.css"

class MainNavbar extends Component {
  render()  {
    return (
      <Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
        <Navbar.Brand href="/">BigBank</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Open an Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/customercreation">Create An Account</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/atmlocator">Atm Locator</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;
