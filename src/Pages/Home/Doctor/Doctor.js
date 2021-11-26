import React from 'react';
import './Doctor.css'

const Doctor= ({dp}) => {
    const {name,possiton, image, details} = dp;
    console.log(dp);
    return (
        <div className="doctor" style={{
            width:'300px',
            border:'1px solid gray',
            margin:'9px',
            minHeight:'400px'
            }}>
     
            <img style={{
               width:'100%',
               height:'200px'
               }} src={image} alt="" />
           <h3>{name}</h3>
           <h4>possition:{possiton}</h4>
           <p>Details:{details}</p>
        </div>
    );
};

export default Doctor;