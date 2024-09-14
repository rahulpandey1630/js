// Define a constant score with value 400
const score = 400;
console.log(score);

// Create a Number object with value 100
const balance = new Number(100);
console.log(balance);

// Convert balance to string and print its length
// Number prototypes have methods like toString() which has many functions like length
console.log(balance.toString().length);

// Convert balance to a fixed point number with 1 decimal place
console.log(balance.toFixed(1));

// Define a floating-point number
const otherNumber = 123.8966;
// Convert the number to a string with a specified precision
console.log(otherNumber.toPrecision(4));

// Define a large number
const hundreds = 1000000;
// Convert the number to a locale-specific string (Indian format) by default us format
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Print the Math object
console.log(Math);

// Print the absolute value of -4
console.log(Math.abs(-4));

// Round 4.6 to the nearest integer
console.log(Math.round(4.6));

// Round 4.2 up to the nearest integer
console.log(Math.ceil(4.2));

// Round 4.9 down to the nearest integer
console.log(Math.floor(4.9));

// Find the minimum value in the set 4, 3, 6, 8
console.log(Math.min(4, 3, 6, 8));

// Find the maximum value in the set 4, 3, 6, 8
console.log(Math.max(4, 3, 6, 8));

// Generate a random number between 0 and 1
console.log(Math.random());

// Generate a random number between 1 and 11 (not inclusive)
console.log((Math.random() * 10) + 1);

// Generate a random integer between 1 and 10 (inclusive) . floor will round off
console.log(Math.floor(Math.random() * 10) + 1);

// Define minimum and maximum values for range
const min = 10;
const max = 20;

// Generate a random integer between min and max (inclusive)
/*Math.random() generates a random number between 0 and 1.
Math.random() * (max - min + 1) scales it to a range from 0 to max - min + 1 (which is 11 for 10 to 20).
Math.floor() rounds this number down to the nearest integer, resulting in an integer from 0 to 10.
Adding min shifts this range to 10 to 20.*/
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// +++++++++++++ Additional Number Functions +++++++++++++++++++++++++++++

// The smallest positive number that can be represented
console.log(Number.MIN_VALUE);

// The largest positive number that can be represented
console.log(Number.MAX_VALUE);

// Positive infinity
console.log(Number.POSITIVE_INFINITY);

// Negative infinity
console.log(Number.NEGATIVE_INFINITY);

// NaN (Not-a-Number) value
console.log(Number.NaN);
//can see many more using number. in console
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
