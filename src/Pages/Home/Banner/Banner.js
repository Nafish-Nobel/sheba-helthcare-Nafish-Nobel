import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'

const Banner = () => {
  return (
      

        <>
        <img className="img-fluid" src="https://media.istockphoto.com/vectors/gynecologist-and-pregnant-woman-in-clinic-office-vector-id1202131297?k=20&m=1202131297&s=612x612&w=0&h=EzxkN0Ci-cbLGyTEiyq_pWu5sQOD4YM-vZJ2gAegAXY=" alt=""/>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 className="text-primary">Welcome to Sheba Health Care </h1>
      <h2 className="text-warning">We Are Always With You</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 className="text-primary">A Team of Medical Profesionals</h1>
      <h2 className="text-warning">To Take Care Of Your Health</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            

        </>
    );
};

export default Banner;