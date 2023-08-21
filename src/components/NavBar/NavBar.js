import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-icon"></div>
      <div className="navbar-links">
        <h1 className="navbar-title">Valley Vows</h1>
        <NavLink className="navbar-link" to="/">
          Home
        </NavLink>
        <NavLink className="navbar-link" to="/user-profile">
          My Profile
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
