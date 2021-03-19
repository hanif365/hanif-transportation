import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">Hanif Transportation</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/home" className="nav-link active" aria-current="page" href="#">Home</Link>
                            <Link to="/destination" className="nav-link" href="#">Destination</Link>
                            <Link to="/blog" className="nav-link" href="#">Blog</Link>
                            <Link to="/contact" className="nav-link" href="#">Contact</Link>
                            <Link to="/login" className="nav-link" href="#">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;