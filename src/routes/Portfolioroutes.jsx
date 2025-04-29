import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import App from "../App";

const Portfolioroutes = () => (
    <Routes>
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="education" element={<Education />} />
        </Route>
    </Routes>
);

export default Portfolioroutes;