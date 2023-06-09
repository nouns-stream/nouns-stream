/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Intervals, IntervalsInterface } from "../Intervals";

const _abi = [
  {
    inputs: [],
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
    name: "INCORRECT_DATE_RANGE",
    type: "error",
  },
  {
    inputs: [],
    name: "INITIALIZING",
    type: "error",
  },
  {
    inputs: [],
    name: "NOT_INITIALIZING",
    type: "error",
  },
  {
    inputs: [],
    name: "NO_ETHER",
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
    name: "ONLY_RECIPIENT",
    type: "error",
  },
  {
    inputs: [],
    name: "PAUSED",
    type: "error",
  },
  {
    inputs: [],
    name: "STREAM_FINISHED",
    type: "error",
  },
  {
    inputs: [],
    name: "STREAM_HASNT_STARTED",
    type: "error",
  },
  {
    inputs: [],
    name: "TRANSFER_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "UNPAUSED",
    type: "error",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "streamType",
        type: "string",
      },
    ],
    name: "FundsDisbursed",
    type: "event",
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
        name: "user",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RecipientChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "Unpaused",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
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
    inputs: [],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "changeRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
    inputs: [],
    name: "getCurrentInterval",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "uint64",
        name: "_startDate",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "_endDate",
        type: "uint64",
      },
      {
        internalType: "uint32",
        name: "_interval",
        type: "uint32",
      },
      {
        internalType: "uint96",
        name: "_tip",
        type: "uint96",
      },
      {
        internalType: "uint256",
        name: "_owed",
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
      {
        internalType: "address",
        name: "_botDAO",
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
    name: "nextPayment",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "recipient",
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
    name: "release",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
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
    name: "safeTransferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50600054610100900460ff161580158062000030575060005460ff1615155b80156200006057506200004e30620000f160201b6200142c1760201c565b8062000060575060005460ff16600114155b156200007f5760405163439a74c960e01b815260040160405180910390fd5b6000805460ff191660011790558015620000a3576000805461ff0019166101001790555b8015620000ea576000805461ff0019169055604051600181527fbe9b076dc5b65990cca9dd9d7366682482e7817a6f6bc7f4faf4dc32af497f329060200160405180910390a15b50620000f7565b3b151590565b61200780620001076000396000f3fe60806040526004361061016e5760003560e01c806366d003ac116100cb57806392c2bcb41161007f578063e30c397811610059578063e30c397814610523578063f2fde38b1461054e578063fc0c546a1461056e57600080fd5b806392c2bcb4146104a2578063a0a8e460146104c2578063b69ef8a81461050e57600080fd5b80638456cb59116100b05780638456cb591461044657806386d1a69f1461045b5780638da5cb5b1461047057600080fd5b806366d003ac1461040457806379ba50971461043157600080fd5b80633ccfd60b1161012257806344e43c981161010757806344e43c98146102c35780634e71d92d146103c65780635c975abb146103db57600080fd5b80633ccfd60b146102995780633f4ba83a146102ae57600080fd5b80632d378026116101535780632d378026146101ff578063354a75d414610227578063395db2cd1461027957600080fd5b806323452b9c146101ca5780632aca6b88146101df57600080fd5b366101c55760025473ffffffffffffffffffffffffffffffffffffffff16156101c3576040517f9f2951b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b005b600080fd5b3480156101d657600080fd5b506101c361059b565b3480156101eb57600080fd5b506101c36101fa366004611d83565b61066f565b34801561020b57600080fd5b506102146109a4565b6040519081526020015b60405180910390f35b34801561023357600080fd5b506003546102549073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161021e565b34801561028557600080fd5b506101c3610294366004611e42565b6109b6565b3480156102a557600080fd5b506101c3610a8c565b3480156102ba57600080fd5b506101c3610ce8565b3480156102cf57600080fd5b5061035760045460055460075460065474010000000000000000000000000000000000000000840467ffffffffffffffff908116959084169468010000000000000000850463ffffffff16946c0100000000000000000000000090046bffffffffffffffffffffffff1693929173ffffffffffffffffffffffffffffffffffffffff90911690565b6040805167ffffffffffffffff988916815297909616602088015263ffffffff909416948601949094526bffffffffffffffffffffffff9091166060850152608084015260a083019190915273ffffffffffffffffffffffffffffffffffffffff1660c082015260e00161021e565b3480156103d257600080fd5b50610214610d4a565b3480156103e757600080fd5b5060005462010000900460ff16604051901515815260200161021e565b34801561041057600080fd5b506004546102549073ffffffffffffffffffffffffffffffffffffffff1681565b34801561043d57600080fd5b506101c3610ed4565b34801561045257600080fd5b506101c3610fe0565b34801561046757600080fd5b50610214611040565b34801561047c57600080fd5b506000546301000000900473ffffffffffffffffffffffffffffffffffffffff16610254565b3480156104ae57600080fd5b506101c36104bd366004611e42565b611241565b3480156104ce57600080fd5b50604080518082018252600581527f312e302e300000000000000000000000000000000000000000000000000000006020820152905161021e9190611e88565b34801561051a57600080fd5b5061021461130f565b34801561052f57600080fd5b5060015473ffffffffffffffffffffffffffffffffffffffff16610254565b34801561055a57600080fd5b506101c3610569366004611e42565b6113cb565b34801561057a57600080fd5b506002546102549073ffffffffffffffffffffffffffffffffffffffff1681565b6000546301000000900473ffffffffffffffffffffffffffffffffffffffff1633146105f3576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001546000805460405173ffffffffffffffffffffffffffffffffffffffff938416936301000000909204909116917f682679deecef4dcd49674845cc1e3a075fea9073680aa445a8207d5a4bdea3da91a3600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600054610100900460ff161580158061068c575060005460ff1615155b80156106a85750303b1515806106a8575060005460ff16600114155b156106df576040517f439a74c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055801561073d57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b60055460045467ffffffffffffffff9182167401000000000000000000000000000000000000000090910490911611156107a3576040517f0a58792500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8867ffffffffffffffff1660068190555088600460146101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555087600560006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555086600560086101000a81548163ffffffff021916908363ffffffff160217905550856005600c6101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055508460078190555083600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061092b8a611432565b61093560006114ec565b801561099857600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527fbe9b076dc5b65990cca9dd9d7366682482e7817a6f6bc7f4faf4dc32af497f329060200160405180910390a15b50505050505050505050565b6000806109af611565565b5092915050565b6000546301000000900473ffffffffffffffffffffffffffffffffffffffff163314610a0e576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116918217909255600080546040519293630100000090910416917f4f2638f5949b9614ef8d5e268cb51348ad7f434a34812bf64b6e95014fbd357e9190a350565b6000546301000000900473ffffffffffffffffffffffffffffffffffffffff163314610ae4576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025460009073ffffffffffffffffffffffffffffffffffffffff16610bcc5750476000610b2f60005473ffffffffffffffffffffffffffffffffffffffff63010000009091041690565b73ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610b86576040519150601f19603f3d011682016040523d82523d6000602084013e610b8b565b606091505b5050905080610bc6576040517f3f4ab80e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610cab565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610c3a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5e9190611ed9565b600254909150610cab9073ffffffffffffffffffffffffffffffffffffffff16610ca560005473ffffffffffffffffffffffffffffffffffffffff63010000009091041690565b836116a2565b60408051308152602081018390527f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a942436491015b60405180910390a150565b6000546301000000900473ffffffffffffffffffffffffffffffffffffffff163314610d40576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d48611734565b565b6000805462010000900460ff1615610d8e576040517fa9aad58c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600454427401000000000000000000000000000000000000000090910467ffffffffffffffff161115610ded576040517f4beef71b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080610df8611565565b9150915081600003610e0d5760009250505090565b600554610e2d90829068010000000000000000900463ffffffff16611f21565b600654610e3a9190611f3e565b600655600454610e609073ffffffffffffffffffffffffffffffffffffffff16836117d4565b604080513081526020810184905260608183018190526009908201527f496e74657276616c730000000000000000000000000000000000000000000000608082015290517f2ce2e253945537aa7d973276dc02985c341489198e30fa86a1ccc903e07deed09181900360a00190a150905090565b60015473ffffffffffffffffffffffffffffffffffffffff163314610f25576040517f065cd53100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080546040513392630100000090920473ffffffffffffffffffffffffffffffffffffffff16917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7691a360018054600080547fffffffffffffffffff0000000000000000000000000000000000000000ffffff1673ffffffffffffffffffffffffffffffffffffffff83166301000000021790557fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6000546301000000900473ffffffffffffffffffffffffffffffffffffffff163314611038576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d486118b4565b6000805462010000900460ff1615611084576040517fa9aad58c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600454427401000000000000000000000000000000000000000090910467ffffffffffffffff1611156110e3576040517f4beef71b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806110ee611565565b91509150816000036111035760009250505090565b600554600090611131906c0100000000000000000000000090046bffffffffffffffffffffffff1684611f51565b60055490915061115490839068010000000000000000900463ffffffff16611f21565b6006546111619190611f3e565b6006556004546111879073ffffffffffffffffffffffffffffffffffffffff16826117d4565b6003546005546111cb9173ffffffffffffffffffffffffffffffffffffffff16906c0100000000000000000000000090046bffffffffffffffffffffffff166117d4565b604080513081526020810183905260608183018190526009908201527f496e74657276616c730000000000000000000000000000000000000000000000608082015290517f2ce2e253945537aa7d973276dc02985c341489198e30fa86a1ccc903e07deed09181900360a00190a1509091505090565b60045473ffffffffffffffffffffffffffffffffffffffff1633036112da57600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040805133815260208101929092527f4a9d367b1b0cd787be10021f1c55cb49c9f2302334e6df35c9621005eb2225149101610cdd565b6040517fa826212800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b60025460009073ffffffffffffffffffffffffffffffffffffffff1661133457504790565b6002546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156113a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113c69190611ed9565b905090565b6000546301000000900473ffffffffffffffffffffffffffffffffffffffff163314611423576040517fd238ed5900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61130c81611954565b3b151590565b600054610100900460ff16611473576040517f624bb4ce00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffff0000000000000000000000000000000000000000ffffff16630100000073ffffffffffffffffffffffffffffffffffffffff84169081029190911782556040519091907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a350565b600054610100900460ff1661152d576040517f624bb4ce00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805491151562010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff909216919091179055565b600554600654600091829167ffffffffffffffff909116116115b3576040517f0b533b9000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600654600554428290039167ffffffffffffffff909116038111156115e5575060065460055467ffffffffffffffff16035b60055460065463ffffffff6801000000000000000083041667ffffffffffffffff909216031015611642576040517f0b533b9000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60055468010000000000000000900463ffffffff1681101561166957506000928392509050565b60055460009068010000000000000000900463ffffffff16828161168f5761168f611f64565b0490508060075402819350935050509091565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261172f908490611a22565b505050565b60005462010000900460ff16611776576040517f6d76f93d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff1690556040513381527f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa906020015b60405180910390a1565b60025473ffffffffffffffffffffffffffffffffffffffff161561181a576002546118169073ffffffffffffffffffffffffffffffffffffffff1683836116a2565b5050565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611874576040519150601f19603f3d011682016040523d82523d6000602084013e611879565b606091505b505090508061172f576040517f3f4ab80e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005462010000900460ff16156118f7576040517fa9aad58c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff16620100001790556040513381527f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258906020016117ca565b6000805460405173ffffffffffffffffffffffffffffffffffffffff80851693630100000090930416917f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7691a36000805473ffffffffffffffffffffffffffffffffffffffff8084166301000000027fffffffffffffffffff0000000000000000000000000000000000000000ffffff90921691909117909155600154161561130c57600180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905550565b6000611a84826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b339092919063ffffffff16565b80519091501561172f5780806020019051810190611aa29190611f93565b61172f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6060611b428484600085611b4a565b949350505050565b606082471015611bdc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401611b2a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611c059190611fb5565b60006040518083038185875af1925050503d8060008114611c42576040519150601f19603f3d011682016040523d82523d6000602084013e611c47565b606091505b5091509150611c5887838387611c63565b979650505050505050565b60608315611cf9578251600003611cf25773ffffffffffffffffffffffffffffffffffffffff85163b611cf2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611b2a565b5081611b42565b611b428383815115611d0e5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b2a9190611e88565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d6657600080fd5b919050565b803567ffffffffffffffff81168114611d6657600080fd5b60008060008060008060008060006101208a8c031215611da257600080fd5b611dab8a611d42565b9850611db960208b01611d6b565b9750611dc760408b01611d6b565b965060608a013563ffffffff81168114611de057600080fd5b955060808a01356bffffffffffffffffffffffff81168114611e0157600080fd5b945060a08a01359350611e1660c08b01611d42565b9250611e2460e08b01611d42565b9150611e336101008b01611d42565b90509295985092959850929598565b600060208284031215611e5457600080fd5b611e5d82611d42565b9392505050565b60005b83811015611e7f578181015183820152602001611e67565b50506000910152565b6020815260008251806020840152611ea7816040850160208701611e64565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b600060208284031215611eeb57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082028115828204841417611f3857611f38611ef2565b92915050565b80820180821115611f3857611f38611ef2565b81810381811115611f3857611f38611ef2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600060208284031215611fa557600080fd5b81518015158114611e5d57600080fd5b60008251611fc7818460208701611e64565b919091019291505056fea264697066735822122085168ad267dcba4ececbec3c881ebe0a210acdbca0e8b8c80cd2f674697e1d5864736f6c63430008110033";

type IntervalsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IntervalsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Intervals__factory extends ContractFactory {
  constructor(...args: IntervalsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Intervals> {
    return super.deploy(overrides || {}) as Promise<Intervals>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Intervals {
    return super.attach(address) as Intervals;
  }
  override connect(signer: Signer): Intervals__factory {
    return super.connect(signer) as Intervals__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IntervalsInterface {
    return new utils.Interface(_abi) as IntervalsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Intervals {
    return new Contract(address, _abi, signerOrProvider) as Intervals;
  }
}
