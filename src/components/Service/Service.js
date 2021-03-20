import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide } from '@fortawesome/free-solid-svg-icons'

const Service = (props) => {
    const { transportName, mainImage } = props.service;
    const history = useHistory();

    const handleRide = (rideType) => {
        history.push(`/service/${rideType}`);
    }

    return (
        <div className="main-card">
            <div className="card  m-3">
                <img src={mainImage} className="card-img-top" alt="service-image" />
                <div className="card-body">
                    <h5 className="card-title">Transport Name : {transportName}</h5>
                    <p className="card-text">We Provide worldclass facilities with reasonable fare. If you wanted to enjoy <b>{transportName}</b> journey please book your seat.</p>
                    <button onClick={() => handleRide(transportName)} className="btn btn-info px-5">GO TRAVEL <FontAwesomeIcon icon={faCarSide} /></button>
                </div>
            </div>
        </div>
    );
};

export default Service;