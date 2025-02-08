import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Importing NavBar styles

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <span>|</span>
      <Link to="/map">Map</Link>
      <span>|</span>
      <Link to="/travelwithus">Travel</Link>
      <span>|</span>
      <Link to="/gallery">Gallery</Link>
      <span>|</span>
      <Link to="/reviews">Reviews</Link>
      <span>|</span>
      <Link to="/quiz">Quiz</Link>
    </div>
  );
};

export default NavBar;
