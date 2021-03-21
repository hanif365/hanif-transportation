import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Contact.css'
import contactImg from '../../Assets/Images/banner2.jpg'
import Map from '../Map/Map';

const Contact = () => {
    return (
        <div className="container contact-container py-5 my-5">
            <Navbar></Navbar>
            <div className="row">
                <div className="col">
                    <div>
                        <h1>Contact Page will come very soon....</h1>
                        <img className="my-2" src={contactImg} alt="error-message" />
                        <h3>Please wait....Thank You.</h3>
                        <Link className="btn btn-danger" to="/">Close</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
