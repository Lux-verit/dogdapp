export default ({ IDL }) => {
  const Subaccount = IDL.Vec(IDL.Nat8);
  const Account = IDL.Record({
    owner: IDL.Principal,
    subaccount: IDL.Opt(Subaccount),
  });
  const Tokens = IDL.Nat;
  const Value = IDL.Variant({
    Int: IDL.Int,
    Nat: IDL.Nat,
    Blob: IDL.Vec(IDL.Nat8),
    Text: IDL.Text,
  });
  const Memo = IDL.Vec(IDL.Nat8);
  const Timestamp = IDL.Nat64;
  const TxIndex = IDL.Nat;
  const TransferError = IDL.Variant({
    GenericError: IDL.Record({
      message: IDL.Text,
      error_code: IDL.Nat,
    }),
    TemporarilyUnavailable: IDL.Null,
    BadBurn: IDL.Record({ min_burn_amount: Tokens }),
    Duplicate: IDL.Record({ duplicate_of: TxIndex }),
    BadFee: IDL.Record({ expected_fee: Tokens }),
    CreatedInFuture: IDL.Record({ ledger_time: Timestamp }),
    TooOld: IDL.Null,
    InsufficientFunds: IDL.Record({ balance: Tokens }),
  });
  const TransferResult = IDL.Variant({ Ok: TxIndex, Err: TransferError });
  const TxKind = IDL.Variant({
    Burn: IDL.Null,
    Mint: IDL.Null,
    Transfer: IDL.Null,
  });
  const TransactionView = IDL.Record({
    to: IDL.Text,
    fee: Tokens,
    from: IDL.Text,
    kind: TxKind,
    timestamp: Timestamp,
    amount: Tokens,
  });
  return IDL.Service({
    icrc1_balance_of: IDL.Func([Account], [Tokens], ["query"]),
    icrc1_decimals: IDL.Func([], [IDL.Nat8], ["query"]),
    icrc1_fee: IDL.Func([], [IDL.Nat], ["query"]),
    icrc1_logo: IDL.Func([], [IDL.Text], ["query"]),
    icrc1_metadata: IDL.Func(
      [],
      [IDL.Vec(IDL.Tuple(IDL.Text, Value))],
      ["query"],
    ),
    icrc1_minting_account: IDL.Func([], [IDL.Opt(Account)], ["query"]),
    icrc1_name: IDL.Func([], [IDL.Text], ["query"]),
    icrc1_supported_standards: IDL.Func(
      [],
      [IDL.Vec(IDL.Record({ url: IDL.Text, name: IDL.Text }))],
      ["query"],
    ),
    icrc1_symbol: IDL.Func([], [IDL.Text], ["query"]),
    icrc1_total_supply: IDL.Func([], [Tokens], ["query"]),
    icrc1_transfer: IDL.Func(
      [
        IDL.Record({
          to: Account,
          fee: IDL.Opt(Tokens),
          memo: IDL.Opt(Memo),
          from_subaccount: IDL.Opt(Subaccount),
          created_at_time: IDL.Opt(Timestamp),
          amount: Tokens,
        }),
      ],
      [TransferResult],
      [],
    ),
    set_logo: IDL.Func([IDL.Text], [], []),
    transaction: IDL.Func(
      [IDL.Nat, IDL.Nat],
      [
        IDL.Record({
          content: IDL.Vec(TransactionView),
          offset: IDL.Nat,
          limit: IDL.Nat,
          totalElements: IDL.Nat,
        }),
      ],
      ["query"],
    ),
  });
};
export const init = ({ IDL }) => {
  return [];
};
