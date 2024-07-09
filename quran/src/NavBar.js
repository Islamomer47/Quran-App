import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home">الرئيسية</a>
        </li>
        <li>
          <a href="#about">عن الموقع</a>
        </li>
        <li>
          <a href="#contact">اتصل بنا</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
