import { readFileSync } from "fs";
import { Contract, Address } from "fuels";
import { join } from "path";
import { provider, PRIVATE_KEY } from "./Provider";
//Setting out contract outputs
export const byteCode = readFileSync(
  join(
    __dirname,
    "../../dev/contractShit/ETHDenver2023-Fuel/out/debug/bounty_board.bin"
  )
);

// load the JSON abi of the contract, generated from Sway source
export const abi = JSON.parse(
  readFileSync(
    join(
      __dirname,
      "../../dev/contractShit/ETHDenver2023-Fuel/out/debug/bounty_board-abi.json"
    )
  ).toString()
);

// In this function the contract is already  deployed ?
const contract: Contract = new Contract(
  Address.fromPublicKey(PRIVATE_KEY),
  abi,
  provider
);
const providerContract = new Contract(
  contract.id,
  contract.interface,
  provider
);
//const { value } = await providerContract.functions.counter().get();
//expect(value.toHex()).toEqual(toHex(1300));
