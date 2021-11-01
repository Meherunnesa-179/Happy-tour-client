import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AddNewPlace from '../AddNewPlace/AddNewPlace';
import MyPackage from '../MyPackage/MyPackage';
import SelectedPackage from '../SelectedPackage/SelectedPackage';

const Dashboard = () => {
    const [active , setActive] = useState("My Package")
    return (
        <div>
    <Container>
           <div className="row">
                <div className="col-md-3">
                    <ul>
                    <li><input onClick={() => setActive("Add New Place")}  className="btn btn-primary w-100" type="button" value="Add A New Package" /> </li>
                        <li><input onClick={() => setActive("My Package")}  className="btn btn-primary w-100" type="button" value="My Package" /> </li>
                        <li><input onClick={() => setActive("Manage Selected Package")}  className="btn btn-primary w-100" type="button" value="Manage All Package" /> </li>
                    </ul>
                </div>
                <div className="col-md-9">
                {
                        (active === "Add New Place" && <AddNewPlace
                        />) ||
                        (active === "Manage Selected Package" && <SelectedPackage/>) ||
                        (active === "My Package" && <MyPackage/>)
                    }
                </div>
                </div>
                <button className="btn btn-warning px-5 m-4"> <Nav.Link as ={NavLink} to="/home" className="text-white">Go back to home</Nav.Link></button>
           </Container>
        </div>
    );
};

export default Dashboard;