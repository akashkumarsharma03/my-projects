import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Adminlogin from '../component/adminlogin';
import AdminBlog from '../component/adminBlog';
import Defaultpage from '../assets/default';
import Chatapp from '../component/newchat';
import User from '../component/userdashboard';



const AppRouter = () => {
  return (
    <>
      <div className="main-content">
        <Routes>
          <Route  element={<AdminBlog/>} path="/" />
          <Route  element={<Adminlogin/>} path="/adminlogin" />
          <Route  element={<Defaultpage/>} path="*" />
          <Route  element={<Chatapp/>} path="/chatapp" />
          <Route  element={<User/>} path="/user" />

        </Routes>
      </div>
    </>);
};

export default AppRouter;
