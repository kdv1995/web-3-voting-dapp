/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BytesLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Ballot, BallotInterface } from "../Ballot";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "chairperson",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getProposal",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProposals",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "name",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "voteCount",
            type: "uint256",
          },
        ],
        internalType: "struct Ballot.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "giveRightToVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposal",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool",
      },
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vote",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winnerName",
    outputs: [
      {
        internalType: "bytes32",
        name: "winnerName_",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "winningProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "winningProposal_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015b0380380620015b083398181016040528101906200003791906200033a565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555060005b81518110156200016e57600260405180604001604052808484815181106200010f576200010e6200038b565b5b6020026020010151815260200160008152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508080600101915050620000e2565b5050620003ba565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001da826200018f565b810181811067ffffffffffffffff82111715620001fc57620001fb620001a0565b5b80604052505050565b60006200021162000176565b90506200021f8282620001cf565b919050565b600067ffffffffffffffff821115620002425762000241620001a0565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6200026d8162000258565b81146200027957600080fd5b50565b6000815190506200028d8162000262565b92915050565b6000620002aa620002a48462000224565b62000205565b90508083825260208201905060208402830185811115620002d057620002cf62000253565b5b835b81811015620002fd5780620002e888826200027c565b845260208401935050602081019050620002d2565b5050509392505050565b600082601f8301126200031f576200031e6200018a565b5b81516200033184826020860162000293565b91505092915050565b60006020828403121562000353576200035262000180565b5b600082015167ffffffffffffffff81111562000374576200037362000185565b5b620003828482850162000307565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6111e680620003ca6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806362564c481161006657806362564c48146101485780639e7b8d6114610166578063a3ec138d14610182578063c7f758a8146101b5578063e2ba53f0146101e65761009e565b80630121b93f146100a3578063013cf08b146100bf5780632e4176cf146100f05780635c19a95c1461010e578063609ff1bd1461012a575b600080fd5b6100bd60048036038101906100b89190610b0c565b610204565b005b6100d960048036038101906100d49190610b0c565b61034a565b6040516100e7929190610b61565b60405180910390f35b6100f861037e565b6040516101059190610bcb565b60405180910390f35b61012860048036038101906101239190610c12565b6103a2565b005b61013261073c565b60405161013f9190610c3f565b60405180910390f35b6101506107be565b60405161015d9190610d56565b60405180910390f35b610180600480360381019061017b9190610c12565b610831565b005b61019c60048036038101906101979190610c12565b6109e8565b6040516101ac9493929190610d93565b60405180910390f35b6101cf60048036038101906101ca9190610b0c565b610a45565b6040516101dd929190610b61565b60405180910390f35b6101ee610a9d565b6040516101fb9190610dd8565b60405180910390f35b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000209050600081600001540361028e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161028590610e50565b60405180910390fd5b8060010160009054906101000a900460ff16156102e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d790610ebc565b60405180910390fd5b60018160010160006101000a81548160ff02191690831515021790555081816002018190555080600001546002838154811061031f5761031e610edc565b5b9060005260206000209060020201600101600082825461033f9190610f3a565b925050819055505050565b6002818154811061035a57600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff1615610437576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042e90610fba565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036104a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049c90611026565b60405180910390fd5b5b600073ffffffffffffffffffffffffffffffffffffffff16600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461061457600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691503373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361060f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060690611092565b60405180910390fd5b6104a6565b60018160010160006101000a81548160ff021916908315150217905550818160010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090508060010160009054906101000a900460ff161561071757816000015460028260020154815481106106eb576106ea610edc565b5b9060005260206000209060020201600101600082825461070b9190610f3a565b92505081905550610737565b816000015481600001600082825461072f9190610f3a565b925050819055505b505050565b6000806000905060005b6002805490508110156107b957816002828154811061076857610767610edc565b5b90600052602060002090600202016001015411156107ac576002818154811061079457610793610edc565b5b90600052602060002090600202016001015491508092505b8080600101915050610746565b505090565b60606002805480602002602001604051908101604052809291908181526020016000905b82821015610828578382906000526020600020906002020160405180604001604052908160008201548152602001600182015481525050815260200190600101906107e2565b50505050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146108bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b690611124565b60405180910390fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161561094f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094690611190565b60405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541461099e57600080fd5b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000018190555050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154905084565b60008060028381548110610a5c57610a5b610edc565b5b906000526020600020906002020160000154915060028381548110610a8457610a83610edc565b5b9060005260206000209060020201600101549050915091565b60006002610aa961073c565b81548110610aba57610ab9610edc565b5b906000526020600020906002020160000154905090565b600080fd5b6000819050919050565b610ae981610ad6565b8114610af457600080fd5b50565b600081359050610b0681610ae0565b92915050565b600060208284031215610b2257610b21610ad1565b5b6000610b3084828501610af7565b91505092915050565b6000819050919050565b610b4c81610b39565b82525050565b610b5b81610ad6565b82525050565b6000604082019050610b766000830185610b43565b610b836020830184610b52565b9392505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bb582610b8a565b9050919050565b610bc581610baa565b82525050565b6000602082019050610be06000830184610bbc565b92915050565b610bef81610baa565b8114610bfa57600080fd5b50565b600081359050610c0c81610be6565b92915050565b600060208284031215610c2857610c27610ad1565b5b6000610c3684828501610bfd565b91505092915050565b6000602082019050610c546000830184610b52565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610c8f81610b39565b82525050565b610c9e81610ad6565b82525050565b604082016000820151610cba6000850182610c86565b506020820151610ccd6020850182610c95565b50505050565b6000610cdf8383610ca4565b60408301905092915050565b6000602082019050919050565b6000610d0382610c5a565b610d0d8185610c65565b9350610d1883610c76565b8060005b83811015610d49578151610d308882610cd3565b9750610d3b83610ceb565b925050600181019050610d1c565b5085935050505092915050565b60006020820190508181036000830152610d708184610cf8565b905092915050565b60008115159050919050565b610d8d81610d78565b82525050565b6000608082019050610da86000830187610b52565b610db56020830186610d84565b610dc26040830185610bbc565b610dcf6060830184610b52565b95945050505050565b6000602082019050610ded6000830184610b43565b92915050565b600082825260208201905092915050565b7f486173206e6f20726967687420746f20766f7465000000000000000000000000600082015250565b6000610e3a601483610df3565b9150610e4582610e04565b602082019050919050565b60006020820190508181036000830152610e6981610e2d565b9050919050565b7f416c726561647920766f7465642e000000000000000000000000000000000000600082015250565b6000610ea6600e83610df3565b9150610eb182610e70565b602082019050919050565b60006020820190508181036000830152610ed581610e99565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f4582610ad6565b9150610f5083610ad6565b9250828201905080821115610f6857610f67610f0b565b5b92915050565b7f596f7520616c726561647920766f7465642e0000000000000000000000000000600082015250565b6000610fa4601283610df3565b9150610faf82610f6e565b602082019050919050565b60006020820190508181036000830152610fd381610f97565b9050919050565b7f53656c662d64656c65676174696f6e20697320646973616c6c6f7765642e0000600082015250565b6000611010601e83610df3565b915061101b82610fda565b602082019050919050565b6000602082019050818103600083015261103f81611003565b9050919050565b7f466f756e64206c6f6f7020696e2064656c65676174696f6e2e00000000000000600082015250565b600061107c601983610df3565b915061108782611046565b602082019050919050565b600060208201905081810360008301526110ab8161106f565b9050919050565b7f4f6e6c79206368616972706572736f6e2063616e20676976652072696768742060008201527f746f20766f74652e000000000000000000000000000000000000000000000000602082015250565b600061110e602883610df3565b9150611119826110b2565b604082019050919050565b6000602082019050818103600083015261113d81611101565b9050919050565b7f54686520766f74657220616c726561647920766f7465642e0000000000000000600082015250565b600061117a601883610df3565b915061118582611144565b602082019050919050565b600060208201905081810360008301526111a98161116d565b905091905056fea26469706673582212208eb48f09769ca731253710e6b296f6eb0a33bfed80622714375cbb8c698f37bc64736f6c63430008180033";

type BallotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BallotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Ballot__factory extends ContractFactory {
  constructor(...args: BallotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    proposalNames: BytesLike[],
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(proposalNames, overrides || {});
  }
  override deploy(
    proposalNames: BytesLike[],
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(proposalNames, overrides || {}) as Promise<
      Ballot & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Ballot__factory {
    return super.connect(runner) as Ballot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BallotInterface {
    return new Interface(_abi) as BallotInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Ballot {
    return new Contract(address, _abi, runner) as unknown as Ballot;
  }
}
