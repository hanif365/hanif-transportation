import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer id="footer-section">
                <span>@{new Date().getFullYear()} <a href="#" className="text-decoration-none">Hanif Transportation.</a> All rights
            reserved.</span>
            </footer>

            <div>
                <a href="#" className="bottom-to-top"><FontAwesomeIcon icon={faArrowUp} size="2x" /></a>
            </div>
        </div>
    );
};

export default Footer;