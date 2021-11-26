import React, { useEffect, useState } from 'react';
import allDoctorData from '../../../FakeData/Doctors.json'
import Doctor from './../Doctor/Doctor';
import './Doctors.css'


const Doctors = () => {
    const[doctorsData,setDoctorsData] = useState([]);
    useEffect(() => {
        setDoctorsData(allDoctorData);


    },[])
    return (

        <div id="doctors">
            <h1 className="fw-bold bg-primary p-2 text-white"> Our Specialized Doctors</h1>
            <div className="doctor-container">
           
           {
               doctorsData.map(department =><Doctor
               key={department.id}
               dp={department}

               ></Doctor>)
           }
       
       </div>
        </div>
    );
};

export default Doctors;