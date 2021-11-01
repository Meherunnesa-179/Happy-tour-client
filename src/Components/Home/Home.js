import React from 'react';
import './home.css'
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { Carousel, Container } from 'react-bootstrap';
import banner1 from '../../Assets/banner3.jpg';
import banner2 from '../../Assets/banner2.jpg';
import banner3 from '../../Assets/banner1.jpg';
import useAuth from '../../Hooks/useAuth';
import Place from '../Place/Place';


const Home = () => {
    const {places} = useAuth();
    const features = places.slice(0,6);
    return (
        <div>
             <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Happy Tour</h1>
                        <p>To the world of an incredible vacation.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Happy Tour</h3>
                        <p>No matter where you're going from, we take you there.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Happy Tour</h3>
                        <p>A Destination for the New Millennium.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
        <Container className="py-5">
          <Slide top>
          <h2 className="text-center  mb-2">Where Do You Want To Go?</h2>
          </Slide>
          <Slide top>
            <p className="text-muted text-center">
              Find Your Place
            </p>
          </Slide>
        <Zoom>
        <div className=" row row-cols-1 row-cols-md-3 g-4  m-4">
          {
          features?.map(place => <Place
            key = {place._id}
            place = {place}>
            </Place>
          )};
          </div>
        </Zoom>
        </Container>
        </div>
    );
};

export default Home;