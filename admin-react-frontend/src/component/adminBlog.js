
import React, { useRef, useState } from "react";
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminBlog = () => {
    const [userData, setUserData] = useState({
        title: '',
        category: '',
        tags: ''
    })

    let fontstyle = {
        color: "white"
    }
    let scroll = {
        overflowY: "scroll",
    }

    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        alert(userData.title);
        alert(userData.category);
        alert(userData.tags);


    }

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    return (
        <>
            <div className="m-3 p-5 bg-dark" >
                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" style={fontstyle} >
                        <Form.Label>Blog Title</Form.Label>
                        <Form.Control value={userData.title} name="title"
                            onChange={handleChange} placeholder="Blog Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={fontstyle}>
                        <Form.Label>Blog Category</Form.Label>
                        <Form.Select id="categorySelect" value={userData.category} name="category"
                            onChange={handleChange}>
                            <option value={''}>Select One</option>
                            <option value={'first Category'}> first Category</option>
                            <option value={'second Category'}> second Category</option>

                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" style={fontstyle}>
                        <Form.Label>Blog Tags</Form.Label>
                        <Form.Control value={userData.tags} name="tags"
                            onChange={handleChange} placeholder="Enter Blog Tags" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Blog Summary</Form.Label>
                    <Form.Control placeholder="Blog Summary" />
                </Form.Group>

                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Blog photo</Form.Label>
                    <Form.Control placeholder="input" type="file" />
                </Form.Group>
                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Blog Description</Form.Label>
                    <Form.Control as="textarea" style={scroll} rows={12} placeholder="Blog Description" />
                </Form.Group> */}
                    {/* <ReactQuill theme="snow" className="bg-light text-dark w-5"
                    modules={{
                        toolbar: {
                            container: [
                                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                ['bold', 'italic', 'underline'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                [{ 'align': [] }],
                                ['link', 'image'],
                                ['clean'],
                                [{ 'color': [] }]
                            ],

                        },
                    }}
                    placeholder="Add a description of your event" /> */}

                    <Form.Group>
                        <button type="submit" ClassName="input-group-text shadow-sm btn-primary btn text-white "
                            id="inputGroup-sizing-sm" style={{ marginTop: "10px" }}>send</button>
                    </Form.Group>
                </Form>

            </div>
        </>
    )
};

export default AdminBlog;