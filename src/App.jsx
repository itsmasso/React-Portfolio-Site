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

import masso_logo from './assets/MassoPixelArtLogo.svg'
import tv_scan_lines from './assets/tv_scan_lines.gif'
import masso_logo_p2 from './assets/MassoPixelArtLogo_p2.svg'

const App = () => {
  return (
    <div>
      <Navbar />
      
      <div className="title">
        <img src={masso_logo} alt="" id="massoLogo"/>
        <img className="neon"src={tv_scan_lines} id="massoLogoVHS"></img>
      </div>
      <div className="page-wrapper">
        <div className="left-panel">
       
          <Projects />
        </div>
        <div className="main-panel">
          <Hero />
          <About />
          <Skills />
          <Footer />

        </div>
        <div className="right-panel">

            <NavCard />
            <StatusCard />
          </div>
      </div>
    </div>
  );
};

export default App;
