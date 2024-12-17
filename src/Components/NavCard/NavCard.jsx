import React, { useState } from "react";
import "./NavCard.css";
import { NavItem } from "./NavItem";
import windows_screen_widget from "../../assets/windows_screen_widget.svg";

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
      <img src={windows_screen_widget} alt="" id="windows_widget" />
      <div className="navcard-title">
        <span>&#10209;</span>
        <h1 className="vhs neon-pink">MENU</h1>
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
