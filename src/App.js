import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../src/component/Navbar'
import Home from '../src/pages/home'
import Courses from './pages/courses';
import Footer from '../src/component/footer'
import Resource from './pages/resource';
import About from './pages/about';
import Login from './pages/login';
import Register from './pages/register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='courses' element={<Courses />} />
          <Route path='resource' element={<Resource />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
