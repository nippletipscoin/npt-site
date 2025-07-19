import React from "react";
import logo from "../assets/npt-logo.png";
import totalSupplyBlock from "../assets/total-supply-info-block.png";
import yourNPT from "../assets/your-npt-section.png";
import ghost1 from "../assets/ghost-1.png";
import ghost2 from "../assets/ghost-2.png";
import ghost3 from "../assets/ghost-3.png";
import joinPresaleBtn from "../assets/join-presale-btn.png";

const Hero = () => {
  return (
    <section style={{ textAlign: "center", position: "relative", paddingTop: "28px" }}>
      <img src={logo} alt="NPT Logo" width="250" />
      <p style={{
        fontSize: "16px",
        textAlign: "center",
        margin: "25px 5px",
        padding: "20px 20px",
        lineHeight: "1.5"
      }}>
        A meme token with real purpose, supporting breast health and education through crypto & community.
      </p>
      <img src={totalSupplyBlock} alt="Total Supply Info" style={{ maxWidth: "100%", margin: "-50px 0" }} />
      <img src={yourNPT} alt="Your NPT" style={{ maxWidth: "50%", margin: "25px 0px" }} />
      <img
        src={joinPresaleBtn}
        alt="Join Presale"
        style={{ marginTop: "0px", width: "350px", cursor: "pointer" }}
      />

      <img
        src={ghost1}
        alt="Floating Ghost"
        className="floating-ghost"
      />

    </section>
  );
};

export default Hero;