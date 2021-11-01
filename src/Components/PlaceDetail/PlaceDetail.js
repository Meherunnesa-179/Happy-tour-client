import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Roll from 'react-reveal/Roll';

const PlaceDetail = () => {
    const {id} = useParams();
    const [place , setPlace] = useState({});
    console.log(place);
    useEffect( () =>{
        fetch(`https://desolate-dusk-69405.herokuapp.com/places/${id}`)
        .then(res => res.json())
        .then(data =>{
            if (data?._id) {
                setPlace(data);
              } else {
                alert("something went wrong!");
              }
            });
    } , [])

    return (
        <div>
            <Roll>
            <div className="my-4">
      {place?.name ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img style={{height:"300px"}} className="img-fluid" src={place?.img} alt="" />
            </Col>
            <Col md={6}>
                <input type="email" name="" id="" placeholder="Put your email" /> <br />
                <input type="password" name="" id="" placeholder="password" /> <br />
                <input type="submit" value="Confirm Booking" />
            </Col>
              </Row>
               <Row>
               <Col md={12} className="d-flex justify-content-center flex-column">
              <h2>{place.name}</h2>
              <h6>{place.cost}</h6>
              <h6>{place.emiForm}</h6>
              <h6 className="text-primary">Duration : {place.duration}</h6>
              <p>{place.overview}</p>
              </Col>
               </Row>
         <NavLink to="/home" className="ms-5">Go to home</NavLink>
               
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">Content Loading..</h1>
        </div>
      )}
    </div>
            </Roll>
        </div>
    );
};

export default PlaceDetail;