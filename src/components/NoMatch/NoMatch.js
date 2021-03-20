import React from 'react';
import './NoMatch.css'
import errorImg from '../../Assets/Images/error.png'
import { Link } from 'react-router-dom';

const NoMatch = () => {
    return (
        <div className="container error-container py-5 my-5">
            <div className="row">
                <div className="col">
                    <div>
                        <h1>404! Not Found!</h1>
                        <img src={errorImg} alt="error-message" />
                        <h3>Your Search item is not find. Please search another things.</h3>
                        <Link className="btn btn-danger" to="/">Close</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoMatch;