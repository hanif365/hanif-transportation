import React, { useEffect, useState } from 'react';
import transportData from '../../data/data.json'
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(transportData);
    }, [])
    return (
        <div className="d-flex flex-wrap m-auto">
            {
                services.map(service => <Service service={service}></Service>)
            }
        </div>
    );
};

export default Services;