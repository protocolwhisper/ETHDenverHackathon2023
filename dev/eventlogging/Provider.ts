// We need to create a private key then a signer

import { Provider, Signer, Wallet, WalletUnlocked } from "fuels";

// use the `generate` helper to make an Unlocked Wallet
export const myWallet: WalletUnlocked = Wallet.generate();

export const provider = new Provider("node-beta-2.fuel.network");
// Setup a private key
const PRIVATE_KEY = myWallet.privateKey;

export const wallet: WalletUnlocked = Wallet.fromPrivateKey(
  PRIVATE_KEY,
  provider
);

export const signer = new Signer(PRIVATE_KEY);

// This is just for checking

//console.log(signer);

// validate address
//expect(wallet.address).toEqual(signer.address);
