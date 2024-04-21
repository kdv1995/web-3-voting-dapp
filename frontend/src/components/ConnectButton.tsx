"use client";
import { useState } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

export default function ConnectButton() {
  const [connected, setConnected] = useState(false);

  const connectToMetaMask = async () => {
    const ethereum = window.ethereum;
    const provider = new ethers.BrowserProvider(ethereum);
    await provider.send("eth_requestAccounts", []);
    console.log(await provider.getSigner());
    // You're now connected. You can access provider to interact with Ethereum.
    setConnected(true);
  };

  return (
    <button className="text-white p-3" onClick={connectToMetaMask}>
      {connected ? "Connected" : "Connect to MetaMask"}
    </button>
  );
}
