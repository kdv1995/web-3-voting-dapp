# web-3-voting-project

## Description

This is a simple voting project that allows users to vote for their favorite candidate. The project is built using Solidity, React, and Hardhat.

## Installation

To install the project, clone the repository and run the following commands:

```bash
cd web-3-voting-project && cd web3
yarn install

cd web-3-voting-project && cd frontend
yarn install
```

## Usage

To run the project, run the following commands:

```bash
cd web-3-voting-project && cd web3
npx hardhat node

cd web-3-voting-project && cd frontend
yarn dev
```

## Start own node

To start your own node, run the following command:

```bash
npx hardhat node

```

## Compilation

Go to the web3 folder and run the following command:

```bash
npx hardhat compile
```

## Deployment of smart contract to local network

Go to the web3 folder and run the following command:

```bash
npx hardhat ignition deploy ./web3/ignition/modules/Ballot.ts --network localhost
```



## Usage of smart contract thorugh web3 frontend


Go to the frontend folder and run the following command:

```bash
yarn dev
```

Now you can interact with the smart contract through the frontend.

