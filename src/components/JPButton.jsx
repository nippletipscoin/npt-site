import React from "react";
import joinPresale from "../assets/join-presale-btn.svg";

import "../styles/JPButton.css";

const JPButton = () => {
    return (
        <div className="buttons-wrapper2">
          <a
            href="https://npt-frontend-main.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={joinPresale} alt="Join Presale" className="btn-img2" />
          </a>
        </div>
      );
    };
    
    export default JPButton;