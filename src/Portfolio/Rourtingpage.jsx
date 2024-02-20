import React from "react";
import "./port.css";
import { Route, Routes } from "react-router-dom";
import ProjectMore from "./ProjectMore";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";

const Rourtingpage = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectMore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Rourtingpage;
