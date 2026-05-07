import { describe, it, expect } from "vitest";
import { validateEVM } from "../src";

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
