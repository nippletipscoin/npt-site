import React from "react";
import tokenomics from "../assets/tokenomics.png";

const Tokenomics = () => {
  return (
    <section style={{ textAlign: "center", marginTop: "40px" }}>
      <img src={tokenomics} alt="Tokenomics" style={{ maxWidth: "100%", height: "auto" }} />
    </section>
  );
};

export default Tokenomics;