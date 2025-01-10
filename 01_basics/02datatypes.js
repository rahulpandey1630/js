"use strict"; // Enforce stricter parsing and error handling in your JavaScript code and treats all js code as newer version and write without it also

// Uncomment the next line if running in a browser environment
// alert(3 + 3); // Alerts the sum of 3 + 3 in a browser , cannot use it in this way in node environment has a diff syntax for it in node

console.log(3+3); // Prints the sum of 3 + 3 to the console, demonstrating good readability

console.log("Hitesh"); // Prints "Hitesh" to the console

// Variable declarations
let name = "hitesh"; // String variable
let age = 18; // Number variable
let isLoggedIn = false; // Boolean variable
let state; // Undefined variable, as no value is assigned

// Notes on data types in JavaScript:
// number => Represents both integer and floating-point numbers, can handle values up to 2^53
// bigint => Represents integer values larger than 2^53 - 1
// string => Represents textual data, enclosed in quotes ("")
// boolean => Represents true or false
// null => Represents the intentional absence of any object value, considered a standalone value. When typeof used it gives object
// undefined => Represents a variable that has been declared but not assigned a value
// symbol => Represents a unique identifier, often used to add unique property keys to an object

// Objects can store collections of data and more complex entities

// Using typeof to check the type of variables
console.log(typeof undefined); // Outputs: "undefined"
console.log(typeof null); // Outputs: "object" (this is a historical quirk in JavaScript)
