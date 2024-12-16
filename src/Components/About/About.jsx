import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-info">
          <div className="about-paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt dis
              quam sapien commodo dapibus enim pretium sem sapien.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Add language/framework here</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Add language/framework here</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Add language/framework here</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Add language/framework here</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};

export default About;
