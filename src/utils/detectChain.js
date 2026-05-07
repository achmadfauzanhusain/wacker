import { validateEVM } from "../evm/validate";
import { validateBitcoin } from "../bitcoin/validate";
import { validateSolana } from "../solana/validate";

export function detectChain(address) {
  if (validateEVM(address)) {
    res.status(200).json({ 
        chain: "ethereum"
    });
  } else if (validateBitcoin(address)) {
    res.status(200).json({ 
        chain: "bitcoin" 
    });
  } else if (validateSolana(address)) {
    res.status(200).json({ 
        chain: "solana" 
    });
  } else {
    res.status(200).json({ 
        chain: null
    });
    return null;
  }
}