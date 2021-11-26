import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const FooterSection = () => {
    return (
        <Row className='futter-section'>
            <Col>
          <h1>Doctor Chamber</h1>
          <br />
          <p> Doctor is a MBBS MPH (Medicine) Post Graduate Fellowship on Migrant Refugee Health (PGFMRH-UK), He is available through (Online/Offline) chamber time 10:00 Pm to 6:00 Pm at  Sheba Health Care </p>
            </Col>
            <Col>
              <h3>Departments</h3>
              <br />
              <p>Dental Services</p>
              <p>Emergency Medicine</p>
              <p>Ophthalmology</p>
              <p>Orthopedic Surgery</p>
              <p>Radiation Oncology</p>
            </Col>
            <Col>
             <h2>Opening Hours</h2>
             <br />
             <p>Mon-Tues: <span>              6:00-10:00</span></p>
             <hr />
             <p>Wed-Thurs: 6:00-10:00</p>
             <hr />
             <p>Sat-Sun: 6:00-10:00</p>
             <hr />
             <p>Friday: Closed</p>
             <hr />
            </Col>
        </Row>
    );
};

export default FooterSection;