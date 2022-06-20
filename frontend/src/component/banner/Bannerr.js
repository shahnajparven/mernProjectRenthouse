import React, { useState, Fragment } from "react";
import pic from '../../project-pic/grid1.jpg';
import pic1 from '../../project-pic/guest5.png';
import Carousel from 'react-bootstrap/Carousel';
import { Form, FormControl } from 'react-bootstrap';
import { FaSistrix, FaEject } from "react-icons/fa";
import { IconContext } from "react-icons";
import $ from 'jquery';
import './Banner.css';
import '../../Main.css';
import {Link, NavLink,useLocation} from 'react-router-dom';


const Bannerr = ({ history }) => {



    //for scrolled jquery
    $(window).scroll(function () {
        $('.searchbarbanner').toggleClass('scrolled', $(this).scrollTop() > 80)
    });


    return (
        <>
            <div className="bannerr">
                <div className="bannerr-text">
                {/* <img src={pic} /> */}
                    <h2>Find your dream home here...</h2>
              
                  <NavLink className="navlink" to="Search"><button className="search-btn">SEARCH</button></NavLink>
                </div>
                <div className="bannerr-pic">
                  <img src={pic1} /> 
                </div>
            </div>
        </>
    );
};

export default Bannerr;