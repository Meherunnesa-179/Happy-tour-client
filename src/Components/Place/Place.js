import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Place = ({place}) => {
    const {_id , name , cost ,img , emiForm  ,overview} = place ; 
    return (
        <div>
            <Container>
            <Card style={{height:"500px"}} className="rounded-3 mb-5">
    <Card.Img variant="top" style={{height:"200px"}} src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        <p>
          {overview.slice(0,100)}
            <h1>Cost : ${cost}</h1>
            <h4>Emi-Form : ${emiForm}</h4>
        </p>
      </Card.Text>
    </Card.Body>
    <Card.Footer className="bg-primary">
      <NavLink className="text-decoration-none text-white" to={ `/places/${_id}`}>Book Now</NavLink>
    </Card.Footer>
  </Card> 
            </Container>
        </div>
    );
};

export default Place;