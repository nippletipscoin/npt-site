import React from "react";
import theMission from "../assets/the-mission-copy.svg";
import ghostCoin from "../assets/ghost-coin.png";
import "../styles/TheMission.css";

const TheMission = () => {
  return (
    <div className="mission-wrapper">
      <div className="mission-inner">
        <img src={theMission} className="mission-img" alt="The Mission" />
        <img src={ghostCoin} className="ghost-coin" alt="Ghost Coin" />
      </div>
    </div>
  );
};

export default TheMission;