import { Contract, transactionRequestify, TransactionResponse } from "fuels";
import { provider } from "./Provider";

let id = "0xe252a6908e52974a5425e7621c28781e91ffe9274c69f1de3b4f0cb410292769";
async function callinfo() {
  const response = new TransactionResponse(id, provider);
  const receipt = response.decodeTransaction;
  console.log(receipt);
}
//console.log(response);


function runTask(): void {
    callinfo()
}

setInterval(runTask, 5000); // 5000 milliseconds = 5 seconds
