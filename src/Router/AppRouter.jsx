import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Food from '../pages/Food';
import About from '../pages/About';
import Profile from '../pages/Profile';
import Gadget from '../pages/Gadget';
import Navbar from '../components/Navbar';

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/food" element={<Food />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/gadget" element={<Gadget />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
