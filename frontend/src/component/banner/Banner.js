import React, { useState, Fragment }  from "react";
import pic from '../../project-pic/carousel.jpg';
import pic2 from '../../project-pic/dhak.jpg';
import pic1 from '../../project-pic/search.png';
import pic3 from '../../project-pic/guest5.png';
import Carousel from 'react-bootstrap/Carousel';
import {Form,FormControl} from 'react-bootstrap';
import { FaSistrix,FaEject } from "react-icons/fa";
import { IconContext } from "react-icons";
import $ from 'jquery';
import './Banner.css';
import '../../Main.css';
import {Link, NavLink,useLocation} from 'react-router-dom';



const Banner = ({ history }) => {

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/Products/${keyword}`);
    } else {
      history.push("/Products");
    }
  };













    
    //for scrolled jquery
    $(window).scroll(function () {
      $('.searchbarbanner').toggleClass('scrolled', $(this).scrollTop() > 80)
    });


  return (
    <>

    {/* <Form className="d-flex searchbarbanner" onSubmit={searchSubmitHandler}>
          <FormControl type="search" placeholder=" Enter your location" className="me-2" aria-label="Search"
           onChange={(e) => setKeyword(e.target.value)}
          />
          <IconContext.Provider value={{ className: "fa", size: "1.2rem", color: "gray" }}>
            <div className="bannerbtn"><FaSistrix /></div>
          </IconContext.Provider>
        
        </Form> */}



                <div className="banner-text">
                {/* <img src={pic} /> */}
                    <h4>Find your dream home here...</h4>
                    <br/>
              
                  <NavLink className="navlink" to="Search"><button className="search-btn">SEARCH</button></NavLink>
                </div>

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
            src={pic2}
            alt="Second slide"
          />
        </Carousel.Item>
        
        


        

      </Carousel>



    </>
  );
};

export default Banner;