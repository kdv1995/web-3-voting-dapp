import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import "@nomicfoundation/hardhat-ignition";

const BallotModule = buildModule("BallotModule", (m) => {
  // Define candidates (proposal names) as bytes32 array
  const candidates = [
    "0x506f73616c310000000000000000000000000000000000000000000000000000",
    "0x506f73616c320000000000000000000000000000000000000000000000000000",
  ];

  // Deploy the Ballot contract with the candidates array passed to the constructor
  const ballot = m.contract("Ballot", [candidates]);

  return { ballot };
});

export default BallotModule;
