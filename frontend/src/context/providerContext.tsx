"use client";
import { useMetaMaskAuth } from "@/hooks/useMetamaskAuth";
import { getProvider } from "@/utils/ethers";
import { JsonRpcProvider, Signer } from "ethers";
import { ethers, BrowserProvider } from "ethers";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ProviderContextProps {
  children: ReactNode;
}

//Context
export const Web3Context = createContext<ProviderContextValues>({
  address: null,
  provider: null,
  connectToMetaMask: () => { },
});

//Interface of context values
interface ProviderContextValues {
  address: string | null;
  provider: BrowserProvider | JsonRpcProvider | null;
  connectToMetaMask: () => void;
}

//Provider
export function Web3NetworkProvider({ children }: ProviderContextProps) {
  const [provider, setProvider] = useState<
    BrowserProvider | null | JsonRpcProvider
  >(null);
  const [address, setAddress] = useState<string | null>(null);

  const checkAuthStatus = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const provider = new BrowserProvider(window.ethereum);
      await provider.getSigner().then((signer) => {
        setAddress(signer.address);
        setProvider(provider);
      });
    }
  };

  useEffect(() => {
    checkAuthStatus();
    if (window.ethereum) {
      const provider = new BrowserProvider(window.ethereum);

      setProvider(provider);
    } else {
      setProvider(getProvider());
    }
  }, []);

  const connectToMetaMask = async () => {
    await provider?.getSigner().then((signer) => {
      setAddress(signer.address);
    });
  };

  const contextValues = {
    address,
    provider,
    connectToMetaMask,
  };
  return (
    <Web3Context.Provider value={contextValues}>
      {children}
    </Web3Context.Provider>
  );
}
