const { add } = require("./calculator");

describe("the add function", () => {
  it("should add two values", () => {
    const result = add(2, 2);
    expect(result).toBe(4);
    expect(add(-1, 4)).toBe(3);
    expect(add(0, 6)).toBe(6);
  });

  it("should add more than two numbers", () => {
    expect(add(3, 5, 1.1)).toBe(9.1);
    expect(add(-3, 3, 0)).toBe(0);
    expect(add(-29, -20, -50)).toBe(-99);
    expect(add(-29, -20, -50, 100)).toBe(1);
  });

  it("should return 0 if no arguments are provided", () => {
    expect(add()).toBe(0);
  });

  it("should return the passed in argument when one argument is provided", () => {
    expect(add(3)).toBe(3);
  });

  it("should accept an array as an argument", () => {
    expect(add([])).toBe(0);
    expect(add([4])).toBe(4);
    expect(add([4, 5, -6])).toBe(3);
  });
});
