import React from "react";
import { Link } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { IoMdPaper } from "react-icons/io";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav">
      <ul className="ul">
          <Link className="logo" to="/">TT</Link>
          <Link to="/"> <GrHomeRounded/> </Link>
          <Link to="/About"> <IoMdPaper/> </Link>
          <Link to="/Portfolio">Portfolio </Link>
          <Link to="/Contact">Contact </Link>
        </ul>
      </div>
    </nav>

  );
};
export default NavBar;