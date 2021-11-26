import React from 'react';
import './Department.css'

const Department = ({dp}) => {
    const {name, image, details} = dp;
    console.log(dp);
    return (
        <div className="department" style={{
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
           <p>Details:{details}</p>
        </div>
    );
};

export default Department;