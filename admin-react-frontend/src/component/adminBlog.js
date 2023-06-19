import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactHtmlParser from 'react-html-parser';
import './adminblog.css'

const AdminBlog = () => {
    const [userData, setUserData] = useState({
        title: '',
        Category: '',
        tags: '',
        description: '',
        photoFile: null,
        photo: '',
        id: ''
    })
    let url = "http://localhost:5000/api/values"
    async function funcName(url) {
        const response = await fetch(url);
        var data = await response.json();
    }
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };

    let fontstyle = {
        color: "white",
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value });
    }

    const handleProcedureContentChange = (content) => {
        setUserData({ ...userData, content });
    };

    const uploadFile = (event) => {
        event.preventDefault();

        const selectedfile = event.target.files;
        if (selectedfile.length > 0) {
            const [imageFile] = selectedfile;
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const srcData = fileReader.result;
                setUserData({ ...userData, [event.target.name]: srcData });
            };
            fileReader.readAsDataURL(imageFile);
        }
    }

    return (
        <>
            <div className="m-3 bg-dark formfill" >
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 blogid" style={fontstyle} >
                        <Form.Label>Blog id</Form.Label>
                        <Form.Control value={userData.id} name="id"
                            onChange={handleChange} placeholder="Blog id" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={fontstyle} >
                        <Form.Label>Blog Title</Form.Label>
                        <Form.Control value={userData.title} name="title"
                            onChange={handleChange} placeholder="Blog Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={fontstyle}>
                        <Form.Label>Blog Category</Form.Label>
                        <Form.Control value={userData.Category} name="Category"
                            onChange={handleChange} placeholder="Blog Category" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={fontstyle}>
                        <Form.Label>Blog Tags</Form.Label>
                        <Form.Control value={userData.tags} name="tags"
                            onChange={handleChange} placeholder="Enter Blog Tags" />
                    </Form.Group>
                    <Form.Group className="mb-3" style={fontstyle}>
                        <Form.Label>Blog Summary</Form.Label>
                        <Form.Control value={userData.Summary} name="Summary"
                            onChange={handleChange} placeholder="Blog Summary" />
                    </Form.Group>

                    <Form.Group className="mb-3" style={fontstyle}>
                        <Form.Label>Blog photo</Form.Label>
                        <Form.Control value={userData.photoFile} name="photo"
                            onChange={uploadFile} placeholder="input" type="file" />
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
                        placeholder="Add a description of your event"
                        onChange={handleProcedureContentChange}
                    />
                    <Form.Group>
                        <button type="submit" className="input-group-text shadow-sm btn-primary btn text-white "
                            id="inputGroup-sizing-sm" style={{ marginTop: "10px" }}>send</button>
                    </Form.Group>
                    <div className="d-flex justify-content-center"><button onClick={handleClick} className="btn btn-success"><div className="d-flex">
                    👇 preview 👀
                    </div></button>
                    </div>
                    <br />
                </Form>
            </div>
            <div>
                {isShown && (
                    <><div className="p-2"><div className="card">
                        <img className="card-img p-3 cardimg" src={userData.photo} alt="Card image" />
                        <div className="card-img-overlay text-light d-flex justify-content-center flex-column align-items-center imgtxt">
                            <h1 className="card-title title">{userData.title}</h1>
                            <hr />
                            <h4 className="card-text summary">{userData.Summary}</h4>
                            <small className="date">uploaded on : dd/mm/yyyy</small>
                        </div>
                    </div><div className="card">
                            <h5 className="card-header d-flex justify-content-center bg-dark text-light">{userData.Category}</h5>
                            <div className="card-body m-1 cardbg">
                                <h3 className="card-title d-flex justify-content-center">{userData.title}</h3>
                                <hr />
                                <p className="card-text">{ReactHtmlParser(userData.content)}</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div></div></>)}
            </div>
        </>
    )
};

export default AdminBlog;