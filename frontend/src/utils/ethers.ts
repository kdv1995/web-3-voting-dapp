import { credentials } from "@/constants";
import { JsonRpcProvider, Contract } from "ethers";
import BallotABI from "../../../web3/artifacts/contracts/Ballot.sol/Ballot.json";

export function getProvider() {
  const provider = new JsonRpcProvider(credentials.rpcUrl);
  return provider;
}

export function getContract() {
  const provider = getProvider();
  const contract = new Contract(
    credentials.contractAddress,
    BallotABI.abi,
    provider,
  );
  return contract;
}

export async function getSigner() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  return signer;
}
