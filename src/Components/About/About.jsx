import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <span>&#10209;</span>
        <h1 className="vhs neon-white">
          WHO AM I
          <span style={{ fontFamily: "PixelNes", fontSize: "30px" }}>?</span>
        </h1>
      </div>
      <div className="about-section">
        <div className="about-info">
          <div className="about-paragraph">
            <p>
              I’m a recent graduate from California State University, Fullerton
              (CSUF) with a passion for fullstack web development and game
              development. I enjoy working with modern technologies like React
              to create responsive and engaging websites. I’m always eager
              to learn new skills and take on exciting projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
