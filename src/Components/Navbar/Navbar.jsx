import React, { useState, useRef } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

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

        <AnchorLink className="anchor-link"offset={50} href="#contact"><div>Connect</div></AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
