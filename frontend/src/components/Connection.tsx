"use client";
import { ethers } from "ethers";
import BallotContractABI from "../../../web3/artifacts/contracts/Ballot.sol/Ballot.json";
import { useContext, useEffect, useState } from "react";
import { Signer } from "ethers";
import Candidate from "./Candidate";
import { ProviderContext } from "@/context/providerContext";

export default function Connection() {
  const context = useContext(ProviderContext);
  // function connect() {
  //   const provider = new ethers.JsonRpcProvider("http://localhost:8545");
  //   const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  //   const contract: ethers.Contract = new ethers.Contract(
  //     contractAddress,
  //     BallotContractABI.abi,
  //     provider,
  //   );
  // }

  // async function grantRightToVote(addressToGrantRight: string) {
  //   const privateKey =
  //     "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
  //   const wallet = new ethers.Wallet(privateKey, provider);
  //
  //   const contractWithSigner = contract.connect(wallet);
  //
  //   try {
  //     const tx = await contractWithSigner.giveRightToVote(addressToGrantRight);
  //     await tx.wait();
  //     console.log("Transaction mined");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  /* const [proposalList, setProposalList] = useState([]); */

  // async function getAccount() {
  //   const { address: addressOne } = await provider.getSigner(0);
  //   const { address: addressTwo } = await provider.getSigner(1);
  //   setAccountOne(addressOne);
  //   setAccountTwo(addressTwo);
  // }

  // const getProposals = async () => {
  //   const proposals = await contract.getProposals();
  //
  //   let listOfProposalsAsArray = proposals.map(
  //     (proposal: { name: string; voteCount: number }) => {
  //       return {
  //         name: proposal.name,
  //         voteCount: proposal.voteCount.toString(),
  //       };
  //     },
  //   );
  //
  //   return listOfProposalsAsArray;
  // };

  // const voterPrivateKey =
  //   "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d"; // Private key of the voter
  // const wallet = new ethers.Wallet(voterPrivateKey, provider);

  // async function voteForProposal(proposal: any) {
  //   // Get a contract instance with the voter's wallet
  //   const contractWithSigner = contract.connect(wallet);
  //
  //   // Call the vote function
  //   const tx = await contractWithSigner.vote(proposal);
  //
  //   // Wait for the transaction to be mined
  //   await tx.wait();
  //
  //   console.log("Vote submitted successfully.");
  // }
  //
  // const proposalIndex = 0;
  //
  // useEffect(() => {
  //   getProposals()
  //     .then((proposals) => setProposalList(proposals))
  //     .catch((error) => console.error(error));
  // }, []);

  return <></>;
}
