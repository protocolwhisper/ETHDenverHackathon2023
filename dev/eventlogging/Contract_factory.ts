import type { Provider, BaseWalletLocked, AbstractAddress } from "fuels";
import { Interface, Contract } from "fuels";
import type {
  CounterContractAbi,
  CounterContractAbiInterface,
} from "../contractShit/ETHDenver2023-Fuel/ETHDenver-Oracle/.out/debug ";
const _abi = {
  types: [
    {
      typeId: 0,
      type: "()",
      components: [],
      typeParameters: null,
    },
    {
      typeId: 1,
      type: "u64",
      components: null,
      typeParameters: null,
    },
  ],
  functions: [
    {
      inputs: [],
      name: "count",
      output: {
        name: "",
        type: 1,
        typeArguments: null,
      },
    },
    {
      inputs: [],
      name: "increment",
      output: {
        name: "",
        type: 0,
        typeArguments: null,
      },
    },
  ],
  loggedTypes: [],
};

export class CounterContractAbi__factory {
  static readonly abi = _abi;
  static createInterface(): CounterContractAbiInterface {
    return new Interface(_abi) as unknown as CounterContractAbiInterface;
  }
  static connect(
    id: string | AbstractAddress,
    walletOrProvider: BaseWalletLocked | Provider
  ): CounterContractAbi {
    return new Contract(
      id,
      _abi,
      walletOrProvider
    ) as unknown as CounterContractAbi;
  }