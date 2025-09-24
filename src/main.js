const { add, subtract, multiply, divide } = require("./mylib");

console.log("Add: 5 + 3 =", add(5, 3));
console.log("Subtract: 5 - 3 =", subtract(5, 3));
console.log("Multiply: 5 * 3 =", multiply(5, 3));
console.log("Divide: 10 / 2 =", divide(10, 2));
console.log("Divide: 10 / 0 =", divide(10, 0));
