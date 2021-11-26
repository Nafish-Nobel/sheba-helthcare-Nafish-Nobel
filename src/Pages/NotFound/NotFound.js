import React from 'react';
import notFound from '../../images/ffffffffff-2.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img src={notFound} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;