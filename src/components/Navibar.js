import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NaviBar() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to={"/"}>Portfolio-Demo</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/skills"}>Skills</Nav.Link>
            <Nav.Link as={Link} to={"/services"}>Services</Nav.Link>
            <Nav.Link as={Link} to={"/contacts"}>Contacts</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="primary">Log In</Button>{' '}
            <Button variant="primary">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
    </>
  )
}
