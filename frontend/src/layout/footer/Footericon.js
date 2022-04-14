import React from 'react';
import { FaTwitter, FaEnvelope, FaFacebookF } from "react-icons/fa";
import { IconContext } from "react-icons";
import Footer from './Footer';

const Form = () => {
    return (
        <>
         <IconContext.Provider value={{ className: "fa", size: "2rem" }}>
            <div class="icon">
                <a href="mailto:shahnajritu21@gmail.com">
                    <FaEnvelope />
                </a>
                <a title="Make a call" href="tel:+880-1745001556">
                    <FaTwitter />
                </a>
                <a target="_blank" href="https://www.facebook.com/shahnaj.ritu.5">
                    <FaFacebookF />
                </a>
            </div>
            </IconContext.Provider>
        </>
    );
};
export default Form;
