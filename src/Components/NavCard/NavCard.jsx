import React, { useState} from "react";
import "./NavCard.css";
import { NavItem } from "./NavItem";


const NavCard = () => {
  
  const[menu, setMenu] = useState("home");

  const navItems = [
    { label: "Home", key: "home" },
    { label: "About", key: "about" }, 
    { label: "Projects", key: "projects" },
    { label: "Skills", key: "skills" },
    { label: "Contact", key: "contact" },

  ];

  const navLinks = [    
    { label: "Github", link: "https://github.com/itsmasso" },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/sammy-luong-2318a6209/" },
    { label: "Email", link: "mailto: sammyluong123@gmail.com" },
    { label: "Spotify", link: "https://open.spotify.com/artist/0mjgzs919VW35PWllP5eCT?si=wDfC8ui1RfWVFISMecA-zg" },
    { label: "YouTube", link: "https://www.youtube.com/@massobeats" },];

  return (
    <div className="navcard">
    
      <div className="navcard-title">
        <span>&#10209;</span>
        <h1 className="vhs neon-white">Menu</h1>
        <p>_ &#9633; x</p>
      </div>
      <div className="nav-menu">
      <ul className="nav-main">
        {navItems.map((item) => (
          <NavItem
            key={item.key}
            section={item.key}
            label={item.label}
            onClick={() => setMenu(item.key)}
          />
        ))}
      </ul>
      <ul className="nav-links">
        {navLinks.map((item, index) => {
          return (
            
            <li key={index}>
              <a href={item.link} target="_blank"><p>&#9671; {item.label}</p></a>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
};

export default NavCard;
