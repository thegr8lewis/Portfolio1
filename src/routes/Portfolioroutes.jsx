import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import Main from "../pages/Main"

const Portfolioroutes = () => (

    <Routes>
        <Route path="/" element={< Main/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
    </Routes>
);

export default Portfolioroutes;