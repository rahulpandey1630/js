// Define a constant score with value 400
const score = 400;
console.log(score);

// Create a Number object with value 100
const balance = new Number(100);
console.log(balance);

// Convert balance to string and print its length
console.log(balance.toString().length);

// Convert balance to a fixed point number with 1 decimal place
console.log(balance.toFixed(1));

// Define a floating-point number
const otherNumber = 123.8966;
// Convert the number to a string with a specified precision
console.log(otherNumber.toPrecision(4));

// Define a large number
const hundreds = 1000000;
// Convert the number to a locale-specific string (Indian format)
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

// Generate a random integer between 1 and 10 (inclusive)
console.log(Math.floor(Math.random() * 10) + 1);

// Define minimum and maximum values for range
const min = 10;
const max = 20;

// Generate a random integer between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
