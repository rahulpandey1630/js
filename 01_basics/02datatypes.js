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
//PRIMITIVE
// number => Represents both integer and floating-point numbers, can handle values up to 2^53
// bigint => Represents integer values larger than 2^53 - 1
// string => Represents textual data, enclosed in quotes ("")
// boolean => Represents true or false
// null => Represents the intentional absence of any object value, considered a standalone value. When typeof used it gives object
// undefined => Represents a variable that has been declared but not assigned a value  //coSnt VALUE cANT BE UNDEFINED
// symbol => Represents a unique identifier, often used to add unique property keys to an object

// Objects can store collections of data and more complex entities

// Using typeof to check the type of variables
console.log(typeof undefined); // Outputs: "undefined"
console.log(typeof null); // Outputs: "object" (this is a historical quirk in JavaScript)

// BigInt can also be created using the BigInt() function: let x = BigInt("12345678901234567890");
// Or by adding 'n' at the end of a number: let y = 12345678901234567890n;
// It allows working with very large integers beyond the safe limit of Number in JavaScript.

// Primitive types include number, string, boolean, null, undefined, symbol, and bigint — they store actual values.
// Reference types include objects, arrays, and functions — they store memory addresses (references), not actual values.
// Assigning/copying a primitive creates an independent copy, but copying a reference type links both variables to the same object in memory.
// Example: let a = 10; let b = a; → b is a copy. But let obj1 = {}; let obj2 = obj1; → obj2 and obj1 point to the same object.
// Changing obj2 will also affect obj1, but changing b does not affect a.

// // Primitive types like number, string, boolean are stored in the stack
// let a = 10; // 'a' directly holds the value 10

// // Objects like arrays or custom objects are stored in the heap
// let obj = { name: "Rahul" }; // 'obj' holds a reference (pointer) to the object in heap

// // Copying a primitive copies the value
// let b = a; // 'b' is a new copy of 10
// b = 20;    // changing 'b' does not affect 'a'

// // Copying an object copies the reference, not the object itself
// let obj2 = obj; // both obj and obj2 point to the same memory location in heap
// obj2.name = "Amit"; // changing obj2 affects obj too

// console.log(obj.name); // Output: "Amit"



//CONVERT NUMBER TO STRING
let num=18+""; //one wy
num=String(num); //other WAY 
//convert String to number
let cric=+"34";    
cric=Number(cric);