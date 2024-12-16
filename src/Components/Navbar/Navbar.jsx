import React, { useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavItem } from "./NavItem";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navItems =[
    {label: "Home", key: "home"},
    {label: "About Me", key: "about"},
    {label: "Projects", key: "projects"},
    {label: "Skills", key: "skills"},
    {label: "Contact", key: "contact"},
  ];

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0px";
  }

  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open"/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        {navItems.map((item) => <NavItem key={item.key} section={item.key} label={item.label} isActive={menu === item.key} onClick={() => setMenu(item.key)}/>)}
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
