import React from "react";
import roadmap from "../assets/roadmap.png";

const Roadmap = () => {
  return (
    <section
      style={{
        textAlign: "center",
        position: "relative",
        marginTop: "40px",
        marginBottom: "40px",
      }}
    >
      <img
        src={roadmap}
        alt="NPT Roadmap"
        style={{
          maxWidth: "100%",
          height: "auto",
          position: "relative",
          zIndex: 1,
        }}
      />
    </section>
  );
};

export default Roadmap;