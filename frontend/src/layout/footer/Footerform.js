import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';

const Footerform = () => {
    return (
        <Form className="d-flex">
            <Form.Group as={Row} className="mb-2" controlId="formPlaintextEmail">            
                <Col lg="8" xs="8">
                <Form.Control className="form-input" type="email" placeholder="Enter email" />
                </Col>
                <Col lg="4" xs="4">
                <Button className="footer-button">Subscrive</Button>
                </Col>
            </Form.Group>
          
        </Form>

    );
};
export default Footerform;
