import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import userNPTGroup from "../assets/user-npt-group.svg";
import connectWalletBtn from "../assets/connect-wallet-btn.svg";
import "../styles/UserNPT.css";

// NPT token details
const NPT_TOKEN_ADDRESS = "0x4d3E63345E3B92CE2996caA8e8c64551Ee934721";
const NPT_ABI = [
  "function balanceOf(address) view returns (uint256)",
  "function decimals() view returns (uint8)",
];

const UserNPT = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  const handleConnect = async () => {
    const confirmed = window.confirm("Do you want to connect your wallet?");
    if (!confirmed) return;

    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("User rejected connection", error);
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask to continue.");
    }
  };

  const fetchBalance = async (address) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(NPT_TOKEN_ADDRESS, NPT_ABI, provider);
      const [rawBalance, decimals] = await Promise.all([
        contract.balanceOf(address),
        contract.decimals(),
      ]);
      const formatted = ethers.formatUnits(rawBalance, decimals);
      setBalance(Number(formatted).toLocaleString(undefined, {
        maximumFractionDigits: 4,
      }));
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    if (walletAddress) {
      fetchBalance(walletAddress);
    }
  }, [walletAddress]);

  return (
    <div className="user-npt-wrapper">
      <img src={userNPTGroup} className="user-npt-group" alt="User NPT Group" />

      {!walletAddress ? (
        <>
          <p className="connect-wallet-message">CONNECT WALLET</p>
          <img
            src={connectWalletBtn}
            className="connect-wallet-btn"
            alt="Connect Wallet"
            onClick={handleConnect}
          />
        </>
      ) : (
        <>
          <p className="wallet-address">
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </p>
          {balance !== null ? (
            <p className="npt-balance">{balance}</p>
          ) : (
            <p className="npt-balance">LOADING NPT...</p>
          )}
          <button className="disconnect-btn" onClick={() => setWalletAddress(null)}>
            Disconnect
          </button>
        </>
      )}
    </div>
  );
};

export default UserNPT;