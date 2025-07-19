import React from "react";
import finalCopy from "../assets/final-copy.svg";
import spaceGhost from "../assets/space-ghost.svg";
import "../styles/FinalMessage.css";

const FinalMessage = () => {
  return (
    <div className="final-message-wrapper">
      <div className="final-message-content">
        <img src={finalCopy} alt="Final Copy" className="final-message-img" />
        <img src={spaceGhost} className="space-ghost" alt="Floating Ghost" />
      </div>
    </div>
  );
};

export default FinalMessage;