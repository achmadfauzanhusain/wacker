import * as bitcoin from "bitcoinjs-lib";

export function validateBitcoin(address) {
  try {
    bitcoin.address.toOutputScript(address);
    return true;
  } catch {
    return false;
  }
}