import React, { useEffect, useState } from 'react';
import Service from './../Service/Service';
import allServicesData from '../../../FakeData/services.json'
import './Services.css'


const Services = () => {
 const[servicesData,setServicesData] = useState([])
    useEffect(() => {
        setServicesData(allServicesData)
    },[])


    return (
       <div id={"services"}>
           <h1 className="text-primary mt-5"> Our Services</h1>
            <div className="service-container">
            {
                servicesData.map(service =><Service 
                    key={service.id}
                    service={service}
                ></Service>)
            }
           
        </div>
       </div>
    );
    };

export default Services;