import React from "react";
import ghost1 from "../assets/ghost-1.svg";
import booGIF from "../assets/boo-gif.gif";
import ghostCopy from "../assets/ghost-copy-only.svg"

import "../styles/GhostCopySection.css";

const GhostCopySection = () => {
  return (
    <div className="ghost-copy-section">
      <img src={ghost1} alt="Floating Ghost" className="floating-ghost" />
      <img src={booGIF} alt= "Boo GIF" className="booGIF" />
      <img src={ghostCopy} />
    </div>
  );
};

export default GhostCopySection;