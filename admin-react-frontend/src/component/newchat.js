import React from "react"
import Card from 'react-bootstrap/Card';
import './newchat.css'


const logo = require('../bin/download.png')


const NewChat = () => {
    let img = {
        width: "40px",
    }
    let scroll = {
        overflowY: "scroll",
        height: "100vh"
    }

    return (
        <div className="m-5">

            <div className="row">
                <div className="left-section bg-dark col-sm-4 text-light p-3">
                    <div className="d-flex justify-content-center">
                        <input type="text" name="search" placeholder="Search..." />
                        <button> <i className="fa fa-search"></i> </button>
                    </div>
                    <br />
                    <div style={{ scroll }}>
                        <ul>
                            <li>
                                <div className="chatList">
                                    <Card body className="text-light bg-light text-dark m-3 chat-card">
                                        <div className="img  d-flex">
                                            <img src={logo} style={img} /> <h4 className="m-1">first user</h4>
                                        </div>

                                        <div className="msg-desc">
                                            <small>first user txt</small><br />
                                            <small style={{ float: "right" }}>05:30 am</small>
                                        </div>
                                    </Card>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right-section col-sm-8 bg-light">
                    <div className="headRight-sub d-flex justify-content-center m-2">
                        <img src={logo} style={{ width: "40px" }} />
                        <h3 className="m-1">First User</h3>
                    </div>
                    <Card className="message chatbar bg-dark text-light">
                        <ul className="p-3 chat">
                            <Card className="bg-danger msg-left-card m-2">
                                <li className="msg-left p-2">
                                    username1
                                    <div className="msg-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.chat1
                                    </div>
                                    <small style={{ float: "right" }}>05:25 am</small>
                                </li>
                            </Card>
                            <Card className="bg-primary msg-right-card m-2">
                                <li className="msg-right  p-2">
                                    username2
                                    <div className="msg-desc">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua.chat2
                                    </div>
                                    <small style={{ float: "right" }}>05:25 am</small>
                                </li>
                            </Card>

                        </ul>
                    </Card>

                    <div ClassName="input-group input-group-sm mb-3 p-5 fixed-bottom row d-flex">
                        <input type="text" ClassName="form-control col-8 " placeholder="type here ...." style={{width:"80%"}}/>
                        <button ClassName="input-group-text shadow-sm btn-primary btn text-white"
                            id="inputGroup-sizing-sm"><span class="material-symbols-outlined">
                            send
                            </span></button>
                        <input type="file" ClassName="input-group-text btn-outline-secondary col-4" id="inputGroupFile04" style={{width:"100px"}}/> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewChat