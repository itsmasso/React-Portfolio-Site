import React from "react";
import "./Projects.css";
import project_data from "../../assets/project_data";

import tv_scan_lines_2 from "../../assets/tv_scan_lines_2.gif";


const Projects = () => {

  return (
    <div id="projects" className="projects">
      <div className="projects-title ">
      <h1 className="vhs neon-white">Projects</h1>
      </div>
      <div className="projects-container">
        {project_data.map((projects, index) => {
          return (
            <div className="project-wrapper">
              <div key={index} className="projects-format">
                <div className="project-card-header">
                  <h2>{projects.name}</h2>
                  <p>_ &#9633; x</p>
                </div>

                <div className="project-card-body">
                  <img src={tv_scan_lines_2} id="projects-tv-scan-lines"></img>
                  <div className="project-card-message-container">
                    <img src={projects.image} alt="" />
                    <p>{projects.description}</p>
                  </div>

                  <div className="projects-readmore">
                    <a href={projects.link} target="_blank"><p>Yes</p></a>
                  </div>
                </div>
              </div>
              <div className="marquee-wrapper">
                <div className="marquee">
                  <p>{projects.technologies}</p>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
