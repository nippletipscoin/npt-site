import React from "react";
import ghost1 from "../assets/ghost-1.svg";
import booGIF from "../assets/boo-gif.gif";
import ghostCopy from "../assets/ghost-copy-only.svg"
import telegramPlane from "../assets/telegram.png"

import "../styles/GhostCopySection.css";

const GhostCopySection = () => {
  return (
    <div className="ghost-copy-section">
      <img src={ghost1} alt="Floating Ghost" className="floating-ghost" />
      <img src={booGIF} alt= "Boo GIF" className="booGIF" />
      <img src={ghostCopy} />
      <a
        href="https://t.me/nippletips"
        target="_blank"
        rel="noopener noreferrer">
      <img src={telegramPlane} className="telePlane" />
      </a>
    </div>
  );
};

export default GhostCopySection;