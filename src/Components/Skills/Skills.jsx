import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <div className="skill-wrapper">
        <h1>SKILLS</h1>
        <div className="skills">
            <div className="skill">
              <p>Add language/framework here</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="skill">
              <p>Add language/framework here</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="skill">
              <p>Add language/framework here</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="skill">
              <p>Add language/framework here</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
          <div className="achievements">
        <div className="achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  )
}

export default Skills