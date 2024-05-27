"use client";
import ConnectButton from "./ConnectButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="">
      <nav className="bg-gray-600 flex justify-between items-center p-3">
        <Link href="/" className="text-white p-3">
          Home
        </Link>
        <ConnectButton />
      </nav>
    </header>
  );
}
