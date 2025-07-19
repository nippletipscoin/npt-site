import React from "react";
import heroMessageCopy from "../assets/hero-message-copy.png";

const HeroMessageCopy = () => {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <img
        src={heroMessageCopy}
        alt="Hero Message Copy"
        style={{ width: "100%", maxWidth: "600px" }}
      />
    </div>
  );
};

export default HeroMessageCopy;