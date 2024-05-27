<!-- Basic Concepts -->
<!-- What is Web3? How does it differ from Web2? -->
<!---->
<!-- Web3 refers to a decentralized web powered by blockchain technology, enabling peer-to-peer transactions without intermediaries. Web2 is the current web model focused on centralization. -->
<!-- What is a blockchain? How does it work? -->
<!---->
<!-- A blockchain is a distributed ledger technology that records transactions across many computers. It works by grouping transactions into blocks, which are then linked in a chain through cryptographic hashes. -->
<!-- Explain the concept of a smart contract. -->
<!---->
<!-- A smart contract is a self-executing contract with the terms directly written into code. It runs on a blockchain, typically Ethereum, and automatically enforces and executes the terms of the agreement. -->
<!-- Solidity Specific -->
<!-- What are the main features of Solidity? -->
<!---->
<!-- Solidity is a statically typed, contract-oriented programming language designed for developing smart contracts. Key features include: -->
<!-- Strongly typed language. -->
<!-- Supports inheritance and libraries. -->
<!-- Provides support for various data types, including structs, arrays, and mappings. -->
<!-- Explain the difference between public, internal, external, and private visibility in Solidity. -->
<!---->
<!-- public: Accessible from both within the contract and externally. -->
<!-- internal: Accessible only within the current contract and derived contracts. -->
<!-- external: Accessible only from outside the contract. -->
<!-- private: Accessible only within the current contract. -->
<!-- What are modifiers in Solidity, and how are they used? -->
<!---->
<!-- Modifiers are used to change the behavior of functions in a declarative way. They are used for validating conditions before executing a function. For example, the onlyOwner modifier ensures that only the owner can call a specific function. -->
<!-- What is the purpose of the fallback function in Solidity? -->
<!---->
<!-- The fallback function is a default function that is called when a contract is sent Ether without any data or when the data sent does not match any function signature. -->
<!-- How does selfdestruct work in Solidity, and when would you use it? -->
<!---->
<!-- The selfdestruct function destroys the contract and sends its funds to a specified address. It is used for removing a contract from the blockchain and recovering unused Ether. -->
<!-- Advanced Topics -->
<!-- What are events in Solidity, and how are they used? -->
<!---->
<!-- Events are used to log data on the blockchain, allowing the calling of JavaScript callbacks in the client application. They are primarily used for logging and are cheaper than storing data on the blockchain. -->
<!-- Explain gas and gas limit in the context of Ethereum transactions. -->
<!---->
<!-- Gas is the unit of measure for computational work in executing transactions and smart contracts. The gas limit is the maximum amount of gas a user is willing to spend on a transaction. -->
<!-- What are reentrancy attacks, and how can they be prevented in Solidity? -->
<!---->
<!-- A reentrancy attack occurs when a contract calls an external contract before updating its state, allowing the external contract to call back into the original contract in an unexpected state. It can be prevented using the Checks-Effects-Interactions pattern or by employing mutex locks. -->
<!-- What is ERC-20, and why is it important? -->
<!---->
<!-- ERC-20 is a standard for creating fungible tokens on the Ethereum blockchain. It ensures that tokens created by different developers can interact seamlessly with DApps, exchanges, and wallets. -->
<!-- Describe the difference between ERC-721 and ERC-1155. -->
<!---->
<!-- ERC-721 is a standard for non-fungible tokens (NFTs), where each token is unique. ERC-1155 is a multi-token standard that allows for the creation of both fungible and non-fungible tokens within a single contract. -->
<!-- Practical Questions -->
<!-- Write a simple Solidity contract to store and retrieve a value. -->
<!---->
<!-- solidity -->
<!-- Copy code -->
<!-- pragma solidity ^0.8.0; -->
<!---->
<!-- contract SimpleStorage { -->
<!-- uint256 storedData; -->
<!---->
<!--     function set(uint256 x) public { -->
<!--         storedData = x; -->
<!--     } -->
<!---->
<!--     function get() public view returns (uint256) { -->
<!--         return storedData; -->
<!--     } -->
<!---->
<!-- } -->
<!-- How would you implement a function to safely transfer Ether in Solidity? -->
<!---->
<!-- solidity -->
<!-- Copy code -->
<!-- function safeTransfer(address payable recipient, uint256 amount) public { -->
<!-- require(address(this).balance >= amount, "Insufficient balance"); -->
<!-- (bool success, ) = recipient.call{value: amount}(""); -->
<!-- require(success, "Transfer failed"); -->
<!-- } -->
