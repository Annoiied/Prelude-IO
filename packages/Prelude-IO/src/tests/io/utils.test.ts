import { mergeNames } from "../../lib/io/utils";

describe("mergeNames()", () => {
  it("merges two names", () => {
    expect(mergeNames(["a", "b"], "->")).toBe("a -> b");

    expect(mergeNames(["a", "b -> c"], "||")).toBe("a || (b -> c)");

    expect(mergeNames(["a", "(d)b -> c"], "||")).toBe("a || ((d)b -> c)");
  });
});
