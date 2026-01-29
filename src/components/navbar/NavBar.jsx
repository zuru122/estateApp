import React from "react";
import "./navbar.scss";

function NavBar() {
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="logo.png" alt="" />
          <span>ZuruEstate</span>
        </a>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Agents</a>
      </div>
      <div className="right">
        <a href="#">Signin</a>
        <a href="#" className="register">
          Signup
        </a>
        <div className="menuIcon">
          <img src="/menu.png" alt="hamburger" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
