import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar " id="top">
        <div className="headerBar ">
          <h1>
            <Link to="/">
              <h2 id="logo">Portfolio</h2>
            </Link>
          </h1>
        </div>
        <ul className="Nav-menu ">
          <NavLink to="/">
            <li className="listitem" >Home</li>
          </NavLink>
          <NavLink to="/project">
            <li className="listitem">Project</li>
          </NavLink>
          <NavLink to="/about">
            <li className="listitem">About</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="listitem">Contact</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
