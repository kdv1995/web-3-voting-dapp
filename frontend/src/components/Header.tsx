'use client';
import { useContext } from "react";
import ConnectButton from "./ConnectButton";
import { ProviderContext } from "@/context/providerContext";

export default function Header() {
  const context = useContext(ProviderContext);
  return (
    <nav className="bg-gray-800">
      <button className="text-white p-3">Home</button>
      <button className="text-white p-3">About</button>
      <button className="text-white p-3">Contact</button>
      <ConnectButton />
    </nav>
  );
}
