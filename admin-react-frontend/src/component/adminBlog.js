
import React, { useRef } from "react";
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminBlog = () => {
    let fontstyle = {
        color: "white"
    }


    return (
        <>
            <div className="m-3 p-5 bg-dark">
                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Blog Title</Form.Label>
                    <Form.Control placeholder="Blog Title" />
                </Form.Group>
                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Blog Category</Form.Label>
                    <Form.Select id="categorySelect">
                        <option> first Category</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Blog Tags</Form.Label>
                    <Form.Control placeholder="Blog Tags" />
                </Form.Group>
                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Blog Summary</Form.Label>
                    <Form.Control placeholder="Blog Summary" />
                </Form.Group>

                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Blog photo</Form.Label>
                    <Form.Control placeholder="input" type="file" />
                </Form.Group>
                <Form.Group className="mb-3" style={fontstyle}>
                    <Form.Label>Blog Description</Form.Label>
                </Form.Group>
                <ReactQuill theme="snow" className="bg-light text-dark w-5"
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
                    placeholder="Add a description of your event" />
                <Form.Group>
                    <button ClassName="input-group-text shadow-sm btn-primary btn text-white "
                        id="inputGroup-sizing-sm" style={{ marginTop: "10px" }}>send</button>
                </Form.Group>
            </div>
        </>
    )
};

export default AdminBlog;