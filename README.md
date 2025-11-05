# MyLib Project

**Version:** 1.1.0  

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
├── LICENSE 
└── README.md

```

##  Features

* **add(a, b)** → Adds two numbers.
* **subtract(a, b)** → Subtracts the second number from the first.
* **multiply(a, b)** → Multiplies two numbers.
* **divide(a, b)** → Divides two numbers.
   * Throws an error if divisor = 0.
* Input validation: throws an error if inputs are not numbers.

###  Additional Math Features
* **square(a)** → Returns the square of a number.  
* **cube(a)** → Returns the cube of a number.  
* **sqrt(a)** → Returns the square root (throws error for negative inputs).  
* **cbrt(a)** → Returns the cube root of a number.  


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
Square: 4 = 16
Cube: 3 = 27
Square Root: 16 = 4
Cube Root: 27 = 3
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


## License
This project is licensed under the [MIT License](./LICENSE).

---

##  Changelog

### **v1.1.0 – New Features Added**
- Added new mathematical operations:
  - `square(a)`
  - `cube(a)`
  - `sqrt(a)`
  - `cbrt(a)`
- Updated documentation and README  
- No breaking changes — backward compatible with v1.0.0  

### **v1.0.0 – Initial Release**
- Implemented core arithmetic operations:
  - `add(a, b)`
  - `subtract(a, b)`
  - `multiply(a, b)`
  - `divide(a, b)`
- Added unit testing setup with Mocha and Chai  
- Basic input validation and error handling

