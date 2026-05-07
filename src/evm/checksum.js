import { getAddress } from "ethers";

export function toChecksum(address) {
  return getAddress(address);
}