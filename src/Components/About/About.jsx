import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <span>&#10209;</span>
        <h1 className="vhs neon">WHO AM I<span style={{fontFamily:'PixelNes', fontSize: '30px'}}>?</span></h1>
      </div>
      <div className="about-section">
        <div className="about-info">
          <div className="about-paragraph">
            <p>
              I'm am currently a computer science student at Calstate Fullerton
              and I graduate in 2025! Outside of normal school work, I love game
              development and can pretty much stay up all night coding away. I
              also produce music for fun and as a side hustle which I've been
              doing for 5+ years now. I'd say I'm pretty good at it. You can
              check it our{" "}
              <a href="https://www.youtube.com/@massobeats" target="_blank">
                here!
              </a>
            </p>
            <p>
              Besides that, when it comes to development, there's just so much
              to learn. Currently, I am really fascinated by learning language
              AI models, and I plan to invest my time learning how to integrate
              them into my own development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
