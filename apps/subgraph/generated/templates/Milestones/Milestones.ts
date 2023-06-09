// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class FundsDisbursed extends ethereum.Event {
  get params(): FundsDisbursed__Params {
    return new FundsDisbursed__Params(this);
  }
}

export class FundsDisbursed__Params {
  _event: FundsDisbursed;

  constructor(event: FundsDisbursed) {
    this._event = event;
  }

  get streamId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get streamType(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnerCanceled extends ethereum.Event {
  get params(): OwnerCanceled__Params {
    return new OwnerCanceled__Params(this);
  }
}

export class OwnerCanceled__Params {
  _event: OwnerCanceled;

  constructor(event: OwnerCanceled) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get canceledOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnerPending extends ethereum.Event {
  get params(): OwnerPending__Params {
    return new OwnerPending__Params(this);
  }
}

export class OwnerPending__Params {
  _event: OwnerPending;

  constructor(event: OwnerPending) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pendingOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnerUpdated extends ethereum.Event {
  get params(): OwnerUpdated__Params {
    return new OwnerUpdated__Params(this);
  }
}

export class OwnerUpdated__Params {
  _event: OwnerUpdated;

  constructor(event: OwnerUpdated) {
    this._event = event;
  }

  get prevOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RecipientChanged extends ethereum.Event {
  get params(): RecipientChanged__Params {
    return new RecipientChanged__Params(this);
  }
}

export class RecipientChanged__Params {
  _event: RecipientChanged;

  constructor(event: RecipientChanged) {
    this._event = event;
  }

  get oldRecipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newRecipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get streamId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Milestones__getCurrentMilestoneResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }

  getValue3(): BigInt {
    return this.value3;
  }

  getValue4(): Address {
    return this.value4;
  }
}

export class Milestones__getMilestoneResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class Milestones__getMilestoneLengthResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }
}

export class Milestones extends ethereum.SmartContract {
  static bind(address: Address): Milestones {
    return new Milestones("Milestones", address);
  }

  balance(): BigInt {
    let result = super.call("balance", "balance():(uint256)", []);

    return result[0].toBigInt();
  }

  try_balance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balance", "balance():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  botDAO(): Address {
    let result = super.call("botDAO", "botDAO():(address)", []);

    return result[0].toAddress();
  }

  try_botDAO(): ethereum.CallResult<Address> {
    let result = super.tryCall("botDAO", "botDAO():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  claim(): BigInt {
    let result = super.call("claim", "claim():(uint256)", []);

    return result[0].toBigInt();
  }

  try_claim(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("claim", "claim():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  contractVersion(): string {
    let result = super.call(
      "contractVersion",
      "contractVersion():(string)",
      []
    );

    return result[0].toString();
  }

  try_contractVersion(): ethereum.CallResult<string> {
    let result = super.tryCall(
      "contractVersion",
      "contractVersion():(string)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getCurrentMilestone(): Milestones__getCurrentMilestoneResult {
    let result = super.call(
      "getCurrentMilestone",
      "getCurrentMilestone():(uint48,uint256,uint64,uint96,address)",
      []
    );

    return new Milestones__getCurrentMilestoneResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toAddress()
    );
  }

  try_getCurrentMilestone(): ethereum.CallResult<
    Milestones__getCurrentMilestoneResult
  > {
    let result = super.tryCall(
      "getCurrentMilestone",
      "getCurrentMilestone():(uint48,uint256,uint64,uint96,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Milestones__getCurrentMilestoneResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toAddress()
      )
    );
  }

  getMilestone(index: BigInt): Milestones__getMilestoneResult {
    let result = super.call(
      "getMilestone",
      "getMilestone(uint88):(uint256,uint64)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return new Milestones__getMilestoneResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getMilestone(
    index: BigInt
  ): ethereum.CallResult<Milestones__getMilestoneResult> {
    let result = super.tryCall(
      "getMilestone",
      "getMilestone(uint88):(uint256,uint64)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Milestones__getMilestoneResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getMilestoneLength(): Milestones__getMilestoneLengthResult {
    let result = super.call(
      "getMilestoneLength",
      "getMilestoneLength():(uint256,uint256)",
      []
    );

    return new Milestones__getMilestoneLengthResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getMilestoneLength(): ethereum.CallResult<
    Milestones__getMilestoneLengthResult
  > {
    let result = super.tryCall(
      "getMilestoneLength",
      "getMilestoneLength():(uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Milestones__getMilestoneLengthResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  nextPayment(): BigInt {
    let result = super.call("nextPayment", "nextPayment():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextPayment(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextPayment", "nextPayment():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  pendingOwner(): Address {
    let result = super.call("pendingOwner", "pendingOwner():(address)", []);

    return result[0].toAddress();
  }

  try_pendingOwner(): ethereum.CallResult<Address> {
    let result = super.tryCall("pendingOwner", "pendingOwner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  recipient(): Address {
    let result = super.call("recipient", "recipient():(address)", []);

    return result[0].toAddress();
  }

  try_recipient(): ethereum.CallResult<Address> {
    let result = super.tryCall("recipient", "recipient():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  release(): BigInt {
    let result = super.call("release", "release():(uint256)", []);

    return result[0].toBigInt();
  }

  try_release(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("release", "release():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  token(): Address {
    let result = super.call("token", "token():(address)", []);

    return result[0].toAddress();
  }

  try_token(): ethereum.CallResult<Address> {
    let result = super.tryCall("token", "token():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall extends ethereum.Call {
  get inputs(): AcceptOwnershipCall__Inputs {
    return new AcceptOwnershipCall__Inputs(this);
  }

  get outputs(): AcceptOwnershipCall__Outputs {
    return new AcceptOwnershipCall__Outputs(this);
  }
}

export class AcceptOwnershipCall__Inputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class AcceptOwnershipCall__Outputs {
  _call: AcceptOwnershipCall;

  constructor(call: AcceptOwnershipCall) {
    this._call = call;
  }
}

export class CancelOwnershipTransferCall extends ethereum.Call {
  get inputs(): CancelOwnershipTransferCall__Inputs {
    return new CancelOwnershipTransferCall__Inputs(this);
  }

  get outputs(): CancelOwnershipTransferCall__Outputs {
    return new CancelOwnershipTransferCall__Outputs(this);
  }
}

export class CancelOwnershipTransferCall__Inputs {
  _call: CancelOwnershipTransferCall;

  constructor(call: CancelOwnershipTransferCall) {
    this._call = call;
  }
}

export class CancelOwnershipTransferCall__Outputs {
  _call: CancelOwnershipTransferCall;

  constructor(call: CancelOwnershipTransferCall) {
    this._call = call;
  }
}

export class ChangeRecipientCall extends ethereum.Call {
  get inputs(): ChangeRecipientCall__Inputs {
    return new ChangeRecipientCall__Inputs(this);
  }

  get outputs(): ChangeRecipientCall__Outputs {
    return new ChangeRecipientCall__Outputs(this);
  }
}

export class ChangeRecipientCall__Inputs {
  _call: ChangeRecipientCall;

  constructor(call: ChangeRecipientCall) {
    this._call = call;
  }

  get newRecipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeRecipientCall__Outputs {
  _call: ChangeRecipientCall;

  constructor(call: ChangeRecipientCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _msPayments(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _msDates(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get _tip(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _recipient(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _botDAO(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class ReleaseCall extends ethereum.Call {
  get inputs(): ReleaseCall__Inputs {
    return new ReleaseCall__Inputs(this);
  }

  get outputs(): ReleaseCall__Outputs {
    return new ReleaseCall__Outputs(this);
  }
}

export class ReleaseCall__Inputs {
  _call: ReleaseCall;

  constructor(call: ReleaseCall) {
    this._call = call;
  }
}

export class ReleaseCall__Outputs {
  _call: ReleaseCall;

  constructor(call: ReleaseCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SafeTransferOwnershipCall extends ethereum.Call {
  get inputs(): SafeTransferOwnershipCall__Inputs {
    return new SafeTransferOwnershipCall__Inputs(this);
  }

  get outputs(): SafeTransferOwnershipCall__Outputs {
    return new SafeTransferOwnershipCall__Outputs(this);
  }
}

export class SafeTransferOwnershipCall__Inputs {
  _call: SafeTransferOwnershipCall;

  constructor(call: SafeTransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SafeTransferOwnershipCall__Outputs {
  _call: SafeTransferOwnershipCall;

  constructor(call: SafeTransferOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
