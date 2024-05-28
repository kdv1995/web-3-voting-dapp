import { useEffect, useState } from "react";

export const useMetaMaskAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [account, setAccount] = useState("");

  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setIsAuthenticated(true);
          setAccount(accounts[0]);
          localStorage.setItem("isAuthenticated", "true");
        } else {
          setIsAuthenticated(false);
          localStorage.removeItem("isAuthenticated");
        }
      }
    };

    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      checkMetaMaskConnection();
    }
  }, []);

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (accounts.length > 0) {
          setIsAuthenticated(true);
          setAccount(accounts[0]);
          localStorage.setItem("isAuthenticated", "true");
        }
      } catch (error) {
        console.error("User denied account access", error);
      }
    } else {
      console.error("MetaMask is not installed");
    }
  };

  return { isAuthenticated, connectMetaMask, account };
};
