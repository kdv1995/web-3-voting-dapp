"use client";

import { credentials } from "@/constants";
import { Web3Context } from "@/context/providerContext";
import { ethers } from "ethers";
import { useContext } from "react";

export default function ConnectButton() {
  const { connectWallet, contract, provider, setProvider } =
    useContext(Web3Context);

  return (
    <div>
      <span className="text-white p-3">Want to vote?</span>
      <button
        onClick={connectWallet}
        className="text-white bg-red-950 p-3 rounded-lg"
      >
        {provider ? "Connected" : "Connect Wallet"}
      </button>
    </div>
  );
}
