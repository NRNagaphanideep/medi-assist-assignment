import React from "react";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <i class="bi bi-boxes"></i>
        <h1 className="header-name">Medi Assist</h1>
      </div>
      <div className="header-options">
        <a href="#home">Home</a>
        <a href="#whyUs">Why Us</a>
        <a href="#learn">Learn</a>
        <a href="#jobs">Jobs</a>
      </div>
      <div className="header-right">
        <button className="header-login">Login</button>
      </div>
    </header>
  );
};

export default Header;
