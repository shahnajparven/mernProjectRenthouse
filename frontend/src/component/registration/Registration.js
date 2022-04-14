import React , { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import './Registration.css';
import { Form, Row, Col } from 'react-bootstrap'
import { FaLock, FaEnvelope, FaUserAlt, FaPhoneAlt, FaRegIdBadge } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import pic from '../../project-pic/login.png';



const Registration = ({ showModal1, setShowModal1 }) => {

    return (
        <>
            {showModal1 ? <div id="reg" >
            <img className="accountpic" src={pic} alt="First slide"/>
                <NavLink to="Account" className='navlink'>Account</NavLink>
               
                <hr />
                <NavLink to="LoginSignup" className='navlink'>Login</NavLink><br/> <hr />
                <NavLink to="Signup" className='navlink'>SignUp</NavLink>
               
            </div>
                : null}



        </>

    );
};
export default Registration;