import React from 'react';
import "./bar.css";
import {Nav, Navbar, Container} from 'react-bootstrap';


const Bar = ()=> {
    return (
        <Navbar bg="#3333333" variant="dark" expand="lg">
          
  <Container>
    <Navbar.Brand className="name">Abhi Alderman</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/" className="header">Home</Nav.Link>
        <Nav.Link href="/projects" className="header">Projects</Nav.Link>
        <Nav.Link href="/coursework" className="header">Coursework</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
} 

export default Bar;