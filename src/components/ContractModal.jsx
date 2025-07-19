import React, { useState } from 'react';

export default function ContractModal() {
  const [isOpen, setIsOpen] = useState(false);

  const tokenUrl = "https://polygonscan.com/address/0xBd4bD63253f0Be7512daFB00bc23aAD36CAF0114#code";
  const presaleUrl = "https://polygonscan.com/address/0x5D7c8576F9FaA7dA4b1905B85d1243EF86d34761#code";

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '10px 16px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        View Contract
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#fdfbe2',
            padding: '24px',
            borderRadius: '8px',
            width: '300px',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{ fontSize: '18px', marginBottom: '16px' }}>Which contract?</h2>

            <a
              href={tokenUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                backgroundColor: '#007BFF',
                color: '#fff',
                padding: '10px',
                borderRadius: '4px',
                marginBottom: '10px',
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
                backgroundColor: '#6f42c1',
                color: '#fff',
                padding: '10px',
                borderRadius: '4px',
                textDecoration: 'none'
              }}
            >
              Presale Contract
            </a>

            <button
              onClick={() => setIsOpen(false)}
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
}