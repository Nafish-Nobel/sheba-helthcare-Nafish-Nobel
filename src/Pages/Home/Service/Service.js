import React from 'react';

import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, images, details} = service;
    return (
        <div className="service pb-3" style={{
            width:'300px',
            border:'1px solid gray',
            margin:'9px',
            minHeight:'400px'
            }}>
            
           <img style={{
               width:'100%',
               height:'200px'
               }} src={images} alt=""/>
           <h3>{name}</h3>
           <p>{details}</p>

        <Link to={`/booking/${id}`}>
        <button className="btn btn-warning">Read{name.toLowerCase()}</button>
        </Link>
           
        </div>
    );
};

export default Service;