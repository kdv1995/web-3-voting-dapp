"use client";
import { JsonRpcProvider, ethers } from "ethers";
import { createContext, ReactNode, useMemo } from "react";

export const ProviderContext = createContext({
  isConnected: false,
  provider: JsonRpcProvider,
  contractAddress: "",
});

interface ProviderContextProps {
  children: ReactNode;
}

export default function ProviderContextProvider({
  children,
}: ProviderContextProps) {
  const provider = new ethers.JsonRpcProvider("http://localhost:8545");

  const isConnected = provider.getNetwork();

  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  const contextValues = useMemo(
    () => ({
      isConnected,
      provider,
      contractAddress,
    }),
    [isConnected, provider],
  );

  return (
    <ProviderContext.Provider value={contextValues}>
      {children}
    </ProviderContext.Provider>
  );
}
