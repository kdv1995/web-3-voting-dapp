"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Web3Context } from "@/context/providerContext";
interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  srcString: string;
}
export default function Candidate({ candidate }: { candidate: Candidate }) {
  const { isProviderConnected } = useContext(Web3Context);
  const { id, name, email, phone, address, dateOfBirth, srcString } = candidate;
  return (
    <>
      <Link href={`/candidate/${name}`}>
        <div className="bg-gradient-to-tl">
          <div key={id}>
            <Image src={srcString} width={300} height={300} alt={name} />
            <div className="text-4xl divide-red-100 text-red-600">{name}</div>
            <div className="text-2xl">{phone}</div>
            <div className="text-2xl">{email}</div>
            <div className="text-2xl">{address}</div>
            <div className="text-2xl">{dateOfBirth}</div>
            {isProviderConnected && (
              <button
                className={`${id === 0 ? "text-white bg-red-950" : "text-white bg-blue-950"} text-white rounded-lg px-5 py-2 mt-5`}
              >
                Vote
              </button>
            )}
          </div>
        </div>
      </Link>
    </>
  );
}
