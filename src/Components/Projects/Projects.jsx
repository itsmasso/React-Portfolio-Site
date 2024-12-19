import React from "react";
import "./Projects.css";


import tv_scan_lines_2 from "../../assets/tv_scan_lines_2.gif";
import video_game_icon from '../../assets/invader.svg'
import food_icon from '../../assets/food_icon.svg'
import compiler_icon from '../../assets/compiler_icon.svg'

const Projects = () => {
const project_data = [
    {
        name:"Pro Angler",
        image: video_game_icon,
        description: "A 2D pixel art fishing game made in Unity. Want to see more?",
        technologies:"Made in Unity's 2D engine and C#.",
        link: "https://itsmasso.itch.io/pro-angler"
    },
    {
        name:"Recipe Management API",
        image: food_icon,
        description: "A CRUD API for recipes that uses token-based authentication. Want to see more?",
        technologies:"Made using Python, Flask, Redis, and MySQL.",
        link: "https://github.com/mkt989/CPSC-449-Final-Project"
    },
    {
        name:"Compiler Project",
        image: compiler_icon,
        description: "Part of a functional compiler that can parse tokens and convert code to assembly code. Want to see more?",
        technologies:"Made in Java only!",
        link: "https://github.com/itsmasso/CompilerProject/tree/main"
    },


]
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
