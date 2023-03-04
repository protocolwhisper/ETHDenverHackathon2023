// Function to call the wallet function 
/// <reference types="@fuel-wallet/sdk" />
import { Contract, transactionRequestify, TransactionResponse , Address} from "fuels";
import {provider} from "./Provider";

import { connect } from "http2";
import { abi } from "./main";

let key = "string";

// Declare contract const 
const contract: Contract = new Contract(Address.fromPublicKey(key), abi,provider);


async function callWallet(){

    //const window.fuel?.connect();
    
}

//const isConnected = await fuel.connect();

let CounterContractAbi__factory = 



function App() {
  useEffect(() => {
    async function main() {
      // Executes the counter function to query the current contract state
      // the `.get()` is read-only, because of this it don't expand coins.
      const { value } = await contract.functions.count().get();
    }})}

// Just for code readability 
function useEffect(arg0: () => void) {
    throw new Error("Function not implemented.");
}

//connect to a conttact

async function getMethod(method: string) {
    //Import provider 
    // Get the contract Factory 


}

async function connectContract()(
    const contract

)
