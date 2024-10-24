import React from 'react'
import logo from '../Assets/logo.svg';
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
    <div className='footer-section-one'>
    <div className='footer-logo-container'>
        <img src={logo} alt="website logo"/>
        </div>
        <div className='footer-icons'>
            <FaInstagram/>
            <FaYoutube/>
            <FaSquareXTwitter/>
            <FaWhatsapp/>
        </div>
    </div>

        
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                 <span>Quality</span>
                 <span>Help</span>
                 <span>About</span>
                 <span>Career</span>
                 <span>Work</span>
                 <span>Testimonials</span>
            </div>
            <div className='footer-section-columns'>
                 <span>123-456-789-00</span>
                 <span>hello@foodie.com</span>
                 <span>support@foodie.com</span>
            </div>
            <div className='footer-section-columns'>
                 <span>Terms and Conditions</span>
                 <span>Privacy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer