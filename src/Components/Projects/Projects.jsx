import React from "react";
import "./Projects.css";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import windows_screen_widget from "../../assets/windows_screen_widget.svg";
import pro_angler_pic from "../../assets/proAngler_project_pic.png"
import "../../App.css"

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title ">
        <img
          src={windows_screen_widget}
          alt=""
          id="windows_widget_projects_2"
        />
        <span>&#10209;</span>
        <h1 className="vhs neon-pink">PROJECTS</h1>
      </div>
      <div className="projects-container">
        <div className="services-format">
          <img className="vhs"src={pro_angler_pic} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Projects;
