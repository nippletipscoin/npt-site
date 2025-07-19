import React from "react";
import theChart from "../assets/chart-placeholder.png";

const TheChart = () => {
  return (
    <section style={{ textAlign: "center", marginTop: "40px" }}>
      <img src={theChart} alt="NPT Chart" style={{ maxWidth: "100%", height: "auto" }} />
    </section>
  );
};

export default TheChart;