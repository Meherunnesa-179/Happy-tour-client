import React, { useState } from 'react';
import "./AdminPanel.css"
import { Container } from 'react-bootstrap';
import AddNewPlace from '../AddNewPlace/AddNewPlace';
import SelectedPackage from '../SelectedPackage/SelectedPackage';

const AdminPanel = () => {
    const [active , setActive] = useState("Add New Place")
    return (
        <div>
           <Container>
           <div className="row">
                <div className="col-md-3">
                    <ul>
                       <li><input onClick={() => setActive("Add New Place")} className="btn btn-primary w-100" type="button" value="Add New Place" /> </li>
                        <li><input onClick= {() => setActive("Manage Selected Package")} className="btn btn-primary w-100" type="button" value="Manage Selected Package" /> </li>
                    </ul>
                </div>
                <div className="col-md-9">
                    {
                        (active === "Add New Place" && <AddNewPlace/>) ||
                        (active === "Manage Selected Package" && <SelectedPackage/>)
                    }
                </div>
                </div>
           </Container>
           
        </div>
    );
};

export default AdminPanel;