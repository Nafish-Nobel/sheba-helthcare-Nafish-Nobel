import React, { useEffect, useState } from 'react';
import allDepartmetnData from'../../../FakeData/departments.json'
import Department from './../Department/Department';
import './Departments.css';


const Departments = () => {
    const [departmentsData,setDepartmentsData] = useState([]);
    console.log(allDepartmetnData);

    useEffect(() => {
        setDepartmentsData(allDepartmetnData);


    },[])
    return (
     
        <div id="departments">
            <h1 className="fw-bold bg-primary p-2 text-white"> Departments</h1>
            <div className="department-container">
           
           {
               departmentsData.map(department =><Department
               key={department.id}
               dp={department}

               ></Department>)
           }
       
       </div>
        </div>
    );
        
};

export default Departments;