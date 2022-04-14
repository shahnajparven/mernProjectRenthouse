import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import $ from 'jquery';
import styled from 'styled-components';
import './Pickup.css';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import pickup from '../../project-pic/pickup.png';
import pickup1 from '../../project-pic/pick.jpg';
import { Tooltip, OverlayTrigger, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'
import context from 'react-bootstrap/esm/AccordionContext';
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { createPickup, clearErrors } from "../../actions/pickupAction";
import { NEW_PICKUP_RESET } from "../../constants/pickupConstants";
import { Link } from "react-router-dom";

const Test = ({ history }) => {

    return (
        <>
            <div className="pickup">
                <div className="pickup-container">
                    <div className="piv">

                    <Link className="pickup-link" to="Notes"> <p className="pickup-button" > PICK-UP </p></Link> 

                    </div>
                </div>
            </div>
        </>
    );
};
export default Test;