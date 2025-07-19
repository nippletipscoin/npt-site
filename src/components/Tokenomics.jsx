import React from "react";
import tokenomicsDisplay from "../assets/tokenomics-display.svg";
import "../styles/Tokenomics.css";

const Tokenomics = () => {
  return (
    <div className="tokenomics-wrapper">
      <img
        src={tokenomicsDisplay}
        alt="Tokenomics Display"
        className="tokenomics-img"
      />      
    </div>
  );
};

export default Tokenomics;