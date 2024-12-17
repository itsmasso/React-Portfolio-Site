import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import StatusCard from "./Components/StatusCard/StatusCard";
import "./App.css";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import NavCard from "./Components/NavCard/NavCard";
import Skills from "./Components/Skills/Skills";

import masso_logo from "./assets/MassoPixelArtLogo.svg";
import tv_scan_lines from "./assets/tv_scan_lines.gif";
import masso_logo_p2 from "./assets/MassoPixelArtLogo_p2.svg";
import tv_overlay from "./assets/tv_overlay.mp4";
import tv_scanlines_bg from "./assets/tv_scan_lines.mp4";

const App = () => {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer>
          <video autoPlay loop muted playsInline className="background-video">
            <source src={tv_scanlines_bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video autoPlay loop muted playsInline className="background-video-2">
            <source src={tv_scanlines_bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </ParallaxLayer>
        <ParallaxLayer offset={0} factor={2} speed={0.25}>
          <div className="app">
            <Navbar />
            <div className="title">
              <div className="title-front">
                <h1 className="vhs">マッソ</h1>
              </div>
              <div className="title-back">
                <img src={masso_logo} alt="" id="massoLogo" />
                <img
                  className="neon"
                  src={tv_scan_lines}
                  id="massoLogoVHS"
                ></img>
              </div>
            </div>

            <div className="page-wrapper">
              <div className="left-panel">
                <Projects />
              </div>
              <div className="main-panel">
                <Hero />
                <About />
                <div className="ad"></div>
                <Skills />
                <Footer />
              </div>
              <div className="right-panel">
            <NavCard />
            <StatusCard />
          </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
