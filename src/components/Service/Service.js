import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide} from '@fortawesome/free-solid-svg-icons'

const Service = (props) => {
    console.log("Aj khusir din",props.service.transportName);
    const { transportName, mainImage } = props.service;
    const history = useHistory();

    const handleRide = (rideType) =>{
        history.push(`/service/${rideType}`);
    }

    // const handleBook = (bedType) => {
    //     history.push(`/book/${bedType}`);
    // }

    return (
        <div className="main-card">
            <div className="card  m-3">
                <img src={mainImage} className="card-img-top" alt="service-image" />
                <div className="card-body">
                    <h5 className="card-title">Transport Name : {transportName}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={() => handleRide(transportName)} className="btn btn-primary">GO TRAVEL <FontAwesomeIcon  icon={faCarSide} /></button>
                </div>
            </div>
        </div>
    );
};

export default Service;