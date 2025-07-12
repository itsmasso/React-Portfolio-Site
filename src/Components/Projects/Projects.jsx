import React from "react";
import "./Projects.css";

import tv_scan_lines_2 from "../../assets/tv_scan_lines_2.gif";
import video_game_icon from "../../assets/invader.svg";
import food_icon from "../../assets/Food_Icon.svg";
import compiler_icon from "../../assets/compiler_icon.svg";
import coins_icon from "../../assets/coin.png";
const Projects = () => {
  const project_data = [
    {
      name: "Dreamlocked",
      image: video_game_icon,
      description:
        "A 3D multiplayer horror game made in Unity 3D using Steam and Unity's netcoding solution for hosting online lobbies. Want to see more?",
      technologies: "Made in Unity's 3D engine and netcoding solution, C#, and Steamworks.",
      link: "https://store.steampowered.com/app/3709240/Dreamlocked/",
    },
    {
      name: "MtxTracker",
      image: coins_icon,
      description:
        "A full stack web app for logging and tracking gaming expenses. (Note: Server host spins down after inactivity, so it takes a while to load) Want to see more?",
      technologies:
        "Made using React, Express.js, Node.js, MongoDB, HTML, and CSS",
      link: "https://github.com/itsmasso/microtransaction-tracker",
    },
    {
      name: "Pro Angler",
      image: video_game_icon,
      description:
        "A 2D pixel art fishing game made in Unity. Want to see more?",
      technologies: "Made in Unity's 2D engine and C#.",
      link: "https://itsmasso.itch.io/pro-angler",
    },
    {
      name: "Fullstack profile page mockup",
      image: compiler_icon,
      description:
        "A simple full-stack user profile management app. (Note: Server host spins down after inactivity, so it takes a while to load) Want to see more?",
      technologies: "Made with React, Node.js, Express.js, HTML, CSS, and MongoDB",
      link: "https://github.com/itsmasso/Profile-Page",
    },
  ];
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
                    <a href={projects.link} target="_blank">
                      <p>Yes</p>
                    </a>
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
