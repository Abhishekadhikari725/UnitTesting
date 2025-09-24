# MyLib Project

This project demonstrates a simple JavaScript library (`mylib.js`) that provides basic arithmetic operations (add, subtract, multiply, divide). It includes a main program and unit tests using **Mocha** and **Chai**.

##  Project Structure

```
├── src
│   ├── mylib.js     # Arithmetic library
│   └── main.js      # Main program that imports mylib
├── test
│   └── mylib.test.js  # Unit tests with assert, expect, and should
├── package.json
├── .gitignore
└── README.md
```

##  Features

* **add(a, b)** → Adds two numbers.
* **subtract(a, b)** → Subtracts the second number from the first.
* **multiply(a, b)** → Multiplies two numbers.
* **divide(a, b)** → Divides two numbers.
   * Throws an error if divisor = 0.
* Input validation: throws an error if inputs are not numbers.

##  Run the Program

```
node src/main.js
```

Example output:

```
Add: 5 + 3 = 8
Subtract: 5 - 3 = 2
Multiply: 5 * 3 = 15
Divide: 10 / 2 = 5
/Users/.../mylib.js: Division by zero
```

##  Run Tests

Make sure you have installed dependencies:

```
npm install
```

Run all tests:

```
npm test
```

The tests include:
* **Assert style**
* **Expect style**
* **Should style**
* Error handling (`divide(10, 0)` throws an error)

##  Technologies

* JavaScript (Node.js)
* Mocha (test runner)
* Chai (assertion library)

