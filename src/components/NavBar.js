import React, { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const NavBar= () => {
  const [count, setDark] = useState("");
  var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQuery.addEventListener('change', function() {setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)});
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return (
      <div>
      <Navbar className="mb-5" collapseOnSelect expand="lg"  variant="dark">
      <Container>
      <LinkContainer to="/home">
        <Navbar.Brand>Portfolio</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/home">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>Recent Projects</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
      );
  } else {
    return (
      <div>
      <Navbar className="mb-5" collapseOnSelect expand="lg"  variant="light">
      <Container>
      <Navbar.Brand href="/home">Web Development Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/home">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/projects">
            <Nav.Link>Recent Projects</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
      </div>
      );
  }
}
export default NavBar;