const { expect } = require("chai");
const { add, subtract, multiply, divide, square, cube, sqrt, cbrt } = require("../src/mylib");

describe("mylib.js (expect)", () => {
  describe("add()", () => {
    it("should add two numbers", () => {
      expect(add(2, 3)).to.equal(5);
    });

    it("should throw error if inputs are not numbers", () => {
      expect(() => add(2, "a")).to.throw("Inputs must be numbers");
    });
  });

  describe("subtract()", () => {
    it("should subtract numbers", () => {
      expect(subtract(5, 3)).to.equal(2);
    });
  });

  describe("multiply()", () => {
    it("should multiply numbers", () => {
      expect(multiply(4, 3)).to.equal(12);
    });
  });

  describe("divide()", () => {
    it("should divide numbers", () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it("should throw error when dividing by zero", () => {
      expect(() => divide(10, 0)).to.throw("Division by zero");
    });
  });

  //  New math function tests
  describe("square()", () => {
    it("should return square of a number", () => {
      expect(square(4)).to.equal(16);
    });
  });

  describe("cube()", () => {
    it("should return cube of a number", () => {
      expect(cube(3)).to.equal(27);
    });
  });

  describe("sqrt()", () => {
    it("should return square root of a number", () => {
      expect(sqrt(16)).to.equal(4);
    });

    it("should throw error for negative number", () => {
      expect(() => sqrt(-9)).to.throw("Input must be a non-negative number");
    });
  });

  describe("cbrt()", () => {
    it("should return cube root of a number", () => {
      expect(cbrt(27)).to.equal(3);
    });
  });
});
