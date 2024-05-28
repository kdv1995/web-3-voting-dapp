import { credentials } from "@/constants";
import { JsonRpcProvider, Contract, BrowserProvider } from "ethers";
import BallotABI from "@/artifacts/contracts/Ballot.sol/Ballot.json";
import { Signer } from "ethers";
import { Provider } from "ethers";

export function getProvider() {
  const provider = new JsonRpcProvider(credentials.rpcUrl);
  return provider;
}

export function getContractReadOnly(provider: BrowserProvider | Provider) {
  const contract = new Contract(
    credentials.contractAddress,
    BallotABI.abi,
    provider,
  );
  return { contract };
}
export function getContractStateChanges(singer: Signer) {
  const contract = new Contract(
    credentials.contractAddress,
    BallotABI.abi,
    singer,
  );
  return { contract };
}

export async function getSigner() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  return signer;
}
