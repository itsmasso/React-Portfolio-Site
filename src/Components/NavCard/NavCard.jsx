import React, { useState } from "react";
import "./NavCard.css";
import { NavItem } from "./NavItem";

const NavCard = () => {
  const [menu, setMenu] = useState("home");
  const navItems = [
    { label: "Home", key: "home" },
    { label: "About Me", key: "about" },
    { label: "Projects", key: "projects" },
    { label: "Skills", key: "skills" },
    { label: "Contact", key: "contact" },
  ];
  return (
    <div className="navcard">
      <h1>MENU</h1>   
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
