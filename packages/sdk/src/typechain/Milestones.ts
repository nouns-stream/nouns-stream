/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface MilestonesInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "balance()": FunctionFragment;
    "botDAO()": FunctionFragment;
    "cancelOwnershipTransfer()": FunctionFragment;
    "changeRecipient(address)": FunctionFragment;
    "claim()": FunctionFragment;
    "contractVersion()": FunctionFragment;
    "getCurrentMilestone()": FunctionFragment;
    "getMilestone(uint88)": FunctionFragment;
    "getMilestoneLength()": FunctionFragment;
    "initialize(address,uint256[],uint64[],uint96,address,address,address)": FunctionFragment;
    "nextPayment()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "recipient()": FunctionFragment;
    "release()": FunctionFragment;
    "safeTransferOwnership(address)": FunctionFragment;
    "token()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "balance"
      | "botDAO"
      | "cancelOwnershipTransfer"
      | "changeRecipient"
      | "claim"
      | "contractVersion"
      | "getCurrentMilestone"
      | "getMilestone"
      | "getMilestoneLength"
      | "initialize"
      | "nextPayment"
      | "owner"
      | "pause"
      | "paused"
      | "pendingOwner"
      | "recipient"
      | "release"
      | "safeTransferOwnership"
      | "token"
      | "transferOwnership"
      | "unpause"
      | "withdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balance", values?: undefined): string;
  encodeFunctionData(functionFragment: "botDAO", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cancelOwnershipTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeRecipient",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "contractVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentMilestone",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMilestone",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getMilestoneLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "nextPayment",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
  encodeFunctionData(functionFragment: "release", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "safeTransferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "botDAO", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelOwnershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "contractVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentMilestone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMilestone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMilestoneLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "FundsDisbursed(address,uint256,string)": EventFragment;
    "Initialized(uint256)": EventFragment;
    "OwnerCanceled(address,address)": EventFragment;
    "OwnerPending(address,address)": EventFragment;
    "OwnerUpdated(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "RecipientChanged(address,address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdraw(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FundsDisbursed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerPending"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecipientChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export interface FundsDisbursedEventObject {
  streamId: string;
  amount: BigNumber;
  streamType: string;
}
export type FundsDisbursedEvent = TypedEvent<
  [string, BigNumber, string],
  FundsDisbursedEventObject
>;

export type FundsDisbursedEventFilter = TypedEventFilter<FundsDisbursedEvent>;

export interface InitializedEventObject {
  version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnerCanceledEventObject {
  owner: string;
  canceledOwner: string;
}
export type OwnerCanceledEvent = TypedEvent<
  [string, string],
  OwnerCanceledEventObject
>;

export type OwnerCanceledEventFilter = TypedEventFilter<OwnerCanceledEvent>;

export interface OwnerPendingEventObject {
  owner: string;
  pendingOwner: string;
}
export type OwnerPendingEvent = TypedEvent<
  [string, string],
  OwnerPendingEventObject
>;

export type OwnerPendingEventFilter = TypedEventFilter<OwnerPendingEvent>;

export interface OwnerUpdatedEventObject {
  prevOwner: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<
  [string, string],
  OwnerUpdatedEventObject
>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface PausedEventObject {
  user: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RecipientChangedEventObject {
  oldRecipient: string;
  newRecipient: string;
}
export type RecipientChangedEvent = TypedEvent<
  [string, string],
  RecipientChangedEventObject
>;

export type RecipientChangedEventFilter =
  TypedEventFilter<RecipientChangedEvent>;

export interface UnpausedEventObject {
  user: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface WithdrawEventObject {
  streamId: string;
  amount: BigNumber;
}
export type WithdrawEvent = TypedEvent<
  [string, BigNumber],
  WithdrawEventObject
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface Milestones extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MilestonesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    botDAO(overrides?: CallOverrides): Promise<[string]>;

    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeRecipient(
      newRecipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    contractVersion(overrides?: CallOverrides): Promise<[string]>;

    getCurrentMilestone(
      overrides?: CallOverrides
    ): Promise<[number, BigNumber, BigNumber, BigNumber, string]>;

    getMilestone(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getMilestoneLength(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    initialize(
      _owner: PromiseOrValue<string>,
      _msPayments: PromiseOrValue<BigNumberish>[],
      _msDates: PromiseOrValue<BigNumberish>[],
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _botDAO: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nextPayment(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    recipient(overrides?: CallOverrides): Promise<[string]>;

    release(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balance(overrides?: CallOverrides): Promise<BigNumber>;

  botDAO(overrides?: CallOverrides): Promise<string>;

  cancelOwnershipTransfer(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeRecipient(
    newRecipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claim(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  contractVersion(overrides?: CallOverrides): Promise<string>;

  getCurrentMilestone(
    overrides?: CallOverrides
  ): Promise<[number, BigNumber, BigNumber, BigNumber, string]>;

  getMilestone(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  getMilestoneLength(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  initialize(
    _owner: PromiseOrValue<string>,
    _msPayments: PromiseOrValue<BigNumberish>[],
    _msDates: PromiseOrValue<BigNumberish>[],
    _tip: PromiseOrValue<BigNumberish>,
    _recipient: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _botDAO: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nextPayment(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  recipient(overrides?: CallOverrides): Promise<string>;

  release(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeTransferOwnership(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    botDAO(overrides?: CallOverrides): Promise<string>;

    cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;

    changeRecipient(
      newRecipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(overrides?: CallOverrides): Promise<BigNumber>;

    contractVersion(overrides?: CallOverrides): Promise<string>;

    getCurrentMilestone(
      overrides?: CallOverrides
    ): Promise<[number, BigNumber, BigNumber, BigNumber, string]>;

    getMilestone(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    getMilestoneLength(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    initialize(
      _owner: PromiseOrValue<string>,
      _msPayments: PromiseOrValue<BigNumberish>[],
      _msDates: PromiseOrValue<BigNumberish>[],
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _botDAO: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    nextPayment(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    recipient(overrides?: CallOverrides): Promise<string>;

    release(overrides?: CallOverrides): Promise<BigNumber>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "FundsDisbursed(address,uint256,string)"(
      streamId?: null,
      amount?: null,
      streamType?: null
    ): FundsDisbursedEventFilter;
    FundsDisbursed(
      streamId?: null,
      amount?: null,
      streamType?: null
    ): FundsDisbursedEventFilter;

    "Initialized(uint256)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnerCanceled(address,address)"(
      owner?: PromiseOrValue<string> | null,
      canceledOwner?: PromiseOrValue<string> | null
    ): OwnerCanceledEventFilter;
    OwnerCanceled(
      owner?: PromiseOrValue<string> | null,
      canceledOwner?: PromiseOrValue<string> | null
    ): OwnerCanceledEventFilter;

    "OwnerPending(address,address)"(
      owner?: PromiseOrValue<string> | null,
      pendingOwner?: PromiseOrValue<string> | null
    ): OwnerPendingEventFilter;
    OwnerPending(
      owner?: PromiseOrValue<string> | null,
      pendingOwner?: PromiseOrValue<string> | null
    ): OwnerPendingEventFilter;

    "OwnerUpdated(address,address)"(
      prevOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;
    OwnerUpdated(
      prevOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;

    "Paused(address)"(user?: null): PausedEventFilter;
    Paused(user?: null): PausedEventFilter;

    "RecipientChanged(address,address)"(
      oldRecipient?: null,
      newRecipient?: null
    ): RecipientChangedEventFilter;
    RecipientChanged(
      oldRecipient?: null,
      newRecipient?: null
    ): RecipientChangedEventFilter;

    "Unpaused(address)"(user?: null): UnpausedEventFilter;
    Unpaused(user?: null): UnpausedEventFilter;

    "Withdraw(address,uint256)"(
      streamId?: null,
      amount?: null
    ): WithdrawEventFilter;
    Withdraw(streamId?: null, amount?: null): WithdrawEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    botDAO(overrides?: CallOverrides): Promise<BigNumber>;

    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeRecipient(
      newRecipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    contractVersion(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentMilestone(overrides?: CallOverrides): Promise<BigNumber>;

    getMilestone(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMilestoneLength(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _owner: PromiseOrValue<string>,
      _msPayments: PromiseOrValue<BigNumberish>[],
      _msDates: PromiseOrValue<BigNumberish>[],
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _botDAO: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nextPayment(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<BigNumber>;

    release(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    botDAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeRecipient(
      newRecipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentMilestone(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMilestone(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMilestoneLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _owner: PromiseOrValue<string>,
      _msPayments: PromiseOrValue<BigNumberish>[],
      _msDates: PromiseOrValue<BigNumberish>[],
      _tip: PromiseOrValue<BigNumberish>,
      _recipient: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _botDAO: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nextPayment(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    release(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}