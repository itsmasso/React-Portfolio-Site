import React, { useState } from "react";
import "./NavCard.css";
import { NavItem } from "./NavItem";


const NavCard = () => {
  const [menu, setMenu] = useState("home");
  const navItems = [
    { label: "Home", key: "home" },
    { label: "About Me", key: "about" },
  
    { label: "Skills", key: "skills" },
    { label: "Contact", key: "contact" },
  ];
  return (
    <div className="navcard">
    
      <div className="navcard-title">
        <span>&#10209;</span>
        <h1 className="vhs neon-white">Menu</h1>
        <p>_ &#9633; x</p>
      </div>
      <ul className="nav-menu">
        {navItems.map((item) => (
          <NavItem
            key={item.key}
            label={item.label}
            isActive={menu === item.key}
            onClick={() => setMenu(item.key)}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavCard;
