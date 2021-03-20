import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'
import Navbar from '../Navbar/Navbar';
import blogImg from '../../Assets/Images/bg-home.jpg'

const Blog = () => {
    return (
        <div className="container blog-container py-5 my-5">
            <Navbar></Navbar>
            <div className="row">
                <div className="col">
                    <div>
                        <h1>Blog Page will come very soon....</h1>
                        <img className="my-2" src={blogImg} alt="error-message" />
                        <h3>Please wait....Thank You.</h3>
                        <Link className="btn btn-danger" to="/">Close</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;