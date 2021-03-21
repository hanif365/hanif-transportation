import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light py-3 fixed-top px-3">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#"><FontAwesomeIcon className="logo" icon={faMotorcycle} /> <span className="brand-name">Hanif Transportation</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/home" className="nav-link active" aria-current="page">HOME</Link>
                            <Link to="/destination" className="nav-link">DESTINATION</Link>
                            <Link to="/blog" className="nav-link">BLOG</Link>
                            <Link to="/contact" className="nav-link">CONTACT</Link>
                            {
                                loggedInUser.email ? <Link className="nav-link" id="user-name">{loggedInUser.name}</Link> : <Link to="/login" className="nav-link btn btn-info px-5">LOG IN</Link>
                            }
                            {
                                loggedInUser.email ? <button className="sign-out-btn" onClick={() => setLoggedInUser({})}>SIGN OUT</button> : ''
                            }
                            {/* <button className="sign-out-btn" onClick={() => setLoggedInUser({})}>SIGN OUT</button> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;