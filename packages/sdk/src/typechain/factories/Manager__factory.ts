/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Manager, ManagerInterface } from "../Manager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_msImpl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_intvImpl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_botDAO",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ADDRESS_ZERO",
    type: "error",
  },
  {
    inputs: [],
    name: "ALREADY_INITIALIZED",
    type: "error",
  },
  {
    inputs: [],
    name: "Create2Error",
    type: "error",
  },
  {
    inputs: [],
    name: "DELEGATE_CALL_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "INITIALIZING",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_TARGET",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    name: "INVALID_UPGRADE",
    type: "error",
  },
  {
    inputs: [],
    name: "NOT_INITIALIZING",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_CALL",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_DELEGATECALL",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_OWNER",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_PENDING_OWNER",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_PROXY",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_UUPS",
    type: "error",
  },
  {
    inputs: [],
    name: "UNSUPPORTED_UUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "canceledOwner",
        type: "address",
      },
    ],
    name: "OwnerCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pendingOwner",
        type: "address",
      },
    ],
    name: "OwnerPending",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "streamId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "streamType",
        type: "string",
      },
    ],
    name: "StreamCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "streams",
        type: "address[]",
      },
    ],
    name: "batchRelease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "botDAO",
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
    inputs: [],
    name: "cancelOwnershipTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_interval",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_owed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tip",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "createIntvStream",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_msPayments",
        type: "uint256[]",
      },
      {
        internalType: "uint64[]",
        name: "_msDates",
        type: "uint64[]",
      },
      {
        internalType: "uint96",
        name: "_tip",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "createMSStream",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_interval",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "getIntvStreamAddress",
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
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint64[]",
        name: "_msDates",
        type: "uint64[]",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "getMSSStreamAddress",
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
        name: "streamImpl",
        type: "address",
      },
    ],
    name: "getStreamVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "intvImpl",
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
    inputs: [],
    name: "msImpl",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pendingOwner",
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
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "safeTransferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610100604052306080523480156200001657600080fd5b50604051620023a1380380620023a1833981016040819052620000399162000157565b600054610100900460ff161580158062000057575060005460ff1615155b801562000087575062000075306200013460201b620011cf1760201c565b8062000087575060005460ff16600114155b15620000a65760405163439a74c960e01b815260040160405180910390fd5b6000805460ff191660011790558015620000ca576000805461ff0019166101001790555b6001600160a01b0380851660a05283811660c052821660e05280156200012a576000805461ff0019169055604051600181527fbe9b076dc5b65990cca9dd9d7366682482e7817a6f6bc7f4faf4dc32af497f329060200160405180910390a15b50505050620001a1565b3b151590565b80516001600160a01b03811681146200015257600080fd5b919050565b6000806000606084860312156200016d57600080fd5b62000178846200013a565b925062000188602085016200013a565b915062000198604085016200013a565b90509250925092565b60805160a05160c05160e051612180620002216000396000818161022b0152818161065b0152610aef01526000818161033b015281816104f401526105880152600081816101c001528181610a5a015261113f01526000818161083d0152818161089701528181610bde01528181610c380152610d2b01526121806000f3fe60806040526004361061015f5760003560e01c806379ba5097116100c0578063c4d66de811610074578063e30c397811610059578063e30c39781461040c578063f2f6b34114610437578063f2fde38b1461045757600080fd5b8063c4d66de8146103cc578063db2d5841146103ec57600080fd5b806394470642116100a55780639447064214610329578063a0a8e4601461035d578063c4901083146103ac57600080fd5b806379ba5097146102e35780638da5cb5b146102f857600080fd5b80633659cfe6116101175780634bb8bcb3116100fc5780634bb8bcb31461028d5780634f1ef286146102ad57806352d1902d146102c057600080fd5b80633659cfe61461024d578063395db2cd1461026d57600080fd5b8063180c39b311610148578063180c39b3146101e257806323452b9c14610202578063354a75d41461021957600080fd5b80630ab390f9146101645780630b2a2575146101ae575b600080fd5b34801561017057600080fd5b5061018461017f3660046119df565b610477565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156101ba57600080fd5b506101847f000000000000000000000000000000000000000000000000000000000000000081565b3480156101ee57600080fd5b506101846101fd366004611a3e565b610525565b34801561020e57600080fd5b50610217610754565b005b34801561022557600080fd5b506101847f000000000000000000000000000000000000000000000000000000000000000081565b34801561025957600080fd5b50610217610268366004611ab2565b610826565b34801561027957600080fd5b50610217610288366004611ab2565b61097e565b34801561029957600080fd5b506101846102a8366004611b19565b610a52565b6102176102bb366004611c92565b610bc7565b3480156102cc57600080fd5b506102d5610d11565b6040519081526020016101a5565b3480156102ef57600080fd5b50610217610da7565b34801561030457600080fd5b5060005462010000900473ffffffffffffffffffffffffffffffffffffffff16610184565b34801561033557600080fd5b506101847f000000000000000000000000000000000000000000000000000000000000000081565b34801561036957600080fd5b5060408051808201909152600581527f312e302e3000000000000000000000000000000000000000000000000000000060208201525b6040516101a59190611d47565b3480156103b857600080fd5b5061039f6103c7366004611ab2565b610eb1565b3480156103d857600080fd5b506102176103e7366004611ab2565b610ec2565b3480156103f857600080fd5b50610217610407366004611d98565b61104c565b34801561041857600080fd5b5060015473ffffffffffffffffffffffffffffffffffffffff16610184565b34801561044357600080fd5b50610184610452366004611dda565b611106565b34801561046357600080fd5b50610217610472366004611ab2565b61116f565b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606088811b8216602084015260348301889052605483018790526074830186905284811b8216609484015283901b1660a8820152600090819060bc016040516020818303038152906040528051906020012090506105197f0000000000000000000000000000000000000000000000000000000000000000826111d5565b98975050505050505050565b6040517fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060608a811b82166020840152603483018a9052605483018990526074830188905283811b8216609484015284901b1660a882015260009081906105c7907f00000000000000000000000000000000000000000000000000000000000000009060bc015b604051602081830303815290604052805190602001206112a4565b6040517f2aca6b8800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8c8116600483015267ffffffffffffffff808d1660248401528b16604483015263ffffffff8a1660648301526bffffffffffffffffffffffff8816608483015260a4820189905286811660c483015285811660e48301527f0000000000000000000000000000000000000000000000000000000000000000811661010483015291925090821690632aca6b889061012401600060405180830381600087803b1580156106ad57600080fd5b505af11580156106c1573d6000803e3d6000fd5b50506040805173ffffffffffffffffffffffffffffffffffffffff85168152602081018290526009918101919091527f496e74657276616c73000000000000000000000000000000000000000000000060608201527faad763e029490bc6f707c8985ebbddcc804136cdc9f2d51c64e39b12eea76d21925060800190505b60405180910390a19998505050505050505050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1633146107ab576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546000805460405173ffffffffffffffffffffffffffffffffffffffff9384169362010000909204909116917f682679deecef4dcd49674845cc1e3a075fea9073680aa445a8207d5a4bdea3da91a3600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610895576040517f43d22ee900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1661090a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610957576040517fe74d90a000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109608161139e565b61097b816040518060200160405280600081525060006113f5565b50565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1633146109d5576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8381169182179092556000805460405192936201000090910416917f4f2638f5949b9614ef8d5e268cb51348ad7f434a34812bf64b6e95014fbd357e9190a350565b600080610a927f00000000000000000000000000000000000000000000000000000000000000008b898987896040516020016105ac959493929190611e68565b6040517fa067674f00000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff82169063a067674f90610b17908d908d908d908d908d908d908d908d907f000000000000000000000000000000000000000000000000000000000000000090600401611eee565b600060405180830381600087803b158015610b3157600080fd5b505af1158015610b45573d6000803e3d6000fd5b50506040805173ffffffffffffffffffffffffffffffffffffffff8516815260208101829052600a918101919091527f4d696c6573746f6e65730000000000000000000000000000000000000000000060608201527faad763e029490bc6f707c8985ebbddcc804136cdc9f2d51c64e39b12eea76d219250608001905061073f565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003610c36576040517f43d22ee900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610cab7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1614610cf8576040517fe74d90a000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d018261139e565b610d0d828260016113f5565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614610d82576040517f575bc92e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b60015473ffffffffffffffffffffffffffffffffffffffff163314610df8576040517f065cd53100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405133926201000090920473ffffffffffffffffffffffffffffffffffffffff16917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7691a360018054600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff1673ffffffffffffffffffffffffffffffffffffffff831662010000021790557fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6060610ebc82611548565b92915050565b600054610100900460ff1615801580610edf575060005460ff1615155b8015610efb5750303b151580610efb575060005460ff16600114155b15610f32576040517f439a74c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610f9057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b73ffffffffffffffffffffffffffffffffffffffff8216610fdd576040517f66e7950900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fe6826115f1565b8015610d0d57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527fbe9b076dc5b65990cca9dd9d7366682482e7817a6f6bc7f4faf4dc32af497f329060200160405180910390a15050565b60005b818110156111015782828281811061106957611069612019565b905060200201602081019061107e9190611ab2565b73ffffffffffffffffffffffffffffffffffffffff166386d1a69f6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156110ca573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ee9190612048565b50806110f981612061565b91505061104f565b505050565b6000808686868587604051602001611122959493929190611e68565b6040516020818303038152906040528051906020012090506111647f0000000000000000000000000000000000000000000000000000000000000000826111d5565b979650505050505050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1633146111c6576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61097b816116aa565b3b151590565b600061129d8383306040517f3d605d80600a3d3981f336603057343d52307f0000000000000000000000000081527f830d2d700a97af574b186c80d40429385d24241565b08a7c559ba283a964d9b160138201527f60203da23d3df35b3d3d3d3d363d3d37363d73000000000000000000000000006033820152606093841b60468201527f5af43d3d93803e605b57fd5bf3ff000000000000000000000000000000000000605a820152921b6068830152607c8201526067808220609c830152605591012090565b9392505050565b60006040517f3d605d80600a3d3981f336603057343d52307f0000000000000000000000000081527f830d2d700a97af574b186c80d40429385d24241565b08a7c559ba283a964d9b160138201527f60203da23d3df35b3d3d3d3d363d3d37363d730000000000000000000000000060338201528360601b60468201527f5af43d3d93803e605b57fd5bf300000000000000000000000000000000000000605a820152826067826000f591505073ffffffffffffffffffffffffffffffffffffffff8116610ebc576040517f380bbe1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005462010000900473ffffffffffffffffffffffffffffffffffffffff16331461097b576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156114285761110183611776565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156114ad575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526114aa91810190612048565b60015b6114e3576040517fc0bb20b200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811461153c576040517f0849b49600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50611101838383611830565b60608173ffffffffffffffffffffffffffffffffffffffff1663a0a8e4606040518163ffffffff1660e01b8152600401600060405180830381865afa9250505080156115d457506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526115d191908101906120c0565b60015b610ebc57505060408051602081019091526000815290565b919050565b600054610100900460ff16611632576040517f624bb4ce00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff84169081029190911782556040519091907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a350565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516936201000090930416917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7691a36000805473ffffffffffffffffffffffffffffffffffffffff80841662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff90921691909117909155600154161561097b57600180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905550565b803b6117ca576040517fc40d973400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8216600482015260240160405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6118398361185b565b6000825111806118465750805b156111015761185583836118b0565b50505050565b61186481611776565b60405173ffffffffffffffffffffffffffffffffffffffff821681527fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b9060200160405180910390a150565b6060823b6118ea576040517f37f2022900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1684604051611912919061212e565b600060405180830381855af49150503d806000811461194d576040519150601f19603f3d011682016040523d82523d6000602084013e611952565b606091505b5091509150611961828261196a565b95945050505050565b60608215611979575080610ebc565b8151156119895781518083602001fd5b6040517f62536b1000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146115ec57600080fd5b60008060008060008060c087890312156119f857600080fd5b611a01876119bb565b9550602087013594506040870135935060608701359250611a24608088016119bb565b9150611a3260a088016119bb565b90509295509295509295565b600080600080600080600080610100898b031215611a5b57600080fd5b611a64896119bb565b97506020890135965060408901359550606089013594506080890135935060a08901359250611a9560c08a016119bb565b9150611aa360e08a016119bb565b90509295985092959890939650565b600060208284031215611ac457600080fd5b61129d826119bb565b60008083601f840112611adf57600080fd5b50813567ffffffffffffffff811115611af757600080fd5b6020830191508360208260051b8501011115611b1257600080fd5b9250929050565b60008060008060008060008060c0898b031215611b3557600080fd5b611b3e896119bb565b9750602089013567ffffffffffffffff80821115611b5b57600080fd5b611b678c838d01611acd565b909950975060408b0135915080821115611b8057600080fd5b50611b8d8b828c01611acd565b90965094505060608901356bffffffffffffffffffffffff81168114611bb257600080fd5b9250611bc060808a016119bb565b9150611aa360a08a016119bb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611c4457611c44611bce565b604052919050565b600067ffffffffffffffff821115611c6657611c66611bce565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b60008060408385031215611ca557600080fd5b611cae836119bb565b9150602083013567ffffffffffffffff811115611cca57600080fd5b8301601f81018513611cdb57600080fd5b8035611cee611ce982611c4c565b611bfd565b818152866020838501011115611d0357600080fd5b816020840160208301376000602083830101528093505050509250929050565b60005b83811015611d3e578181015183820152602001611d26565b50506000910152565b6020815260008251806020840152611d66816040850160208701611d23565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60008060208385031215611dab57600080fd5b823567ffffffffffffffff811115611dc257600080fd5b611dce85828601611acd565b90969095509350505050565b600080600080600060808688031215611df257600080fd5b611dfb866119bb565b9450602086013567ffffffffffffffff811115611e1757600080fd5b611e2388828901611acd565b9095509350611e369050604087016119bb565b9150611e44606087016119bb565b90509295509295909350565b803567ffffffffffffffff811681146115ec57600080fd5b60007fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808860601b168352601483018760005b88811015611ecb5767ffffffffffffffff611eb583611e50565b1683526020928301929190910190600101611e9b565b5050606095861b821681529390941b909316601483015250602801949350505050565b73ffffffffffffffffffffffffffffffffffffffff8a1681526000602060e0818401528960e08401526101007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8b1115611f4757600080fd5b8a60051b808d83870137840184810382016040860152908101899052610120018960005b8a811015611f985767ffffffffffffffff611f8583611e50565b1683529183019190830190600101611f6b565b50506bffffffffffffffffffffffff881660608501529150611fb79050565b73ffffffffffffffffffffffffffffffffffffffff8516608083015273ffffffffffffffffffffffffffffffffffffffff841660a083015273ffffffffffffffffffffffffffffffffffffffff831660c08301529a9950505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561205a57600080fd5b5051919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036120b9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b6000602082840312156120d257600080fd5b815167ffffffffffffffff8111156120e957600080fd5b8201601f810184136120fa57600080fd5b8051612108611ce982611c4c565b81815285602083850101111561211d57600080fd5b611961826020830160208601611d23565b60008251612140818460208701611d23565b919091019291505056fea2646970667358221220be979dfd89e116118a5116f0eb0bfdb2906678ea0416b2af565b534187fe256764736f6c63430008110033";

type ManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Manager__factory extends ContractFactory {
  constructor(...args: ManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _msImpl: PromiseOrValue<string>,
    _intvImpl: PromiseOrValue<string>,
    _botDAO: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Manager> {
    return super.deploy(
      _msImpl,
      _intvImpl,
      _botDAO,
      overrides || {}
    ) as Promise<Manager>;
  }
  override getDeployTransaction(
    _msImpl: PromiseOrValue<string>,
    _intvImpl: PromiseOrValue<string>,
    _botDAO: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _msImpl,
      _intvImpl,
      _botDAO,
      overrides || {}
    );
  }
  override attach(address: string): Manager {
    return super.attach(address) as Manager;
  }
  override connect(signer: Signer): Manager__factory {
    return super.connect(signer) as Manager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ManagerInterface {
    return new utils.Interface(_abi) as ManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Manager {
    return new Contract(address, _abi, signerOrProvider) as Manager;
  }
}