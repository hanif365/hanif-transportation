import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import bgImgHome from '../../Assets/Images/bg-home.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar></Navbar>
            <img className="bg-img-home" src={bgImgHome} alt="bg-img"/>
        </div>
    );
};

export default Home;