"use client";
import { JsonRpcProvider, ethers } from "ethers";
import { createContext, ReactNode, useState, useEffect } from "react";

export const ProviderContext = createContext<ProviderContextValues>({
  isConnected: false,
  provider:  new JsonRpcProvider("http://localhost:8545"),
  contractAddress: "",
});

interface ProviderContextProps {
  children: ReactNode;
}
interface ProviderContextValues {
  isConnected: boolean;
  provider: JsonRpcProvider;
  contractAddress: string;
}

export default function ProviderContextProvider({
  children,
}: ProviderContextProps) {
  const [isConnected, setIsConnected] = useState(false);
  const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  useEffect(() => {
    async function checkNetwork() {
      try {
        await provider.getNetwork();
        setIsConnected(true);
      } catch (error) {
        setIsConnected(false);
        console.error("Failed to connect to network", error);
      }
    }

    checkNetwork();
  }, [provider]);

  const contextValues = {
    isConnected,
    provider,
    contractAddress,
  };

  return (
    <ProviderContext.Provider value={contextValues}>
      {children}
    </ProviderContext.Provider>
  );
}
