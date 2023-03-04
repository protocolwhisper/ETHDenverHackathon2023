// Here we will call the functions
import { readFileSync } from "fs";
import { join } from "path";
import { getFactory } from "./index"; //Importing functions from index.ts
import { ContractFactory, NativeAssetId } from "fuels";
import { provider, myWallet } from "./Provider";
// Immporting the byteCode
export const byteCode = readFileSync(
  join(
    __dirname,
    "/home/clippo/dockersupabase/docker/dev/contractShit/ETHDenver2023-Fuel/out/debug/bounty_board.bin"
  )
);

// load the JSON abi of the contract, generated from Sway source
export const abi = JSON.parse(
  readFileSync(
    join(
      __dirname,
      "/home/clippo/dockersupabase/docker/dev/contractShit/ETHDenver2023-Fuel/out/debug/bounty_board-abi.json"
    )
  ).toString()
);

getFactory(byteCode, abi);

export async function deployContract() {
  const factory = new ContractFactory(byteCode, abi, myWallet);
  const contract = await factory.deployContract();
  const contract_id = contract.id;
  console.log(`Votes in block ${contract_id}`); // The contract was deployed
  return contract_id;
}
