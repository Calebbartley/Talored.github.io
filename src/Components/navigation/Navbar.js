import React from "react";
import "./Navbar.css";
import Home from "../homePage/Home";
import About from "../aboutMe/About";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navmenu = () => {
  return (
    <div>
      <Router>
          <Navbar className="color-nav" variant="light">
            <Container className="Nav-title">
                <Navbar.Brand href="#home">Talor'd Tales</Navbar.Brand>
            <Nav className="Nav">
              <Routes className='nav-ul'>
                  <Route className="nav-ul-home" path={'/'} component={Home}>Home</Route>
                  <Route className="nav-ul-portfolio" path="/Portfolio" component={Portfolio}>Portfolio</Route>
                  <Route className="nav-ul-about" to='/About' component={About} >About</Route>
                  <Route className="nav-ul-contact" to='/Contact' component={Contact}>Contact</Route>
              </Routes>
            </Nav>
            </Container>
          </Navbar>
      </Router>
    </div>
  );
};
export default Navmenu;

