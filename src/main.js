const { add, subtract, multiply, divide, square, cube, sqrt, cbrt } = require("./mylib");

console.log("Add: 5 + 3 =", add(5, 3));
console.log("Subtract: 5 - 3 =", subtract(5, 3));
console.log("Multiply: 5 * 3 =", multiply(5, 3));
console.log("Divide: 10 / 2 =", divide(10, 2));
console.log("Square: 4 =", square(4));
console.log("Cube: 3 =", cube(3));
console.log("Square Root: 16 =", sqrt(16));
console.log("Cube Root: 27 =", cbrt(27));

