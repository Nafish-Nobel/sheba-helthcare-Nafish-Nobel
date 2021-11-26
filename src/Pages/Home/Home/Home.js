import React from 'react';
import Services from '../Services/Services';
import Departments from '../Departments/Departments';
import Doctors from '../Doctors/Doctors';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Departments></Departments>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;