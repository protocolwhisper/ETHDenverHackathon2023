import {
  AbstractAddress,
  BytesLike,
  ContractFactory,
  JsonAbi,
  TransactionResponse,
} from "fuels";
import { Contract } from "fuels";
import { Interface } from "fuels";
import { provider } from "./Provider";

export async function contractInterface(byteCode: BytesLike, abi: JsonAbi) {
  let contractFactory = new ContractFactory(byteCode, abi, provider);
  return contractFactory.interface;
}

export async function getFactory(bytecode: BytesLike, abi: JsonAbi) {
  let contractFactory = new ContractFactory(bytecode, abi, provider);
  return contractFactory;
}

export async function createContract(id: AbstractAddress, inter: Interface) {
  const contract: Contract = new Contract(id, inter, provider);
  return contract;
}

// id  = Transaction Id

export async function getResponse(id: string) {
  let response = new TransactionResponse(id, provider); // We get a receipt for the transaction id
}

