"use client";
import { getContract } from "@/utils/ethers";
import { Provider, Contract, Signer, ethers, BrowserProvider } from "ethers";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ProviderContextProps {
  children: ReactNode;
}

//Context
export const Web3Context = createContext<ProviderContextValues>({
  isProviderConnected: false,
  setProviderConnected: () => {},
  contract: null,
  provider: null,
  setProvider: () => {},
  connectWallet: () => {},
});

//Interface of context values
interface ProviderContextValues {
  isProviderConnected: boolean;
  setProviderConnected: (isConnected: boolean) => void;
  contract: Contract | null;
  provider: Provider | null;
  setProvider: (provider: Provider) => void;
  connectWallet: () => void;
}

//Provider
export function Web3NetworkProvider({ children }: ProviderContextProps) {
  const [isProviderConnected, setProviderConnected] = useState<boolean>(false);
  const [contract, setContract] = useState<Contract | null>(null);
  const [provider, setProvider] = useState<Provider | BrowserProvider | null>(
    null,
  );

  const connectWallet = async () => {
    let signer = null;

    let provider;
    if (window?.ethereum == null) {
      // If MetaMask is not installed, we use the default provider,
      // which is backed by a variety of third-party services (such
      // as INFURA). They do not have private keys installed,
      // so they only have read-only access
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
      setProvider(provider);
      setProviderConnected(true);
    } else {
      // Connect to the MetaMask EIP-1193 object. This is a standard
      // protocol that allows Ethers access to make all read-only
      // requests through MetaMask.
      provider = new ethers.BrowserProvider(window?.ethereum);
      setProvider(provider);

      // It also provides an opportunity to request access to write
      // operations, which will be performed by the private key
      // that MetaMask manages for the user.
      signer = await provider.getSigner();
      setProviderConnected(true);
    }
  };

  useEffect(() => {
    const contract = getContract();
    setContract(contract);
  }, []);

  const contextValues: ProviderContextValues = {
    contract,
    provider,
    setProvider,
    connectWallet,
    isProviderConnected,
    setProviderConnected,
  };
  console.log(contextValues);

  return (
    <Web3Context.Provider value={contextValues}>
      {children}
    </Web3Context.Provider>
  );
}
