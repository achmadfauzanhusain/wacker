import { JsonRpcProvider } from "ethers";

const provider = new JsonRpcProvider(
  "https://ethereum-rpc.publicnode.com"
);

export async function resolveENS(ensName) {
  try {
    const address = await provider.resolveName(ensName);
    return address;
  } catch (error) {
    console.error("Error resolving ENS name:", error);
    return null;
  }
}