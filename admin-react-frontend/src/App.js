import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import AppRouter from './router/router';

function App() {
  let pagelink = {
    background: "black"
  }
  return (
    <>
      <h1 className="d-flex justify-content-center text-light">Welcome to admin app</h1>
      <div className="d-flex justify-content-center">
        <NavLink to="/" className="btn-primary p-3" style={pagelink} activeclassname="active">
          Blog
        </NavLink>
        <NavLink to="/adminlogin" className="btn-primary p-3" style={pagelink} activeclassname="active">
          login
        </NavLink>
        <NavLink to="/chatapp" className="btn-primary p-3" style={pagelink} activeclassname="active">
          chat
        </NavLink>
        <NavLink to="/user" className="btn-primary p-3" style={pagelink} activeclassname="active">
          User
        </NavLink>
      </div>
      <AppRouter />
    </>
  );
}

export default App;
