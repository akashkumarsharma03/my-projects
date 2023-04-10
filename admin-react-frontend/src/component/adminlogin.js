import React, { useState } from "react";
import Form from 'react-bootstrap/Form';


const Adminlogin = () => {

    let fontstyle = {
        color: "white"
    }
    // const [message, setName] = useState('');

    // const handleInput = (event) => {
    //     setName({ name: event.target.value });
    // };

    // const handleClick = event => {
    //     event.preventDefault();

    //     console.log('handleClick', message);
    // };
    return (
        <>
            <div className="m-3 p-5 bg-dark">
                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Admin username</Form.Label>
                    <Form.Control placeholder="admin username" />
                </Form.Group>
                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <button ClassName="input-group-text shadow-sm btn-primary btn text-white"
                    id="inputGroup-sizing-sm"><span class="material-symbols-outlined">
                        send
                    </span></button>
            </div>
        </>
    )
};

export default Adminlogin;