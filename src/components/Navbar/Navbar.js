import React, { useContext } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            {/* <h1>User Name : {loggedInUser.name}</h1>
            <h1>User Email : {loggedInUser.email}</h1> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">Hanif Transportation</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                            <Link to="/service/:rideType" className="nav-link">Destination</Link>
                            <Link to="/blog" className="nav-link">Blog</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                            {
                                loggedInUser.email ? <Link className="nav-link user-name">{loggedInUser.name}</Link> : <Link to="/login" className="nav-link">Login</Link>
                            }
                            <button onClick={() => setLoggedInUser({})}>Sign out</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;