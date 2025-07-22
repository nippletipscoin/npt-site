import React, { useState } from "react";
import Header from "./components/Header";
import UserNPT from "./components/UserNPT";
import Buttons from "./components/Buttons";
import Tokenomics from "./components/Tokenomics";
import TheMission from "./components/TheMission";
import Roadmap from "./components/Roadmap";
import FinalMessage from "./components/FinalMessage";
import GhostCopySection from "./components/GhostCopySection";
import ScrollingBanner from "./components/ScrollingBanner";
import JPButton from "./components/JPButton";
import NPTIcon from "./components/NPTIcon";
import POLYGONIcon from "./components/PolygonIcon";

function App() {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    setConnected(true);
  };

  return (
    <>
      <ScrollingBanner />
      <Header />
      <div className="UserNPT-spacing">
        <UserNPT connected={connected} onConnect={handleConnect} />
      </div>
      <div className="buttons-spacing">
        <Buttons />
      </div>
      <div className="GhostCopy-spacing">
        <GhostCopySection />
      </div>
      <div className="section-spacing">
        <Tokenomics />
      </div>
      <div className="JPButton-spacing">
        <JPButton />
      </div>
      <div className="TheMission-spacing">
        <TheMission />
      </div>
      <div className="section-spacing">
        <Roadmap />
      </div>
      <div className="JPButton-spacing">
        <JPButton />
      </div>
      <div className="FinalMessage-spacing">
        <FinalMessage />
      <footer style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '.75rem', color: '#888', fontSize: '0.75rem' }}>
        <div className="nptIcon1">
        <NPTIcon />
      </div>
        <div className="polygonIcon1">
        <POLYGONIcon />
        </div>
        © NippleTips 2025
        Disclaimer: The information provided in this document and on this platform does not constitute investment, financial, or trading advice. It is for informational purposes only. You should not treat any information provided as a recommendation to buy, sell, or hold any cryptocurrency or financial product. Please do your own research and consult with a qualified financial advisor in your region before making any investment decisions. Participation in this project is at your own risk. This is a meme token.
      </footer>
      </div>
    </>
  );
}

export default App;