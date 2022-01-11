/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Blocklist, BlocklistInterface } from "../Blocklist";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "newValue",
        type: "string",
      },
    ],
    name: "addHostName",
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
    name: "hostlist",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610534806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806309d11e301461003b578063a67d144814610057575b600080fd5b61005560048036038101906100509190610292565b610087565b005b610071600480360381019061006c91906102d3565b6100c6565b60405161007e9190610335565b60405180910390f35b6000819080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906100c2929190610172565b5050565b600081815481106100d657600080fd5b9060005260206000200160009150905080546100f190610415565b80601f016020809104026020016040519081016040528092919081815260200182805461011d90610415565b801561016a5780601f1061013f5761010080835404028352916020019161016a565b820191906000526020600020905b81548152906001019060200180831161014d57829003601f168201915b505050505081565b82805461017e90610415565b90600052602060002090601f0160209004810192826101a057600085556101e7565b82601f106101b957805160ff19168380011785556101e7565b828001600101855582156101e7579182015b828111156101e65782518255916020019190600101906101cb565b5b5090506101f491906101f8565b5090565b5b808211156102115760008160009055506001016101f9565b5090565b60006102286102238461037c565b610357565b90508281526020810184848401111561024057600080fd5b61024b8482856103d3565b509392505050565b600082601f83011261026457600080fd5b8135610274848260208601610215565b91505092915050565b60008135905061028c816104e7565b92915050565b6000602082840312156102a457600080fd5b600082013567ffffffffffffffff8111156102be57600080fd5b6102ca84828501610253565b91505092915050565b6000602082840312156102e557600080fd5b60006102f38482850161027d565b91505092915050565b6000610307826103ad565b61031181856103b8565b93506103218185602086016103e2565b61032a816104d6565b840191505092915050565b6000602082019050818103600083015261034f81846102fc565b905092915050565b6000610361610372565b905061036d8282610447565b919050565b6000604051905090565b600067ffffffffffffffff821115610397576103966104a7565b5b6103a0826104d6565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b82818337600083830152505050565b60005b838110156104005780820151818401526020810190506103e5565b8381111561040f576000848401525b50505050565b6000600282049050600182168061042d57607f821691505b6020821081141561044157610440610478565b5b50919050565b610450826104d6565b810181811067ffffffffffffffff8211171561046f5761046e6104a7565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6104f0816103c9565b81146104fb57600080fd5b5056fea264697066735822122077b95486f9ca4bb04979e876ac9d2af7699dbed3cb67e9f9e7bf0037444b93e464736f6c63430008040033";

type BlocklistConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BlocklistConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Blocklist__factory extends ContractFactory {
  constructor(...args: BlocklistConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Blocklist> {
    return super.deploy(overrides || {}) as Promise<Blocklist>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Blocklist {
    return super.attach(address) as Blocklist;
  }
  connect(signer: Signer): Blocklist__factory {
    return super.connect(signer) as Blocklist__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlocklistInterface {
    return new utils.Interface(_abi) as BlocklistInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Blocklist {
    return new Contract(address, _abi, signerOrProvider) as Blocklist;
  }
}