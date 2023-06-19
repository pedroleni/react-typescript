import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav>
      <NavLink to="/home">
        <button className="btn-nav">HOME</button>
      </NavLink>
      <NavLink to="/">
        <button className="btn-nav">DASHBOARD</button>
      </NavLink>
      <NavLink to="/gallery">
        <button className="btn-nav">GALLERY</button>
      </NavLink>
    </nav>
  );
};

export default Nav;
