import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import $ from 'jquery';
import './Category.css';
import Container from 'react-bootstrap/esm/Container';
import { NavLink } from 'react-router-dom';
import pic1 from '../../project-pic/home.png';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';


const Category = () => {

    return (
        <Fragment>

            <div className="category">
                <div className="category-container">
                    <form method="GET">
                        <h2>Our Categories</h2>
                        <Row>
                            <Col className="mt-4" xs="auto" lg="4" sm="4" xm="12">

                            <NavLink className="navlink" to="RenthouseChart">
                                <Card className="cat-card1">
                                    <Card.Body>
                                        <Card.Title className="">
                                            <h5>Rent House</h5>
                                        </Card.Title>
                                        <p>You can rent your a house from here  …</p>
                                        <NavLink className="navlink" to="NewProduct"><Button className="cat-btn">View here</Button></NavLink>
                                    </Card.Body>
                                </Card>
                                </NavLink>
                            </Col>
                            <Col className="mt-4" xs="auto" lg="4" sm="4" xm="12">

                            <NavLink className="navlink" to="RenthouseChart">
                                <Card className="cat-card2">
                                    <Card.Body>
                                        <Card.Title className="">
                                            <h5>Bachelor House</h5>
                                        </Card.Title>
                                        <p>We have provide Bechelor fachilites …</p>
                                        <NavLink className="navlink" to="NewProduct"><Button className="cat-btn">View here</Button></NavLink>
                                    </Card.Body>
                                </Card>
                                </NavLink>
                            </Col>

                            <Col className="mt-4" xs="auto" lg="4" sm="4" md="4" xm="12">
  <NavLink className="navlink" to="RenthouseChart">
                                <Card className="cat-card3">
                                    <Card.Body>
                                        <Card.Title className="">
                                            <h5>Sublet</h5>
                                        </Card.Title>
                                        <p>You can give sublet your home  …</p>
                                        <NavLink className="navlink" to="NewProduct"><Button className="cat-btn">View here</Button></NavLink>
                                    </Card.Body>
                                </Card>
                                </NavLink>
                            </Col>

                        </Row>
                        <Row>
                            <Col className="mt-4" xs="auto" lg="4" sm="4" xm="12">
                            <NavLink className="navlink" to="RenthouseChart">
                                <Card className="cat-card4">

                                    <Card.Body>
                                        <Card.Title className="">
                                            <h5>Guest House</h5>
                                        </Card.Title>
                                        <p>Here is our guest house,you can rent your house for guest …</p>
                                        <NavLink className="navlink" to="NewProduct"><Button className="cat-btn">View here</Button></NavLink>
                                    </Card.Body>
                                </Card>
                                </NavLink>
                            </Col>
                            <Col className="mt-4" xs="auto" lg="4" sm="4" xm="12">
                            <NavLink className="navlink" to="RenthouseChart">
                                <Card className="cat-card5">
                                    <Card.Body>
                                        <Card.Title className="">
                                            <h5>Commercial Area</h5>
                                        </Card.Title>
                                        <p>You can rent your house or place to stor furniture here …</p>

                                        <NavLink className="navlink" to="NewProduct"><Button className="cat-btn">View here</Button></NavLink>
                                    </Card.Body>
                                </Card>
                                </NavLink>
                            </Col>

                            <Col className="mt-4" xs="auto" lg="4" sm="4" xm="12">
                            <NavLink className="navlink" to="RenthouseChart">
                                <Card className="cat-card6">
                                    <Card.Body>
                                        <Card.Title className="">
                                            <h5>Garage</h5>
                                        </Card.Title>
                                        <p>You can rent your house or place to stor furniture here …</p>
                                        <NavLink className="navlink" to="NewProduct"><Button className="cat-btn">View here</Button></NavLink>
                                    </Card.Body>
                                </Card>
                                </NavLink>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mt-4" xs="auto" lg="4" sm="4" xm="12">
                            <NavLink className="navlink" to="RenthouseChart">
                                <Card className="cat-card7">

                                    <Card.Body>
                                        <Card.Title className="">
                                            <h5>Locker Service</h5>
                                        </Card.Title>
                                        <p>You can rent your house or place to stor furniture here …</p>
                                        <NavLink className="navlink" to="NewProduct"><Button className="cat-btn">View here</Button></NavLink>
                                    </Card.Body>
                                </Card>
                                </NavLink>
                            </Col>
                        </Row>

                    </form>
                </div>

            </div>



        </Fragment>
    );
};
export default Category;