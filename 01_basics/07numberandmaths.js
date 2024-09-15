// Define a constant score with value 400
const score = 400;
console.log(score); // Output: 400

// Create a Number object with value 100
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

// Convert balance to string and print its length
// Number prototypes have methods like toString() which has many functions like length
console.log(balance.toString().length); // Output: 3 (since "100" has 3 characters)

// Convert balance to a fixed point number with 1 decimal place
console.log(balance.toFixed(1)); // Output: 100.0

// Define a floating-point number
const otherNumber = 123.8966;
// Convert the number to a string with a specified precision
console.log(otherNumber.toPrecision(4)); // Output: 123.9

// Define a large number
const hundreds = 1000000;
// Convert the number to a locale-specific string (Indian format) by default us format
console.log(hundreds.toLocaleString('en-IN')); // Output: 10,00,000
// The smallest positive number that can be represented

//Number()
console.log(Number.MIN_VALUE); // Output: 5e-324

// The largest positive number that can be represented
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// Positive infinity
console.log(Number.POSITIVE_INFINITY); // Output: Infinity

// Negative infinity
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity

// NaN (Not-a-Number) value
console.log(Number.NaN); // Output: NaN

// Check if a value is NaN
console.log(Number.isNaN(NaN)); // Output: true
console.log(Number.isNaN(123)); // Output: false

// Check if a value is finite
console.log(Number.isFinite(123)); // Output: true
console.log(Number.isFinite(Infinity)); // Output: false

// Check if a value is an integer
console.log(Number.isInteger(10)); // Output: true
console.log(Number.isInteger(10.5)); // Output: false

// Convert a string to a floating-point number
console.log(Number.parseFloat("10.5")); // Output: 10.5

// Convert a string to an integer
console.log(Number.parseInt("10.5")); // Output: 10
console.log(Number.parseInt("10", 2)); // Output: 2 (interprets "10" as binary)

// Check if a number is a safe integer
console.log(Number.isSafeInteger(100));  // Output: true
console.log(Number.isSafeInteger(1e20)); // Output: false

// The smallest interval between two representable numbers
console.log(Number.EPSILON); // Output: 2.220446049250313e-16

/*
  Number Functions:
  - Number.MIN_VALUE: The smallest positive number that can be represented in JavaScript.
  - Number.MAX_VALUE: The largest positive number that can be represented in JavaScript.
  - Number.POSITIVE_INFINITY: Represents infinity (returned on overflow).
  - Number.NEGATIVE_INFINITY: Represents negative infinity (returned on overflow).
  - Number.NaN: Represents a value that is not a number.
  - Number.isNaN(value): Determines if the passed value is NaN.
  - Number.isFinite(value): Determines whether the passed value is a finite number.
  - Number.isInteger(value): Determines if the passed value is an integer.
  - Number.parseFloat(value): Converts a string or number into a floating-point number.
  - Number.parseInt(value, radix): Converts a string or number into an integer.
  - Number.isSafeInteger(value): Checks if a number is a safe integer.
  - Number.EPSILON: The smallest interval between two representable numbers.
*/

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Print the Math object
console.log(Math); // Output: [Math object with all math methods like abs, round, etc.]

// Print the absolute value of -4
console.log(Math.abs(-4)); // Output: 4 (absolute value of -4)

// Round 4.6 to the nearest integer
console.log(Math.round(4.6)); // Output: 5 (rounds to the nearest integer)

// Round 4.2 up to the nearest integer
console.log(Math.ceil(4.2)); // Output: 5 (rounds up to the nearest integer)

// Round 4.9 down to the nearest integer
console.log(Math.floor(4.9)); // Output: 4 (rounds down to the nearest integer)

// Find the minimum value in the set 4, 3, 6, 8
console.log(Math.min(4, 3, 6, 8)); // Output: 3

// Find the maximum value in the set 4, 3, 6, 8
console.log(Math.max(4, 3, 6, 8)); // Output: 8

// Generate a random number between 0 and 1
console.log(Math.random()); // Output: Random number between 0 and 1 (e.g., 0.56483)

// Generate a random number between 1 and 11 (not inclusive)
console.log((Math.random() * 10) + 1); // Output: Random number between 1 and 11 (e.g., 5.98213)

// Generate a random integer between 1 and 10 (inclusive) . floor will round off
console.log(Math.floor(Math.random() * 10) + 1); // Output: Random integer between 1 and 10 (e.g., 3)

// Define minimum and maximum values for range
const min = 10;
const max = 20;

// Generate a random integer between min and max (inclusive)
/*Math.random() generates a random number between 0 and 1.
Math.random() * (max - min + 1) scales it to a range from 0 to max - min + 1 (which is 11 for 10 to 20).
Math.floor() rounds this number down to the nearest integer, resulting in an integer from 0 to 10.
Adding min shifts this range to 10 to 20.*/
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: Random integer between 10 and 20 (e.g., 15)

// +++++++++++++ Additional Number Functions +++++++++++++++++++++++++++++

// The smallest positive number that can be represented
console.log(Number.MIN_VALUE); // Output: 5e-324

// The largest positive number that can be represented
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308

// Positive infinity
console.log(Number.POSITIVE_INFINITY); // Output: Infinity

// Negative infinity
console.log(Number.NEGATIVE_INFINITY); // Output: -Infinity

// NaN (Not-a-Number) value
console.log(Number.NaN); // Output: NaN
// can see many more using number. in console

// Documentation:
/*
  Number Functions:
  - Number.MIN_VALUE: The smallest positive number that can be represented in JavaScript.
  - Number.MAX_VALUE: The largest positive number that can be represented in JavaScript.
  - Number.POSITIVE_INFINITY: Represents infinity (returned on overflow).
  - Number.NEGATIVE_INFINITY: Represents negative infinity (returned on overflow).
  - Number.NaN: Represents a value that is not a number.

  Math Functions:
  - Math.abs(x): Returns the absolute value of x.
  - Math.round(x): Returns the value of x rounded to the nearest integer.
  - Math.ceil(x): Returns the value of x rounded up to the nearest integer.
  - Math.floor(x): Returns the value of x rounded down to the nearest integer.
  - Math.min(...values): Returns the smallest of zero or more numbers.
  - Math.max(...values): Returns the largest of zero or more numbers.
  - Math.random(): Returns a pseudo-random number between 0 and 1.
  - Math.floor(Math.random() * (max - min + 1)) + min: Generates a random integer between min and max (inclusive).
*/
