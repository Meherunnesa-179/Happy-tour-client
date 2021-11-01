import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../Assets/tourLogo-removeb (1).png'
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
  const {user , logOut} = useFirebase();
    return (
        <div>
              <Navbar className="header" expand="lg">
                <Container>
                 <Navbar.Brand  className="text-white" to="/home">
                        <img className="logo"width="70px" src={logo} alt="Logo" />{" "}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto ">
                        <Nav.Link as={NavLink} to="/home" className="text-white">Home</Nav.Link>
                        <Nav.Link as ={NavLink} to="/about" className="text-white">About us</Nav.Link>
                        <Nav.Link as={NavLink} to="/places" className="text-white">Upcoming Trips</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog" className="text-white">Blog</Nav.Link>
                        
                {!user?.email ?  (
                    <>
                      <Nav.Link as={NavLink} to="/register" className="text-white">
                        Register
                      </Nav.Link>

                      <Nav.Link className="text-white" as={NavLink} to="/login">
                        Log in
                      </Nav.Link>
                    </>
                    ) : (
                      <>
                        <Nav.Link as={NavLink} to="/dashboard" className="text-white">Dashboard</Nav.Link>
                    <NavDropdown
                      title={
                        <img
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                          }}
                          src={user?.photoURL}
                          alt=""
                        />
                      }
                    >
                      <div className="text-center">
                        <h6>{user?.displayName}</h6>
                        <p className="m-0 mb-2">{user?.email}</p>
                        <button onClick={logOut} className="btn btn-primary px-5 mx-1">
                          Log Out
                        </button>
                      </div>
                    </NavDropdown>
                    <Nav.Link as={NavLink} to="/adminpanel" className="text-white">AdminPanel</Nav.Link>
                    </>
                  )}
          </Nav>
        </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;