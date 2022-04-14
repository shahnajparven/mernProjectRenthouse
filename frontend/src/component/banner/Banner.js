import React from "react";
import pic from '../../project-pic/carousel.jpg';
import pic2 from '../../project-pic/dhak.jpg';
import pic1 from '../../project-pic/search.png';
import Carousel from 'react-bootstrap/Carousel';
import {Form,FormControl} from 'react-bootstrap';
import { FaSistrix,FaEject } from "react-icons/fa";
import { IconContext } from "react-icons";
import $ from 'jquery';
import './Banner.css';
import '../../Main.css';


const Banner = () => {
    
    //for scrolled jquery
    $(window).scroll(function () {
      $('.searchbarbanner').toggleClass('scrolled', $(this).scrollTop() > 80)
    });


  return (
    <>

    <Form className="d-flex searchbarbanner">
          <FormControl type="search" placeholder=" Enter your location" className="me-2" aria-label="Search" />
          <IconContext.Provider value={{ className: "fa", size: "1.2rem", color: "gray" }}>
            <div className="bannerbtn"><FaSistrix /></div>
          </IconContext.Provider>
        
        </Form>

      <Carousel>
        
        
        <Carousel.Item>
          <img
            className="d-block w-100  banner-img"
            src={pic2}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={pic2}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={pic}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>



    </>
  );
};

export default Banner;