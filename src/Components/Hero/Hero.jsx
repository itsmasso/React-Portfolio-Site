import React from "react";
import "./Hero.css";
import "../../App.css"
import vhs from "../../assets/tv_scan_lines.gif"
const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-wrapper">
        <div className="hero-title">
        <h1 className="vhs neon">HEY THERE, WELCOME!</h1>
        </div>

        
        <div className="hero-description-wrapper">
          <div className="profile"></div>
          <div className="profile-description">
            <p>
              <span>Name</span> Sammy Luong
            </p>
            <p>
              <span>Location</span> California
            </p>
            <p>
              <span>Born</span> May 2001
            </p>
            <p>
              <span>Location</span> California
            </p>
          </div>
        </div>
        <div className="description">
          <p>
            Hi, I'm Sammy! I am a junior developer and a student at CSUF with a
            huge passion for web development and game development.
          </p>
        </div>
      </div>
      {/*
        <div className="hero-action">
          <AnchorLink className="hero-connect" offset={50} href="#contact">
            <i class="uil uil-envelope"></i> Let's connect
          </AnchorLink>
          <div className="hero-resume">My resume</div>
        </div>
        */}
    </div>
  );
};

export default Hero;
