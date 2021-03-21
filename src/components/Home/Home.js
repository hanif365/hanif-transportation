import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import bgImgHome from '../../Assets/Images/bg-home.jpg';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar></Navbar>
            <Carousel></Carousel>
            <div className="my-5 text-center service-container">
                <div className="py-5">
                    <h2>OUR SERVICES</h2>
                    <hr />
                </div>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;