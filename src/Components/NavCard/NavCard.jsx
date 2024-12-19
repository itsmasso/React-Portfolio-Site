import React from "react";
import "./NavCard.css";
import { NavItem } from "./NavItem";


const NavCard = ({ScrollToPage}) => {
  
  const navItems = [
    { label: "Home", key: "0" },
    { label: "About Me", key: "0.2" }, 
    { label: "Skills", key: "0.7" },
    { label: "Contact", key: "2" },

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
      <ul>
        {navItems.map((item) => (
          <NavItem
            key={item.key}
            label={item.label}
            onClick={() => ScrollToPage(item.key)}
          />
        ))}
      </ul>
      <ul>
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
