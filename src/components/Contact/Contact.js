import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import Navbar from '../Navbar/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Our Coverage Area</h1>
            <GoogleMap></GoogleMap>
        </div>
    );
};

export default Contact;
