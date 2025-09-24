const assert = require("chai").assert;
const { add, subtract, multiply, divide } = require("../src/mylib");

describe("mylib.js (assert)", () => {
  describe("add()", () => {
    it("should add two numbers", () => {
      assert.equal(add(2, 3), 5);
    });

    it("should throw error if inputs are not numbers", () => {
      assert.throws(() => add(2, "a"), "Inputs must be numbers");
    });
  });

  describe("subtract()", () => {
    it("should subtract numbers", () => {
      assert.equal(subtract(5, 3), 2);
    });
  });

  describe("multiply()", () => {
    it("should multiply numbers", () => {
      assert.equal(multiply(4, 3), 12);
    });
  });

  describe("divide()", () => {
    it("should divide numbers", () => {
      assert.equal(divide(10, 2), 5);
    });

    it("should throw error when dividing by zero", () => {
      assert.throws(() => divide(10, 0), "Division by zero");
    });
  });
});
