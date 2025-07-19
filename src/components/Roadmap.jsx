import React from "react";
import roadmap from "../assets/full-roadmap.svg";
import ghostMap from "../assets/ghost-map.png";
import "../styles/Roadmap.css";

const Roadmap = () => {
  return (
    <section className="roadmap-section">
      <div className="roadmap-inner-wrapper">
        <div className="roadmap-inner">
          <img src={roadmap} alt="Roadmap" className="roadmap-img" />
          <img src={ghostMap} alt="Ghost Map" className="ghost-map" />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;