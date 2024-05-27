"use client";
import Candidate from "@/components/Candidate";
import Biden from "../app/images/biden.jpeg";
import Trump from "../app/images/trump.jpeg";
import { useContext, useState, useEffect } from "react";
import { Web3Context } from "@/context/providerContext";

export default function Home() {
  const { contract } = useContext(Web3Context);

  return (
    <main className="">
      <div className="flex gap-28">
        <div className="flex justify-between gap-28">
          <Candidate
            candidate={{
              id: 0,
              name: "Donald Trump",
              email: "donaldtrump@gmail.com",
              phone: "+1 202-456-1111",
              address:
                "1600 Pennsylvania Avenue NW, Washington, D.C. 20500, USA",
              dateOfBirth: "14.06.1946",
              srcString: Biden.src,
            }}
          />
        </div>
        <div className="">
          <Candidate
            candidate={{
              id: 1,
              name: "Joe Biden",
              email: "joebiden@gmail.com",
              phone: "+1 224-468-1111",
              address:
                "1600 Pennsylvania Avenue NW, Washington, D.C. 20500, USA",
              dateOfBirth: "30.11.1942",
              srcString: Trump.src,
            }}
          />
        </div>
      </div>
    </main>
  );
}
