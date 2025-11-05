const assert = require("chai").assert;
const { add, subtract, multiply, divide, square, cube, sqrt, cbrt } = require("../src/mylib");

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

  // New math function tests
  describe("square()", () => {
    it("should return square of a number", () => {
      assert.equal(square(4), 16);
    });
  });

  describe("cube()", () => {
    it("should return cube of a number", () => {
      assert.equal(cube(3), 27);
    });
  });

  describe("sqrt()", () => {
    it("should return square root of a number", () => {
      assert.equal(sqrt(16), 4);
    });

    it("should throw error for negative number", () => {
      assert.throws(() => sqrt(-9), "Input must be a non-negative number");
    });
  });

  describe("cbrt()", () => {
    it("should return cube root of a number", () => {
      assert.equal(cbrt(27), 3);
    });
  });
});
