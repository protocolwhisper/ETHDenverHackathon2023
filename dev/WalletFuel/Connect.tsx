
// Detect if fuel is installed 

// Fuel loaded handler


async function checkFuelWallet(){
const onFuelLoaded = () => {
    if(window.fuel == undefined) {
        console.log("Install Fuel Wallet from here https://wallet.fuel.network/docs/install/")
    }else{
        console.log("Fuel is installed and ready to go")
    }
  };
  
  // If fuel is already loaded, call the handler
  if (window.fuel) {
    onFuelLoaded();
  }
  
  // Listen for the fuelLoaded event
  document.addEventListener("FuelLoaded", onFuelLoaded);
}

async function requestConnection(){
    const isConnected = await fuel.connect();
    return isConnected;   
}

async function requestDisconnection(){
    const Disconnected = await checkFuelWallet.disconnect()
    return Disconnected
}

async function getCurrentAccount(){
    const currentAccount = await fuel.currentAccount();
    return currentAccount
}

