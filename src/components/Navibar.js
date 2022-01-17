import React from "react";
import { Button, Navbar, Nav, Link, Container } from "react-bootstrap";

export default function NaviBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Portfolio-Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Skils</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Contacts</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="primary">Log In</Button>{' '}
            <Button variant="primary">Log Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
    </>
  )
}
