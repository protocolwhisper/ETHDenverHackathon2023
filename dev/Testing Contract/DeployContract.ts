import { Provider, ContractFactory } from "fuels";
import { generateTestWallet } from "@fuel-ts/wallet/dist/test-utils";
import { provider, wallet } from "./Provider";
import { abi, byteCode } from "./TestMain";
// basic setup

// load the byteCode of the contract, generated from Sway source

// send byteCode and ABI to ContractFactory to load
export async function getContractFactory() {
  const factory = new ContractFactory(byteCode, abi, wallet);
  return factory;
}

const contract = getContractFactory();
console.log(contract);
