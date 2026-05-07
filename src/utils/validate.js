import { validateEVM } from "../evm/validate";
import { validateBitcoin } from "../bitcoin/validate";
import { validateSolana } from "../solana/validate";

export function validate(address) {
  if (validateEVM(address)) {
    res.status(200).json({
        valid: true,
        chain: "ethereum"
    });
  } else if (validateBitcoin(address)) {
    res.status(200).json({
        valid: true,
        chain: "bitcoin"
    });
  } else if (validateSolana(address)) {
    res.status(200).json({
        valid: true,
        chain: "solana"
    });
  } else {
    res.status(200).json({
        valid: false,
        chain: null
    }); 
  }
}