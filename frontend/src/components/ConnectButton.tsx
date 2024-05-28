"use client";

import { Web3Context } from "@/context/providerContext";
import { useContext } from "react";

export default function ConnectButton() {
  const { connectToMetaMask, address } = useContext(Web3Context);

  return (
    <div>
      <>
        {address ? (
          <span className="text-white p-3 bg-blue-700">
            Connected with address: {address}
          </span>
        ) : (
          <>
            <span className="text-white p-3">Want to vote?</span>
            <button
              className="bg-red-500 text-white px-5 py-2 rounded"
              onClick={connectToMetaMask}
            >
              Connect with metamask
            </button>
          </>
        )}
      </>
    </div>
  );
}
