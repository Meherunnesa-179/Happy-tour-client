import React from 'react';
import './Footer.css'
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <div>
        <div className="text-white background justify-content-center">
      <div className="py-4">
          <Container>
              <Row>
                  <Col>
                <h6 > Popular Destination</h6>
                      <ul>
                          <li>Sundorbans</li>
                          <li>Mynamoti</li>
                          <li>Chadar Trek</li>
                          <li>Everest</li>
                      </ul>
                  </Col>
                  <Col>
                  <h5>Travel</h5>
                  <ul>
                      <li>Tour</li>
                      <li>Destination</li>
                  </ul>
                  </Col>
                  <Col>
                  <h6>Help</h6>
                  <ul>
                      <li>About Us</li>
                      <li>Our Team</li>
                      <li>Contact us</li>
                      <li>Blog</li>
                  </ul>
                  </Col>
                  <Col>
                  <h6>SignUP for our news letter</h6>
                  <input type="email" name="input email" id="" placeholder="input your Email" />
                  <button type="submit">Submit</button>
                  </Col>
              </Row>
          </Container>
      </div>
      <hr className="m-0 p-0" />
      <p className="text-center m-0 py-3 copyright">
        Copyright © All Rights Reserved by Happy-Tour Community <br />
        2021
      </p>
    </div>
        </div>
    );
};

export default Footer;