"use client";
import { useState } from "react";
import { ethers } from "ethers";

export default function ConnectButton() {
  const [connected, setConnected] = useState(false);

  const connectToMetaMask = async () => {
    setConnected(true);
  };

  return (
    <button className="text-white p-3" onClick={connectToMetaMask}>
      {connected ? "Connected" : "Connect to MetaMask"}
    </button>
  );
}
