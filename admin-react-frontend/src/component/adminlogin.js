import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button} from 'react-bootstrap';



const Adminlogin = () => {

    let formadmin = {
        width: "500px",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    }

    let fontstyle = {
        color: "white",
        width: "300px"
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="m-3 p-5 bg-dark" style={formadmin}>
                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Admin username</Form.Label>
                    <Form.Control placeholder="admin username" />
                </Form.Group>
                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button bsStyle="primary">Submit</Button>

            </div>
        </div>
    )
};

export default Adminlogin;