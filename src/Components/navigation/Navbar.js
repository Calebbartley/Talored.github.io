import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav">
      TT
      <ul className="ul">
          <Link to="/"> Home </Link>
          <Link to="/About">About </Link>
          <Link to="/Portfolio">Portfolio </Link>
          <Link to="/Contact">Contact </Link>
        </ul>
      </div>
    </nav>

  );
};
export default NavBar;

