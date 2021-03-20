import React, { useState } from 'react';
import './Destination.css'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import fakeImg from '../../Assets/Images/pexels-pixabay-159148.jpg'
import DatePicker from 'react-date-picker';
import placeLinkImg from '../../Assets/Images/placelink1.png'
import transportData from '../../data/data.json'
import car from '../../Assets/Images/car.png'
import bus from '../../Assets/Images/bus.png'
import train from '../../Assets/Images/train.png'
import bike from '../../Assets/Images/bike.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from '../GoogleMap/GoogleMap';

const Destination = () => {
    const [show, setShow] = useState(true);
    const { rideType } = useParams();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(watch("example")); // watch input value by passing the name of it

    // for date
    const [value, onChange] = useState(new Date());

    const [pickFrom, setPickForm] = useState('');
    const [pickTo, setPickTo] = useState('');

    const handlePickFrom = (e) => {
        console.log(e.target.name, e.target.value);
        setPickForm(e.target.value);
    }

    const handlePickTo = (e) => {
        console.log(e.target.name, e.target.value);
        setPickTo(e.target.value);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="container-fluid py-5">
                <div className="row">
                    {show ? <div className="col-md-8 ride-info m-auto py-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-success p-4">
                            <label htmlFor="pickFrom" className="form-label">Pick From</label>
                            <input name="example" className="form-control" onBlur={handlePickFrom} name="pickFrom" id="pickFrom" ref={register} />
                            {errors.example && <span>This field is required</span>}

                            <label htmlFor="pickTo" className="form-label mt-3">Pick To</label>
                            <input name="exampleRequired" className="form-control" onBlur={handlePickTo} name="pickTo" id="pickTo" ref={register({ required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <label className="form-label mt-3" htmlFor="date">Date </label>
                            <DatePicker onChange={onChange} value={value} id="date" className="ms-3" />



                            <input onClick={() => setShow(!show)} className="w-100 mt-4" type="submit" />
                        </form>
                    </div> :
                        <div className="col-md-5 ride-details m-auto py-5">
                            <div className="bg-primary p-4">
                                <div className="card mb-3 bg-success">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img className="place-link-img" src={placeLinkImg} alt="placeLink" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                {/* <h5 className="card-title">{rideType}</h5> */}
                                                <h6>Pick From : {pickFrom}</h6>
                                                <h6>Pick To : {pickTo}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="card mb-3 text-center">
                                    <div className="row g-0">
                                        <div className="col-md-3 pt-3">
                                            {rideType === 'BIKE' ? <img className="transport-img" src={bike} alt="bike-image" /> : ''}
                                            {rideType === 'CAR' ? <img className="transport-img" src={car} alt="car-image" /> : ''}
                                            {rideType === 'BUS' ? <img className="transport-img" src={bus} alt="bus-image" /> : ''}
                                            {rideType === 'TRAIN' ? <img className="transport-img" src={train} alt="train-image" /> : ''}
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <h5 className="card-title">{rideType}</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <h5><FontAwesomeIcon icon={faUserFriends} /> 2</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <h5>$70</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="card mb-3 text-center">
                                    <div className="row g-0">
                                        <div className="col-md-3 pt-3">
                                            {rideType === 'BIKE' ? <img className="transport-img" src={bike} alt="bike-image" /> : ''}
                                            {rideType === 'CAR' ? <img className="transport-img" src={car} alt="car-image" /> : ''}
                                            {rideType === 'BUS' ? <img className="transport-img" src={bus} alt="bus-image" /> : ''}
                                            {rideType === 'TRAIN' ? <img className="transport-img" src={train} alt="train-image" /> : ''}
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <h5 className="card-title">{rideType}</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <h5><FontAwesomeIcon icon={faUserFriends} /> 2</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <h5>$80</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="card mb-3 text-center">
                                    <div className="row g-0">
                                        <div className="col-md-3 pt-3">
                                            {rideType === 'BIKE' ? <img className="transport-img" src={bike} alt="bike-image" /> : ''}
                                            {rideType === 'CAR' ? <img className="transport-img" src={car} alt="car-image" /> : ''}
                                            {rideType === 'BUS' ? <img className="transport-img" src={bus} alt="bus-image" /> : ''}
                                            {rideType === 'TRAIN' ? <img className="transport-img" src={train} alt="train-image" /> : ''}
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <h5 className="card-title">{rideType}</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <h5><FontAwesomeIcon icon={faUserFriends} /> 2</h5>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <h5>$50</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                        </div>
                    }
                    {/* <div className="col google-map">
                        <GoogleMap></GoogleMap>
                    </div> */}
                </div>
                <div className="row">
                    <div className="col google-map">
                        <GoogleMap></GoogleMap>
                    </div>
                </div>
            </div>
        </div>
    );

};

// export default Destination;

export default GoogleApiWrapper({
    apiKey: ('')
})(Destination)