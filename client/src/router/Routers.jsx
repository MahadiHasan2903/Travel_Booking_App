import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Tours from "../Pages/Tours";
import TourDetails from "../Pages/TourDetails";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import SearchResultList from "../Pages/SearchResultList";
import Thankyou from "../Pages/Thankyou";
import About from "../Pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<Thankyou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
