const { expect } = require("chai");
const { add, subtract, multiply, divide } = require("../src/mylib");

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
});
