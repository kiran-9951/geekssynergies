import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home" className="nav-link">Home</Link>
      <Link to="/contact" className="nav-link">Company info</Link>
    </nav>
  );
};

export default Navbar;
