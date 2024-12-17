import React, { useState, useRef } from "react";
import "./Navbar.css";


const Navbar = () => {

  return (
    <div className="navbar">
      <div className="nav-connect">
        <a href="https://github.com/itsmasso" target="_blank" rel="noopener noreferrer">
          <i class="uil uil-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sammy-luong-2318a6209/" target="_blank" rel="noopener noreferrer">
          <i class="uil uil-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/@massobeats" target="_blank" rel="noopener noreferrer">
          <i class="uil uil-youtube"></i>
        </a>

        <div>
        Connect
        </div>
      </div>
    </div>
  );
};

export default Navbar;
