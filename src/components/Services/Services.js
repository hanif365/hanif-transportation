import React, { useEffect, useState } from 'react';
import transportData from '../../data/data.json'
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() =>{
        setServices(transportData);
        // console.log(transportData);
    },[])
    return (
        <div className="d-flex flex-wrap m-auto">
            {/* <h1>This is {services[0].transportName} Services</h1> */}
            {
                services.map(service => <Service service={service}></Service>)
            }
        </div>
    );
};

export default Services;