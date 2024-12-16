import React from "react";
import "./Hero.css";
import portfolio_pic_no_bg from "../../assets/portfolio-pic-no-bg.png";
import light_gray_background from "../../assets/light_gray_background.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="profile-img-container">
        <img className="profile-bg" src={light_gray_background} alt="" />
        <img className="profile" src={portfolio_pic_no_bg} alt="" />
      </div>

      <h1>
        <span>I'm Sammy Luong,</span> a developer based in California.
      </h1>
      <p>
        Hi! I'm a software engineer that specializes in front end & backend
        development and game development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
          </AnchorLink>
          </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
