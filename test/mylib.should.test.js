const chai = require("chai");
const should = chai.should();
const { add, subtract, multiply, divide, square, cube, sqrt, cbrt } = require("../src/mylib");

describe("mylib.js (should)", () => {
  describe("add()", () => {
    it("should add two numbers", () => {
      add(2, 3).should.equal(5);
    });

    it("should throw error if inputs are not numbers", () => {
      (() => add(2, "a")).should.throw("Inputs must be numbers");
    });
  });

  describe("subtract()", () => {
    it("should subtract numbers", () => {
      subtract(5, 3).should.equal(2);
    });
  });

  describe("multiply()", () => {
    it("should multiply numbers", () => {
      multiply(4, 3).should.equal(12);
    });
  });

  describe("divide()", () => {
    it("should divide numbers", () => {
      divide(10, 2).should.equal(5);
    });

    it("should throw error when dividing by zero", () => {
      (() => divide(10, 0)).should.throw("Division by zero");
    });
  });

  // New math function tests
  describe("square()", () => {
    it("should return square of a number", () => {
      square(4).should.equal(16);
    });
  });

  describe("cube()", () => {
    it("should return cube of a number", () => {
      cube(3).should.equal(27);
    });
  });

  describe("sqrt()", () => {
    it("should return square root of a number", () => {
      sqrt(16).should.equal(4);
    });

    it("should throw error for negative number", () => {
      (() => sqrt(-9)).should.throw("Input must be a non-negative number");
    });
  });

  describe("cbrt()", () => {
    it("should return cube root of a number", () => {
      cbrt(27).should.equal(3);
    });
  });
});
