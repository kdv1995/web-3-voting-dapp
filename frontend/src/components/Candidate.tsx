"use client";
import Image from "next/image";
import Link from "next/link";

interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  srcString: string;
  votes: BigInt;
}
export default function Candidate({ candidate }: { candidate: Candidate }) {
  const { id, name, email, phone, address, dateOfBirth, srcString, votes } =
    candidate;

  return (
    <>
      <div className="flex flex-col">
        <Link href={`/candidate/${name}`}>
          <div className="bg-gradient-to-tl">
            <div key={id}>
              <Image src={srcString} width={300} height={300} alt={name} />
              <div
                className={`${id === 0 ? "text-white bg-red-950" : "text-white bg-blue-950"} text-white rounded-lg px-2 py-2 mt-5`}
              >
                {name}
              </div>
              <div className="text-2xl">{phone}</div>
              <div className="text-2xl">{email}</div>
              <div className="text-2xl">{address}</div>
              <div className="text-2xl">{dateOfBirth}</div>

              <div
                className={`${id === 0 ? "text-white bg-red-950" : "text-white bg-blue-950"} text-white rounded-lg px-2 py-2 mt-5`}
              >
                Vote Count: {votes}
              </div>
            </div>
          </div>
        </Link>
        {true && (
          <button
            className={`${id === 0 ? "text-white bg-red-950" : "text-white bg-blue-950"} text-white rounded-lg px-5 py-2 mt-5`}
          >
            Vote
          </button>
        )}
      </div>
    </>
  );
}
