import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Languages } from "./Languages";
import { useTranslation } from 'react-i18next';

export default function NaviBar() {

  const { t } = useTranslation();
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to={"/"}>{t('brand-title')}</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"}>{t('home')}</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>{t('about')}</Nav.Link>
            <Nav.Link as={Link} to={"/skills"}>{t('skills')}</Nav.Link>
            <Nav.Link as={Link} to={"/services"}>{t('services')}</Nav.Link>
            <Nav.Link as={Link} to={"/contacts"}>{t('contacts')}</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button variant="primary">Log In</Button>{' '}
            <Button variant="primary">Register</Button>
            <Languages />
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
    </>
  )
}
