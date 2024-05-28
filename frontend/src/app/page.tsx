"use client";
import Candidate from "@/components/Candidate";
import Biden from "../app/images/biden.jpeg";
import Trump from "../app/images/trump.jpeg";
import { useContext, useState, useEffect } from "react";
import { Web3Context } from "@/context/providerContext";
import { Contract } from "ethers";
import { credentials } from "@/constants";
import ReadyContract from "@/artifacts/contracts/Ballot.sol/Ballot.json";

export default function Home() {
  const { provider } = useContext(Web3Context);
  const [candidates, setCandidate] = useState({
    0: {
      id: 0,
      name: "Donald Trump",
      email: "donaldtrump@gmail.com",
      phone: "+1 202-456-1111",
      address: "1600 Pennsylvania Avenue NW, Washington, D.C. 20500, USA",
      dateOfBirth: "14.06.1946",
      srcString: Biden.src,
      votes: BigInt(0),
    },

    1: {
      id: 1,
      name: "Joe Biden",
      email: "joebiden@gmail.com",
      phone: "+1 224-468-1111",
      address: "1600 Pennsylvania Avenue NW, Washington, D.C. 20500, USA",
      dateOfBirth: "30.11.1942",
      srcString: Trump.src,
      votes: BigInt(0),
    },
  });
  const contract = new Contract(
    credentials.contractAddress,
    ReadyContract.abi,
    provider,
  );

  const fetchCandidates = async () => {
    const candidates = await contract.getProposals();
    // setCandidates(candidates);
  };

  const getVotesByCandidate = async (id: number) => {
    const votes = await contract.getVotesByProposal(id);
    const bigIntVotesConverted = BigInt(votes);
    setCandidate((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        votes: bigIntVotesConverted,
      },
    }));
    return bigIntVotesConverted;
  };

  useEffect(() => {
    getVotesByCandidate(0);
    getVotesByCandidate(1);
  }, []);

  return (
    <main className="">
      <button onClick={fetchCandidates}>Fetch Candidates</button>
      <button onClick={() => getVotesByCandidate(0)}>
        Get Votes for Trump
      </button>
      <div className="flex gap-28">
        <div className="flex justify-between gap-28">
          <Candidate
            candidate={{
              id: candidates[0].id,
              name: candidates[0].name,
              email: candidates[0].email,
              phone: candidates[0].phone,
              address: candidates[0].address,
              dateOfBirth: candidates[0].dateOfBirth,
              srcString: candidates[0].srcString,
              votes: candidates[0].votes,
            }}
          />
        </div>
        <div className="">
          <Candidate
            candidate={{
              id: candidates[1].id,
              name: candidates[1].name,
              email: candidates[1].email,
              phone: candidates[1].phone,
              address: candidates[1].address,
              dateOfBirth: candidates[1].dateOfBirth,
              srcString: candidates[1].srcString,
            }}
          />
        </div>
      </div>
    </main>
  );
}
