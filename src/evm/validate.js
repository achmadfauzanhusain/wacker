import { isAddress } from "ethers";

export function validateEVM(address) {
  return isAddress(address);
}