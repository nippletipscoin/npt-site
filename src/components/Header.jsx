import React from "react";
import logo from "../assets/npt-logo.svg";
import tagline from "../assets/tagline.svg"; 

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="NPT Logo" className="npt-logo" />
      <img src={tagline} alt="NPT Tagline" className="npt-tagline" />
    </div>
  );
};

export default Header;