import React, { useState } from "react";
import joinPresale from "../assets/join-presale-btn.svg";
import telegram from "../assets/telegram-btn.svg";
import twitter from "../assets/twitter-btn.svg";
import contract from "../assets/contract-btn.svg";
import whitepaper from "../assets/white-paper-btn.svg";
import polygonscan from "../assets/polygonscan.svg";

import "../styles/Buttons.css";

const Buttons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tokenUrl = "https://polygonscan.com/address/0x4d3E63345E3B92CE2996caA8e8c64551Ee934721#code";
  const presaleUrl = "https://polygonscan.com/address/0xBb51A9178BcAe68F1e00FC37D004AdCEc1C530DF#code";

  return (
    <div className="buttons-wrapper">

      <a
        href="https://npt-frontend-main.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={joinPresale} alt="Join Presale" className="btn-img" />
      </a>

      <a
        href="https://t.me/nippletips"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={telegram} alt="Telegram" className="btn-img" />
      </a>

      <a
        href="https://x.com/NippleTipsToken"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="Twitter" className="btn-img" />
      </a>

      <img
        src={contract}
        alt="Contract"
        className="btn-img"
        style={{ cursor: 'pointer' }}
        onClick={() => setIsModalOpen(true)}
      />

      <a
        href="https://npt-site.vercel.app/whitepaper.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >  
      <img src={whitepaper} alt="White Paper" className="btn-img" />
      </a>

      <a
        href="https://polygonscan.com"
        target="_blank"
        rel="noopener noreferrer"
      >  
      <img src={polygonscan} alt="PolygonScan" className="poly-btn" />
      </a>

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '24px',
            borderRadius: '8px',
            width: '300px',
            textAlign: 'center',
            boxShadow: '0 2px 12px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ fontSize: '18px', color: '#1e1e1e', marginBottom: '16px' }}>Which contract?</h2>

            <a
              href={tokenUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                backgroundColor: '#ff0092',
                color: '#fff',
                padding: '10px',
                borderRadius: '4px',
                marginBottom: '12px',
                textDecoration: 'none'
              }}
            >
              Token Contract (NPT)
            </a>

            <a
              href={presaleUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                backgroundColor: '#4f2a7c',
                color: '#fff',
                padding: '10px',
                borderRadius: '4px',
                textDecoration: 'none'
              }}
            >
              Presale Contract
            </a>

            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                marginTop: '14px',
                background: 'none',
                color: '#555',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: '14px'
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buttons;