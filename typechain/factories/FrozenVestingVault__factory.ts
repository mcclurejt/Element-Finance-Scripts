/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FrozenVestingVault,
  FrozenVestingVaultInterface,
} from "../FrozenVestingVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_stale",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
    ],
    name: "VoteChange",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptGrant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_amount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_startTime",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_expiration",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_cliff",
        type: "uint128",
      },
      {
        internalType: "address",
        name: "_delegatee",
        type: "address",
      },
    ],
    name: "addGrantAndDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_multiplier",
        type: "uint256",
      },
    ],
    name: "changeUnvestedMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "getGrant",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "allocation",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "withdrawn",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "created",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "expiration",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "cliff",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "latestVotingPower",
            type: "uint128",
          },
          {
            internalType: "address",
            name: "delegatee",
            type: "address",
          },
          {
            internalType: "uint256[2]",
            name: "range",
            type: "uint256[2]",
          },
        ],
        internalType: "struct VestingVaultStorage.Grant",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
      {
        internalType: "address",
        name: "timelock_",
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
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "queryVotePower",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "queryVotePowerView",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "removeGrant",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "manager_",
        type: "address",
      },
    ],
    name: "setManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "timelock_",
        type: "address",
      },
    ],
    name: "setTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "staleBlockLag",
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
    name: "timelock",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unvestedMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
    ],
    name: "updateVotingPower",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620028db380380620028db833981016040819052620000349162000050565b60609190911b6001600160601b03191660805260a0526200008a565b6000806040838503121562000063578182fd5b82516001600160a01b03811681146200007a578283fd5b6020939093015192949293505050565b60805160601c60a05161280c620000cf6000396000818161028801526115480152600081816102f00152818161054301528181610603015261124d015261280c6000f3fe608060405234801561001057600080fd5b506004361061016b5760003560e01c8063b6b55f25116100cd578063d0ebdbe711610081578063e7d2028311610066578063e7d20283146102c5578063e91f3235146102d8578063fc0c546a146102eb5761016b565b8063d0ebdbe7146102aa578063d33219b4146102bd5761016b565b8063bf31dbf4116100b2578063bf31dbf41461024d578063c1006f4f1461026d578063c2c94b88146102835761016b565b8063b6b55f2514610227578063bdacb3031461023a5761016b565b8063485cc955116101245780635c19a95c116101095780635c19a95c146101ee5780635f389a9d14610201578063747c1255146102145761016b565b8063485cc955146101d35780634e71d92d146101e65761016b565b8063267406cb11610155578063267406cb146101985780633e0bdaf7146101a6578063481c6a75146101ae5761016b565b8062f714ce146101705780632168034d14610185575b600080fd5b61018361017e366004612413565b610312565b005b6101836101933660046123fb565b61035f565b61018361017e366004612271565b610183610459565b6101b6610718565b6040516001600160a01b0390911681526020015b60405180910390f35b6101836101e136600461228b565b610728565b610183610312565b6101836101fc366004612271565b61092e565b61018361020f3660046122bd565b610c6d565b610183610222366004612271565b61115e565b6101836102353660046123fb565b61118d565b610183610248366004612271565b6112d1565b61026061025b366004612271565b611372565b6040516101ca91906124a3565b61027561145a565b6040519081526020016101ca565b6102757f000000000000000000000000000000000000000000000000000000000000000081565b6101836102b8366004612271565b611464565b6101b6611505565b6102756102d3366004612330565b61150f565b6102756102e6366004612359565b611531565b6101b67f000000000000000000000000000000000000000000000000000000000000000081565b60405162461bcd60e51b815260206004820152600660248201527f46726f7a656e000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b610367611580565b516001600160a01b031633146103bf5760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610356565b60648111156104105760405162461bcd60e51b815260206004820152600a60248201527f41626f76652031303025000000000000000000000000000000000000000000006044820152606401610356565b6104566104516040518060400160405280601281526020017f756e7665737465644d756c7469706c69657200000000000000000000000000008152506115ea565b829055565b50565b6000610463611663565b3360009081526020919091526040812080549092506104aa906fffffffffffffffffffffffffffffffff700100000000000000000000000000000000820481169116612730565b6fffffffffffffffffffffffffffffffff1690506000811161050e5760405162461bcd60e51b815260206004820152601260248201527f6e6f206772616e7420617661696c61626c6500000000000000000000000000006044820152606401610356565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b15801561058f57600080fd5b505af11580156105a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c791906123db565b506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561064f57600080fd5b505af1158015610663573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068791906123db565b5060006106926116a8565b5160408051808201909152818152909150602081016106b18484612534565b90526106c3906004850190600261217e565b506107136107056040518060400160405280600581526020017f626f756e640000000000000000000000000000000000000000000000000000008152506115ea565b61070f8484612534565b9055565b505050565b6000610722611709565b51905090565b6107666040518060400160405280600b81526020017f696e697469616c697a65640000000000000000000000000000000000000000008152506115ea565b54156107b45760405162461bcd60e51b815260206004820152600b60248201527f696e697469616c697a65640000000000000000000000000000000000000000006044820152606401610356565b6107fb6107f56040518060400160405280600b81526020017f696e697469616c697a65640000000000000000000000000000000000000000008152506115ea565b60019055565b61086f61083c6040518060400160405280600781526020017f6d616e6167657200000000000000000000000000000000000000000000000000815250611752565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038516179055565b6108e36108b06040518060400160405280600881526020017f74696d656c6f636b000000000000000000000000000000000000000000000000815250611752565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416179055565b61092a6109246040518060400160405280601281526020017f756e7665737465644d756c7469706c69657200000000000000000000000000008152506115ea565b60649055565b5050565b6000610938611663565b3360009081526020919091526040902060038101549091506001600160a01b03838116911614156109ab5760405162461bcd60e51b815260206004820152601160248201527f416c72656164792064656c6567617465640000000000000000000000000000006044820152606401610356565b60006109b561178d565b60038301549091506000906109d49083906001600160a01b03166117e0565b604080516101008101825285546fffffffffffffffffffffffffffffffff80821683527001000000000000000000000000000000009182900481166020840152600188015480821684860152829004811660608401526002808901548083166080860152929092041660a083015260038701546001600160a01b031660c0830152825180840193849052939450600093610a9a93889260e08501929160048501919082845b815481526020019060010190808311610a7957505050505081525050611874565b60038501546002860154919250610aef916001600160a01b0390911690610ae79070010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1685612761565b8591906118f7565b6003840154600285015433916001600160a01b0316907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e090610b779070010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61258f565b60405190815260200160405180910390a36000610b9484876117e0565b9050336001600160a01b0316866001600160a01b03167f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e084604051610bdb91815260200190565b60405180910390a3610bf986610bf18484612534565b8691906118f7565b506002840180546fffffffffffffffffffffffffffffffff928316700100000000000000000000000000000000029216919091179055505060030180546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055565b610c75611709565b516001600160a01b03163314610ccd5760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610356565b826fffffffffffffffffffffffffffffffff16826fffffffffffffffffffffffffffffffff1611158015610d255750826fffffffffffffffffffffffffffffffff16846fffffffffffffffffffffffffffffffff1611155b610d715760405162461bcd60e51b815260206004820152601560248201527f496e76616c696420636f6e66696775726174696f6e00000000000000000000006044820152606401610356565b6fffffffffffffffffffffffffffffffff8416610d8c574393505b6000610d96611a0f565b90506000610da2611a4f565b9050866fffffffffffffffffffffffffffffffff1682600001541015610e0a5760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e63650000000000000000000000006044820152606401610356565b6000610e14611663565b6001600160a01b038a1660009081526020919091526040902080549091506fffffffffffffffffffffffffffffffff1615610e915760405162461bcd60e51b815260206004820152600960248201527f486173204772616e7400000000000000000000000000000000000000000000006044820152606401610356565b6001600160a01b03841615610ea65783610ea8565b885b93506000606483600001518a610ebe9190612647565b610ec8919061254c565b90506040518061010001604052808a6fffffffffffffffffffffffffffffffff16815260200160006fffffffffffffffffffffffffffffffff168152602001896fffffffffffffffffffffffffffffffff168152602001886fffffffffffffffffffffffffffffffff168152602001876fffffffffffffffffffffffffffffffff168152602001826fffffffffffffffffffffffffffffffff168152602001866001600160a01b031681526020016040518060400160405280600081526020016000815250815250610f98611663565b6001600160a01b038c8116600090815260209283526040908190208451938501516fffffffffffffffffffffffffffffffff94851670010000000000000000000000000000000091861682021782559185015160608601519085169085168302176001820155608085015160a086015190851694169091029290921760028084019190915560c08401516003840180547fffffffffffffffffffffffff000000000000000000000000000000000000000016919093161790915560e08301516110669160048401919061217e565b50905050886fffffffffffffffffffffffffffffffff168460000160008282546110909190612761565b90915550600090506110a061178d565b60038401549091506000906110bf9083906001600160a01b03166117e0565b60038501549091506110f8906001600160a01b03166110f06fffffffffffffffffffffffffffffffff861684612534565b8491906118f7565b60038401546040516fffffffffffffffffffffffffffffffff851681526001600160a01b038e81169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3505050505050505050505050565b6000611168611663565b6001600160a01b038316600090815260209190915260409020905061092a8282611a9c565b611195611709565b516001600160a01b031633146111ed5760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610356565b60006111f7611a0f565b90508181600001600082825461120d9190612534565b90915550506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561129957600080fd5b505af11580156112ad573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061071391906123db565b6112d9611580565b516001600160a01b031633146113315760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610356565b6104566108b06040518060400160405280600881526020017f74696d656c6f636b000000000000000000000000000000000000000000000000815250611752565b61137a6121bc565b611382611663565b6001600160a01b038381166000908152602092835260409081902081516101008101835281546fffffffffffffffffffffffffffffffff8082168352700100000000000000000000000000000000918290048116968301969096526001830154808716838601528190048616606083015260028084015480881660808501529190910490951660a0820152600382015490931660c08401528151808301928390529293909260e08501929091600485019182845b8154815260200190600101908083116114365750505050508152505090505b919050565b6000610722611a4f565b61146c611580565b516001600160a01b031633146114c45760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610356565b6104566108b06040518060400160405280600781526020017f6d616e6167657200000000000000000000000000000000000000000000000000815250611752565b6000610722611580565b60008061151a61178d565b9050611527818585611ccc565b9150505b92915050565b60008061153c61178d565b9050611576868661156d7f000000000000000000000000000000000000000000000000000000000000000043612761565b84929190611d2e565b9695505050505050565b6040805160208101909152600081526115cd6040518060400160405280600881526020017f74696d656c6f636b000000000000000000000000000000000000000000000000815250611752565b604080516020810190915290546001600160a01b03168152905090565b6000807fec13d6d12b88433319b64e1065a96ea19cd330ef6603f5f6fb685dde3959a32090506000818460405160200161162592919061245e565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b60006116a36040518060400160405280600681526020017f6772616e74730000000000000000000000000000000000000000000000000000815250611da5565b905090565b6040805160208101909152600081526116f56040518060400160405280600581526020017f626f756e640000000000000000000000000000000000000000000000000000008152506115ea565b604080516020810190915290548152905090565b6040805160208101909152600081526115cd6040518060400160405280600781526020017f6d616e61676572000000000000000000000000000000000000000000000000008152505b6000807f421683f821a0574472445355be6d2b769119e8515f8376a1d7878523dfdecf7b90506000818460405160200161162592919061245e565b6040805180820190915260608152600060208201526116a36040518060400160405280600b81526020017f766f74696e67506f776572000000000000000000000000000000000000000000815250611de0565b6000806117ee846020015190565b6001600160a01b03841660009081526020919091526040902080549091506fffffffffffffffffffffffffffffffff168061182e5760009250505061152b565b60006118698361183f600185612761565b016001015460c081901c9177ffffffffffffffffffffffffffffffffffffffffffffffff90911690565b979650505050505050565b60008061188083611e19565b9050600083602001516fffffffffffffffffffffffffffffffff16826118a69190612534565b84516118c491906fffffffffffffffffffffffffffffffff16612761565b905060646118d0611a4f565b516118db908361267f565b6118e5919061257b565b6118ef9083612534565b949350505050565b77ffffffffffffffffffffffffffffffffffffffffffffffff81111561195f5760405162461bcd60e51b815260206004820152600360248201527f4f6f4200000000000000000000000000000000000000000000000000000000006044820152606401610356565b600061196c846020015190565b6001600160a01b03841660009081526020829052604081208054929350914360c01b9185831791608081901c916fffffffffffffffffffffffffffffffff9091169081156119c7576119c38661183f600185612761565b5090505b81438214156119de576119db600184612761565b90505b8481600189010155438214611a0257611a0287856119fd866001612534565b611f45565b5050505050505050505050565b60006116a36040518060400160405280600a81526020017f756e61737369676e6564000000000000000000000000000000000000000000008152506115ea565b6040805160208101909152600081526116f56040518060400160405280601281526020017f756e7665737465644d756c7469706c69657200000000000000000000000000008152506115ea565b6000611aa661178d565b6003830154909150600090611ac59083906001600160a01b03166117e0565b604080516101008101825285546fffffffffffffffffffffffffffffffff80821683527001000000000000000000000000000000009182900481166020840152600188015480821684860152829004811660608401526002808901548083166080860152929092041660a083015260038701546001600160a01b031660c08301528251808401909352929350600092611b8f92879160e0840191906004840190828282602002820191815481526020019060010190808311610a7957505050505081525050611874565b6002850154909150600090611bca9070010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff16836126bc565b905080611bda575050505061092a565b6000811315611c04576003850154611bff906001600160a01b0316610bf18386612534565b611c4a565b6003850154611c4a906001600160a01b0316611c40837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61258f565b610bf19086612761565b60038501546040518281526001600160a01b038881169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3506002840180546fffffffffffffffffffffffffffffffff92831670010000000000000000000000000000000002921691909117905550505050565b600080611cda856020015190565b6001600160a01b0385166000908152602082905260408120805492935091608081901c916fffffffffffffffffffffffffffffffff90911690611d208488838686611f6e565b9a9950505050505050505050565b600080611d3c866020015190565b6001600160a01b0386166000908152602082905260408120805492935091608081901c916fffffffffffffffffffffffffffffffff9091169080611d83858a8a8787611f6e565b9150915083821115611d2057611d9a848387612113565b611d20858385611f45565b6000807fe09ca27c98c7039e0ebb504afcf592a1c02936970c7b5952890c3a3eea53d63c90506000818460405160200161162592919061245e565b6040805180820190915260608152600060208201526000611e0083612143565b6040805180820190915293845260208401525090919050565b600081608001516fffffffffffffffffffffffffffffffff16431080611e54575081604001516fffffffffffffffffffffffffffffffff1643105b15611e6157506000611455565b81606001516fffffffffffffffffffffffffffffffff164310611ea85760208201518251611e8f9190612730565b6fffffffffffffffffffffffffffffffff169050611455565b600082604001518360600151611ebe9190612730565b6fffffffffffffffffffffffffffffffff1683604001516fffffffffffffffffffffffffffffffff1643611ef29190612761565b8451611f1091906fffffffffffffffffffffffffffffffff1661267f565b611f1a919061257b565b905082602001516fffffffffffffffffffffffffffffffff1681611f3e9190612761565b9392505050565b808210611f5157600080fd5b6fffffffffffffffffffffffffffffffff1660809190911b179055565b60008082611fbe5760405162461bcd60e51b815260206004820152600d60248201527f756e696e697469616c697a6564000000000000000000000000000000000000006044820152606401610356565b85851115611fcb57600080fd5b828410611fd757600080fd5b6000611fe4600185612761565b90508460005b8282146120885760006002611fff8585612534565b61200a906001612534565b612014919061257b565b6001818d01015490915060c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168b821415612056579296509194506121099350505050565b8b821015612072578a82101561206a578293505b829450612080565b61207d600184612761565b95505b505050611fea565b60018a8301015460c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168a8211156120ff5760405162461bcd60e51b815260206004820152600e60248201527f536561726368204661696c7572650000000000000000000000000000000000006044820152606401610356565b9195509093505050505b9550959350505050565b8183111561212057600080fd5b60018101835b8381101561213c57600082820155600101612126565b5050505050565b6000807f7b1a68ec3e3284b167e69db1c622dcfa612281976b71d7e2d239dbe16a75891a90506000818460405160200161162592919061245e565b82600281019282156121ac579160200282015b828111156121ac578251825591602001919060010190612191565b506121b8929150612207565b5090565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260e0810161220261221c565b905290565b5b808211156121b85760008155600101612208565b60405180604001604052806002906020820280368337509192915050565b80356001600160a01b038116811461145557600080fd5b80356fffffffffffffffffffffffffffffffff8116811461145557600080fd5b600060208284031215612282578081fd5b611f3e8261223a565b6000806040838503121561229d578081fd5b6122a68361223a565b91506122b46020840161223a565b90509250929050565b60008060008060008060c087890312156122d5578182fd5b6122de8761223a565b95506122ec60208801612251565b94506122fa60408801612251565b935061230860608801612251565b925061231660808801612251565b915061232460a0880161223a565b90509295509295509295565b60008060408385031215612342578182fd5b61234b8361223a565b946020939093013593505050565b6000806000806060858703121561236e578384fd5b6123778561223a565b935060208501359250604085013567ffffffffffffffff8082111561239a578384fd5b818701915087601f8301126123ad578384fd5b8135818111156123bb578485fd5b8860208285010111156123cc578485fd5b95989497505060200194505050565b6000602082840312156123ec578081fd5b81518015158114611f3e578182fd5b60006020828403121561240c578081fd5b5035919050565b60008060408385031215612425578182fd5b823591506122b46020840161223a565b8060005b6002811015612458578151845260209384019390910190600101612439565b50505050565b60008382528251815b8181101561248357602081860181015185830182015201612467565b818111156124945782602083860101525b50919091016020019392505050565b6000610120820190506fffffffffffffffffffffffffffffffff8084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a08401525060c083015161251a60c08401826001600160a01b03169052565b5060e083015161252d60e0840182612435565b5092915050565b6000821982111561254757612547612778565b500190565b60006fffffffffffffffffffffffffffffffff8084168061256f5761256f6127a7565b92169190910492915050565b60008261258a5761258a6127a7565b500490565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff818413828413858304851182821616156125ce576125ce612778565b7f80000000000000000000000000000000000000000000000000000000000000008487128682058812818416161561260857612608612778565b85871292508782058712848416161561262357612623612778565b8785058712818416161561263957612639612778565b505050929093029392505050565b60006fffffffffffffffffffffffffffffffff8083168185168183048111821515161561267657612676612778565b02949350505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156126b7576126b7612778565b500290565b6000808312837f8000000000000000000000000000000000000000000000000000000000000000018312811516156126f6576126f6612778565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01831381161561272a5761272a612778565b50500390565b60006fffffffffffffffffffffffffffffffff8381169083168181101561275957612759612778565b039392505050565b60008282101561277357612773612778565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea2646970667358221220c18c691d27e4cda4169105859c40d424ed3511049555a55f6cdc65f3bc0d752264736f6c63430008030033";

export class FrozenVestingVault__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _token: string,
    _stale: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FrozenVestingVault> {
    return super.deploy(
      _token,
      _stale,
      overrides || {}
    ) as Promise<FrozenVestingVault>;
  }
  getDeployTransaction(
    _token: string,
    _stale: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _stale, overrides || {});
  }
  attach(address: string): FrozenVestingVault {
    return super.attach(address) as FrozenVestingVault;
  }
  connect(signer: Signer): FrozenVestingVault__factory {
    return super.connect(signer) as FrozenVestingVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FrozenVestingVaultInterface {
    return new utils.Interface(_abi) as FrozenVestingVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FrozenVestingVault {
    return new Contract(address, _abi, signerOrProvider) as FrozenVestingVault;
  }
}
