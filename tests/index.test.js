import { describe, it, expect } from "vitest";
import { validateEVM, validateSolana, validateBitcoin } from "../src";

describe("EVM Validator", () => {
  it("should validate correct address", () => {
    expect(
      validateEVM("0x742d35Cc6634C0532925a3b844Bc454e4438f44e")
    ).toBe(true);
  });

  it("should reject invalid address", () => {
    expect(validateEVM("123")).toBe(false);
  });
});

describe("Solana Validator", () => {
  it("should validate correct address", () => {
    expect(
      validateSolana("7EcDhSYGxXyscszYEp35KHN8vvw3svAuLKTzXwCFLtV")
    ).toBe(true);
  });

  it("should reject invalid address", () => {
    expect(validateSolana("123")).toBe(false);
  });
});

describe("Bitcoin Validator", () => {
  it("should validate correct address", () => {
    expect(
      validateBitcoin("1BoatSLRHtKNngkdXEeobR76b53LETtpyT")
    ).toBe(true);
  });

  it("should reject invalid address", () => {
    expect(validateBitcoin("123")).toBe(false);
  });
});