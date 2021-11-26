import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import services from '../../../../src/FakeData/services.json';
const Booking = () => {

    const { serviceId } = useParams();
    const [dataInfo, setDataInfo] = useState([])
    useEffect(() => {
        setDataInfo(services);
    }, [])

    // console.log("after set",dataInfo)

    const singleData = dataInfo?.filter(data => data.id === parseInt(serviceId))
    console.log("after filter", singleData)


    return (
        <div>
            {/* <h2>This is booking: {serviceId}</h2> */}
            <h1>{singleData[0]?.name}</h1>
            <img src={singleData[0]?.images} alt="" />
            <h1>{singleData[0]?.details}</h1>

            

            <h5 className="p-5 text-primary" >{singleData[0]?.dis}</h5>
        </div>
    );
};

export default Booking;