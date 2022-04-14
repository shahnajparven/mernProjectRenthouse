import React from 'react';
import pic1 from '../../project-pic/home.png';
import pic2 from '../../project-pic/login.png';
import pic3 from '../../project-pic/menu.png';
import Registration from '../../component/registration/Registration';
// import Page from '../../components/registration/Page';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Navigation.css';
import '../../Main.css';
import $ from 'jquery';
import { FaSistrix,FaEject } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';
// import Search from '../../components/search/Search';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import {NavLink,useLocation} from 'react-router-dom';
import Products from '../../component/Home/Products';
import Search from '../../component/Home/Search';




const Navigation = () => {
  

//for modal
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const [showModal1,setShowModal1] = useState(false);
const openModal1 = () =>{
    setShowModal1(prev => !prev);
};


//for scrolled jquery
$(window).scroll(function () {
  $('.navbar,.navitms,.searchbarnav').toggleClass('scrolled', $(this).scrollTop() > 80)
});



return (

  <Navbar bg="white" expand="lg" className="navbar">
    <Container fluid>
    <FaEject />
      {/* <img
        className="d-block w-5" src={pic1}
        alt="Second slide" height="20px"
      /> */}
      <Navbar.Brand href="/" className="logo_name">TO-LET</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">

        <Nav className="me-auto my-2 my-lg-0 navitms">
          <NavLink className="navlink" to="/">Home</NavLink>
          <NavLink className="navlink" to="Category">Category</NavLink>
          <NavLink className="navlink" to="Products">Broadcase</NavLink>
          <NavLink className="navlink" to="Productttt">Guesthouse</NavLink>
          <NavLink className="navlink" to="Pickup">Pick-up</NavLink>
          {/* <NavLink className= "navlink" to="Cart">CART</NavLink> */}
          <NavLink className= "navlink" to="Search">SEARCH</NavLink>
        
        </Nav>
      </Navbar.Collapse>

      <Form className="searchbarnav">
        <div className=" d-flex dflex">
        <FormControl type="search" placeholder=" Enter your location" className="menav-2" aria-label="Search" />
        <IconContext.Provider value={{ className: "fa", size: "1.2rem", color: "gray" }}>
          <div className="navbtn"><FaSistrix /></div>
        </IconContext.Provider>
        </div>
      </Form>

     
      
      <NavLink to="LoginSignup" className='navlink'>
      <Button className="d-flex login" >
     <img src={pic1} className="img-fluid" alt=' ' />
      
      </Button>
      </NavLink>
      <Registration showModal1={showModal1} setShowModal1={setShowModal1}/> 
    
    </Container>
  </Navbar>

  );

};
export default Navigation;