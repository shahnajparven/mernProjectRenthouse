import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Products from '../../component/Home/Products';
import Category from '../../component/category/Category';

function Navigation() {
  return (
    <>
   <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">TO-LET</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="./Category">Category</Nav.Link>
        <Nav.Link href="./Products">Broadcase</Nav.Link>
        <Nav.Link href="./Search">SEARCH</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Navigation;