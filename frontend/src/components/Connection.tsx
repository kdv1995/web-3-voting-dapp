"use client";
import { ethers } from "ethers";
import BallotContractABI from "../../../web3/artifacts/contracts/Ballot.sol/Ballot.json";
import Image from "next/image";
import Biden from "../app/images/biden.jpeg";
import Trump from "../app/images/trump.jpeg";
import { useEffect, useState } from "react";
import { Signer } from "ethers";

export default function Connection() {
  const provider = new ethers.JsonRpcProvider("http://localhost:8545");

  const [accountOne, setAccountOne] = useState<string>("");

  const [accountTwo, setAccountTwo] = useState<string>("");
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  let contract: ethers.Contract = new ethers.Contract(
    contractAddress,
    BallotContractABI.abi,
    provider,
  );

  const addressToGrantRight = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  async function grantRightToVote(addressToGrantRight: string) {
    const privateKey =
      "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const wallet = new ethers.Wallet(privateKey, provider);

    const contractWithSigner = contract.connect(wallet);

    try {
      const tx = await contractWithSigner.giveRightToVote(addressToGrantRight);
      await tx.wait();
      console.log("Transaction mined");
    } catch (error) {
      console.error(error);
    }
  }

  const [proposalList, setProposalList] = useState([]);

  async function getAccount() {
    const { address: addressOne } = await provider.getSigner(0);
    const { address: addressTwo } = await provider.getSigner(1);
    setAccountOne(addressOne);
    setAccountTwo(addressTwo);
  }

  const getProposals = async () => {
    const proposals = await contract.getProposals();

    let listOfProposalsAsArray = proposals.map(
      (proposal: { name: string; voteCount: number }) => {
        return {
          name: proposal.name,
          voteCount: proposal.voteCount.toString(),
        };
      },
    );

    return listOfProposalsAsArray;
  };

  const voterPrivateKey =
    "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"; // Private key of the voter
  const wallet = new ethers.Wallet(voterPrivateKey, provider);

  async function voteForProposal(proposal: any) {
    // Get a contract instance with the voter's wallet
    const contractWithSigner = contract.connect(wallet);

    // Call the vote function
    const tx = await contractWithSigner.vote(proposal);

    // Wait for the transaction to be mined
    await tx.wait();

    console.log("Vote submitted successfully.");
  }

  const proposalIndex = 0;

  useEffect(() => {
    getProposals()
      .then((proposals) => setProposalList(proposals))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="flex gap-16">
        <div>
          <Image src={Biden} alt="Joe Biden" />
          <div className="text-4xl divide-red-100 text-red-600">Trump</div>
          <div className="text-2xl">Votes: 50</div>
        </div>
        <div>
          <Image src={Trump} alt="Donald J Trump" />
          <div className="text-4xl divide-blue-100 text-blue-600">Biden</div>
          <div className="text-2xl">Votes: 25</div>
        </div>
      </div>
      <button
        onClick={getProposals}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Get Proposal
      </button>

      <ul>
        {proposalList.map((proposal, index) => (
          <li key={index}>
            {proposal.name} - {proposal.voteCount}
          </li>
        ))}
      </ul>

      <button onClick={getAccount}>Get account</button>

      <button
        onClick={() => grantRightToVote(addressToGrantRight)}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Grant right to vote
      </button>

      <button
        onClick={() => voteForProposal(proposalIndex)}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Vote for proposal {proposalIndex}
      </button>
    </>
  );
}
