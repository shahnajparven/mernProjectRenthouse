import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import { IconContext } from "react-icons";
import Footerform from './Footerform.js';
import Footericon from './Footericon.js';

const Footer = () => {
    return (
        <section className="footer">
            <div className='footer-container'>
                <div className='footercontent'>
                    <div className='flexcontent'>
                        <div className='leftcontent'>
                            <h3>Stay in Touch</h3>
                            <hr />
                            <p>Receive the latest news,special offers and exclusives.</p>
                            <Footerform />
                        </div>
                        <div className='rightcontent'>
                            <Footericon />
                        </div>
                    </div>

                    <div className="copyright-text">
                        <hr />
                        <p>To-Let | <small>Copyright © 2022 GUB. 182-batch final year project.</small></p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Footer;
