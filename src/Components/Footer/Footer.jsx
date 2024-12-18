import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-top">
        <p>
          © 2024 Sammy Luong. All rights reserved.
        </p>

      </div>
      <div className="footer-bottom">
        <a href="https://github.com/itsmasso" target="_blank" rel="noopener noreferrer">
          <i class="uil uil-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sammy-luong-2318a6209/" target="_blank" rel="noopener noreferrer">
          <i class="uil uil-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/@massobeats" target="_blank" rel="noopener noreferrer">
          <i class="uil uil-youtube"></i>
        </a>

        </div>
    </div>
  );
};

export default Footer;
