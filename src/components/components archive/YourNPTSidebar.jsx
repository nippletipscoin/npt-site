import React from "react";
import userNPTDisplay from "../assets/user-npt-display.svg";
import yourNPTTitle from "../assets/your-npt-title.svg";
import connectWalletBtn from "../assets/connect-wallet-btn.svg";
import usEquivalentField from "../assets/us-equivalent-field.svg";

import joinBtn from "../assets/join-presale-btn.svg";
import telegramBtn from "../assets/telegram-btn.svg";
import twitterBtn from "../assets/twitter-btn.svg";
import contractBtn from "../assets/contract-btn.svg";
import whitePaperBtn from "../assets/white-paper-btn.svg";

import "../styles/YourNPTSidebar.css";

const YourNPTSidebar = () => {
  return (
    <div className="npt-sidebar-container">

      <div className="npt-display-wrapper">
        <img src={yourNPTTitle} className="npt-title" alt="Your NPT Title" />
        <img src={usEquivalentField} className="usd-bg" alt="USD Field" />

        <div className="npt-display-box">
          <img src={userNPTDisplay} className="npt-bg" alt="NPT Display BG" />
          <div className="npt-amount-overlay">
            <p className="npt-balance">0.00</p>
            <p className="npt-label">Your NPT</p>
          </div>
        </div>

        <img
          src={connectWalletBtn}
          className="connect-wallet-btn"
          alt="Connect Wallet"
        />
      </div>

      <div className="btn-group">
        <img src={joinBtn} alt="Join Presale" className="sidebar-btn" />
        <img src={telegramBtn} alt="Telegram" className="sidebar-btn" />
        <img src={twitterBtn} alt="Twitter" className="sidebar-btn" />
        <img src={contractBtn} alt="Contract" className="sidebar-btn" />
        <img src={whitePaperBtn} alt="White Paper" className="sidebar-btn" />
      </div>
    </div>
  );
};

export default YourNPTSidebar;