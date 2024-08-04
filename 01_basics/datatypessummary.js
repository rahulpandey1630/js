// Primitive Types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; // Number
const scoreValue = 100.3; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // null (special primitive type)
let userEmail; // undefined (variable declared but not assigned)

const id = Symbol('123'); // Symbol (unique and immutable)
const anotherId = Symbol('123'); // Another unique Symbol

console.log(id === anotherId); // false (each Symbol is unique)

// const bigNumber = 3456543576654356754n; // BigInt for large integers

// Reference (Non-primitive) Types
 
// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // Array
let myObj = {
    name: "hitesh",
    age: 22,
}; // Object

const myFunction = function() {
    console.log("Hello world");
}; // Function

console.log(typeof anotherId); // "symbol" (type of Symbol)
console.log(typeof myObj);
// Link to study more about type conversion in JavaScript:
// https://262.ecma-international.org/5.1/#sec-11.4.3
/*For null, typeof returns "object".
For undefined, it returns "undefined".
For functions, it returns "function".
For other objects (including arrays), it returns "object".*/