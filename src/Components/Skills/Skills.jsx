import React from "react";
import "./Skills.css";
import goodSkillsList from "./GoodSkillsList";
import OkSkillList from "./OkSkillsList";
const Skills = () => {
  return (
    <div id="skills" className="skill-wrapper">
      <div className="skills-title">
      <span>&#10209;</span>
        <h1 className="vhs neon-white">My Skills</h1>
      </div>
      <div className="skills">
        <div className="skill">
          <div className="skill-list">
            {goodSkillsList.map((skills, index) => {
              const Icon = skills.icon;
              return (
                <div key={index} className="skill-button">
                  <span className="button-icon">
                    <Icon />
                  </span>
                  <span>{skills.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
