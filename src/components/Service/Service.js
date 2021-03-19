import React from 'react';
import './Service.css'

const Service = (props) => {
    console.log(props.service);
    const { transportName, mainImage } = props.service;
    return (
        <div>
            <div className="card main-card m-3">
                <img src={mainImage} className="card-img-top" alt="service-image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Ride</a>
                </div>
            </div>
        </div>
    );
};

export default Service;