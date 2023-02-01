import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" color="#099EE2"  className="nav-home-container">
          <p id="homeText" color="#099EE2">
            SKYLAR
          </p>
          <p id="homeText">KURTH</p>
        </Link>

        <div className="nav-link-container">
          <Link to="/about_me" id="navLink">
            {" "}
            About Me{" "}
          </Link>
          <Link to="/experience" id="navLink">
            {" "}
            Experience{" "}
          </Link>
          <Link to="/design" id="navLink">
            {" "}
            Design{" "}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar
