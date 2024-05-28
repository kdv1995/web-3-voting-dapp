import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  paths: {
    sources: "../frontend/artifacts",
  },
  solidity: {
    version: "0.8.4",
  },
};

export default config;
