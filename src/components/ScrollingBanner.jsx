import React from "react";
import "./ScrollingBanner.css";

const ScrollingBanner = () => {
  const message =
    ">>> JOIN THE NPT PRESALE <<<>>> ( • )( • ) <<<>>> ROUND 1 OF 6 <<<>>> ( • )( • ) <<<>>> $0.001 PER TOKEN <<<>>> ( • )( • ) <<<>>> PRICE INCREASES BY $0.0002 EACH ROUND <<<>>> ( • )( • ) <<<>>> BUY WITH USDC OR POL <<<>>> ( • )( • ) <<<>>> STAKE FOR REWARDS <<<>>> ( • )( • ) <<<>>> LAST DAY TO STAKE OCT. 01, 2025 <<<>>> ( • )( • ) <<<>>> REWARDS DROP ON 0CT. 31, 2025 <<<>>> ( • )( • ) <<<>>> LET'S GIVE BOOBS THE SUPPORT THEY DESERVE <<<>>> ( • )( • ) <<<";

  return (
    <div className="sticky-banner">
      <div className="scrolling-banner-track">
        <div className="scrolling-banner-text">{message}</div>
        <div className="scrolling-banner-text">{message}</div>
        <div className="scrolling-banner-text">{message}</div>
        <div className="scrolling-banner-text">{message}</div>
        <div className="scrolling-banner-text">{message}</div>
        <div className="scrolling-banner-text">{message}</div>
        <div className="scrolling-banner-text">{message}</div>
        <div className="scrolling-banner-text">{message}</div>
        
      </div>
    </div>
  );
};

export default ScrollingBanner;