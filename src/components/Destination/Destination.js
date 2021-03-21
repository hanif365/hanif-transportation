import React, { useState } from 'react';
import './Destination.css'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import DatePicker from 'react-date-picker';
import placeLinkImg from '../../Assets/Images/placelink1.png'
import transportData from '../../data/data.json'
import car from '../../Assets/Images/car.png'
import bus from '../../Assets/Images/bus.png'
import train from '../../Assets/Images/train.png'
import bike from '../../Assets/Images/bike.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faUserFriends } from '@fortawesome/free-solid-svg-icons'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from '../GoogleMap/GoogleMap';

const Destination = () => {
    const [show, setShow] = useState(true);
    const { rideType } = useParams();           // useParams()

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    // for date
    const [value, onChange] = useState(new Date());

    const [pickFrom, setPickForm] = useState('');       // use useState()
    const [pickTo, setPickTo] = useState('');

    const handlePickFrom = (e) => {                     // use handlePickFrom to know the place where from passenger picked
        console.log(e.target.name, e.target.value);
        setPickForm(e.target.value);
    }

    const handlePickTo = (e) => {                       // use handlePickFrom to know the place where passenger want to go
        console.log(e.target.name, e.target.value);
        setPickTo(e.target.value);
    }
    return (
        <div className="destination-container">
            <Navbar></Navbar>
            <div className="container-fluid py-5">
                <div className="row">
                    {show ? <div className="col-md-8 ride-info m-auto py-5 select-route-form">
                        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                            <h3>SELECT YOUR JOURNEY ROUTE <FontAwesomeIcon icon={faPlane} /></h3>
                            <label htmlFor="pickFrom" className="form-label"><b>Pick From</b></label>
                            <input name="example" className="form-control" onBlur={handlePickFrom} name="pickFrom" id="pickFrom" ref={register} />
                            {errors.example && <span>This field is required</span>}

                            <label htmlFor="pickTo" className="form-label mt-3"><b>Pick To</b></label>
                            <input name="exampleRequired" className="form-control" onBlur={handlePickTo} name="pickTo" id="pickTo" ref={register({ required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <label className="form-label mt-3" htmlFor="date"><b>Date</b></label>
                            <DatePicker onChange={onChange} value={value} id="date" className="ms-3" />



                            <input onClick={() => setShow(!show)} className="w-100 mt-4 py-2" type="submit" />
                        </form>
                    </div> :
                        <div className="col-md-5 ride-details m-auto py-5">
                            <div className="p-4 ride-content">
                                <div className="card mb-3 bg-success">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img className="place-link-img" src={placeLinkImg} alt="placeLink" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h6 className="text-light">Pick From : {pickFrom}</h6>
                                                <h6 className="text-light">Pick To : {pickTo}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3 text-center">
                                    <div className="row g-0">
                                        {rideType ? <div className="col-md-3">
                                            {rideType === 'bike' ? <img className="transport-img" src={bike} alt="bike-image" /> : ''}
                                            {rideType === 'car' ? <img className="transport-img" src={car} alt="car-image" /> : ''}
                                            {rideType === 'bus' ? <img className="transport-img" src={bus} alt="bus-image" /> : ''}
                                            {rideType === 'train' ? <img className="transport-img" src={train} alt="train-image" /> : ''}
                                        </div> :

                                            <div className="col-md-3">
                                                <img className="transport-img" src={bike} alt="bike-image" />
                                            </div>
                                        }
                                        {rideType ? <div className="col-md-3">
                                            <div className="card-body">
                                                <h5 className="card-title">{rideType}</h5>
                                            </div>
                                        </div> :
                                            <div className="col-md-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">bike</h5>
                                                </div>
                                            </div>
                                        }
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
                                <div className="card mb-3 text-center">
                                    <div className="row g-0">
                                        {rideType ? <div className="col-md-3">
                                            {rideType === 'bike' ? <img className="transport-img" src={bike} alt="bike-image" /> : ''}
                                            {rideType === 'car' ? <img className="transport-img" src={car} alt="car-image" /> : ''}
                                            {rideType === 'bus' ? <img className="transport-img" src={bus} alt="bus-image" /> : ''}
                                            {rideType === 'train' ? <img className="transport-img" src={train} alt="train-image" /> : ''}
                                        </div> :
                                            <div className="col-md-3">
                                                <img className="transport-img" src={bike} alt="bike-image" />
                                            </div>
                                        }
                                        {rideType ? <div className="col-md-3">
                                            <div className="card-body">
                                                <h5 className="card-title">{rideType}</h5>
                                            </div>
                                        </div> :
                                            <div className="col-md-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">bike</h5>
                                                </div>
                                            </div>

                                        }
                                        <div className="col-md-3">
                                            <div className="card-body">
                                                <h5><FontAwesomeIcon icon={faUserFriends} /> 1</h5>
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
                                        {rideType ? <div className="col-md-3">
                                            {rideType === 'bike' ? <img className="transport-img" src={bike} alt="bike-image" /> : ''}
                                            {rideType === 'car' ? <img className="transport-img" src={car} alt="car-image" /> : ''}
                                            {rideType === 'bus' ? <img className="transport-img" src={bus} alt="bus-image" /> : ''}
                                            {rideType === 'train' ? <img className="transport-img" src={train} alt="train-image" /> : ''}
                                        </div> :
                                            <div className="col-md-3">
                                                <img className="transport-img" src={bike} alt="bike-image" />
                                            </div>
                                        }
                                        {rideType ? <div className="col-md-3">
                                            <div className="card-body">
                                                <h5 className="card-title">{rideType}</h5>
                                            </div>
                                        </div> :
                                            <div className="col-md-3">
                                                <div className="card-body">
                                                    <h5 className="card-title">bike</h5>
                                                </div>
                                            </div>
                                        }
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
                        </div>
                    }
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


export default GoogleApiWrapper({
    apiKey: ('')
})(Destination)