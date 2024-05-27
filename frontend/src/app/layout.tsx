import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Web3NetworkProvider } from "@/context/providerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Homepage",
  description: "Homepage for voting process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-7xl m-auto max-h-full">
          <Web3NetworkProvider>
            <Header />
            {children}
          </Web3NetworkProvider>
        </div>
      </body>
    </html>
  );
}
