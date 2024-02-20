import React from "react";
import Project from './Project'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div id="hero-page">
      <div className="info">
        <div className="details">
          <p>HI, I AM BANAVATH PRASHANTH</p>
          <h1>FULL STACK DEVELOPER</h1>
          <div className="info-Btn">
            <Link to='/project' className="btn border-warning project-btn  ">
              PROJECT
            </Link>
            <button className="btn border-warning contact-btn">CONTACT</button>
          </div>
        </div>
      </div>
    </div>
    <div className="project mt-5">
    <Project/>

    </div>

    </>
  );
};

export default Home;
