console.log("Hello World");

/**
 * Represents the numeric value 12 assigned to the variable `numberOne`.
 * This variable is intended to serve as an initial or default number in
 * operations or calculations requiring a predefined constant value.
 */
console.log("Hello");

const numberOne = 12;
/**
 * Represents the numerical value 43.
 * This constant is used for operations or settings
 * where the number 43 is required or significant.
 *
 * @constant {number}
 */
const numberTwo = 43;

/**
 * An array containing numerical values.
 * Represents a collection of numbers, typically used for storing integer values.
 *
 * @type {number[]}
 */
const myArray = [10, 20, 40];

/**
 * Calculates the sum of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The sum of a and b.
 */
function sum(a, b) {
  return a + b;
}

for (const myValue of myArray) {
  console.log(myValue);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(sum(numberOne, numberTwo));
console.log(sum(numberOne, numberTwo));
console.log(myArray[0]);

/**
 * Compares two arguments and determines if they are equal.
 *
 * @param {*} a - The first value to compare.
 * @param {*} b - The second value to compare.
 * @return {boolean} Returns true if the two values are equal, otherwise false.
 */
function myFunction(a, b) {
  return a === b;
}

console.log(myFunction(10, 10));
console.log(0.1 + 0.2);
