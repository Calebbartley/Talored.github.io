import React from "react";
import { Link } from "react-router-dom";
import { GrBook, GrFolder, GrMailOption } from "react-icons/gr";
import logo from "../images/logo.JPG";
import "./Navbar.css";

const NavBar = () => {
  
  return (
    <nav>
      <div className="nav">
      <ul className="ul">
        <Link className="logo" to="/">
          <img  src={logo} alt="logo" />
        </Link>
          <Link to="/About">
            <GrBook />
          </Link>
          <Link to="/Portfolio">
            <GrFolder />
          </Link>
          <Link to="/Contact">
          <GrMailOption />
          </Link>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
