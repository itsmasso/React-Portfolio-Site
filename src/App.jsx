import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import StatusCard from "./Components/StatusCard/StatusCard";
import "./App.css";

import NavCard from "./Components/NavCard/NavCard";
import Skills from "./Components/Skills/Skills";

import masso_logo from "./assets/MassoPixelArtLogo.svg";
import tv_scan_lines from "./assets/tv_scan_lines.gif";
import tv_scan_lines_2 from "./assets/tv_scan_lines_2.gif";
import tv_scanlines_bg from "./assets/tv_scan_lines.mp4";
import github_ad from "./assets/github_ad.gif";
const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      // Only update state if the value actually changes
      if (mobile !== isMobile) {
        setIsMobile(mobile);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <div>
      <div className="app">
        <Navbar />
        <div className="title">
          <div className="title-front">
            <h1 className="vhs">マッソ</h1>
          </div>
          <div className="title-back">
            <img src={masso_logo} alt="" className="vhs-image-content" />
            <img className="neon" src={tv_scan_lines} id="massoLogoVHS"></img>
          </div>
        </div>

        <div className="page-wrapper">
          <div className="left-panel">
            <NavCard />
            <StatusCard />
            {!isMobile && <Projects />}
            {/* When you add more content/learn more, make it 3 PANELS! Project on left side and nav on right */}
          </div>
          <div className="main-panel">
            <Hero />
            <About />
            <div className="ad">
              <img src={github_ad} alt="" className="vhs-image-content" />
              <img src={tv_scan_lines_2} id="tv-scan-lines"></img>
            </div>

            <Skills />
            {isMobile && <Projects />}
            <Contact />
            <Footer />
          </div>
          <div className="right-panel"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
