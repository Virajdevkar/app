import React, { useState } from 'react';
import './sideNav.css';




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Logo</h1>
        </div>
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Invoices</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;


