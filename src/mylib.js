function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
    return a + b;
}
  
function subtract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
    return a - b;
}
  
function multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
    return a * b;
}
  
function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Inputs must be numbers");
    }
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
}

// New features added below
function square(a) {
  if (typeof a !== "number") throw new Error("Input must be a number");
  return a * a;
}

function cube(a) {
  if (typeof a !== "number") throw new Error("Input must be a number");
  return a * a * a;
}

function sqrt(a) {
  if (typeof a !== "number" || a < 0) throw new Error("Input must be a non-negative number");
  return Math.sqrt(a);
}

function cbrt(a) {
  if (typeof a !== "number") throw new Error("Input must be a number");
  return Math.cbrt(a);
}

module.exports = { add, subtract, multiply, divide, square, cube, sqrt, cbrt };
  