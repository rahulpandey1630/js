// Primitive Types
//  JS IS DYNAMICALLY TYPED LANGUAGE
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
//declaring function in variable way
const myFunction = function() {
    console.log("Hello world");
}; 
//defining with function keyword
function greet(name)
{
    console.log('hello' + name);
}
greet('rahul')

console.log(typeof anotherId); // "symbol" (type of Symbol)
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof heros);

// Link to study more about type conversion in JavaScript:
// https://262.ecma-international.org/5.1/#sec-11.4.3 check once
/*For null, typeof returns "object".
For undefined, it returns "undefined".
For functions, it returns "function object".
For other objects (including arrays), it returns "object".*/
/*               Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)
*/




// 🔹 JavaScript is a dynamically typed language
// This means variable types are determined at runtime, not during declaration
// You don't need to specify types (like int, float, string)

// ✅ Example of dynamic typing:

// let score = 100;           // score is a number
// console.log(typeof score); // Output: "number"

// score = "One Hundred";     // reassigned to a string
// console.log(typeof score); // Output: "string"

// score = true;              // reassigned to a boolean
// console.log(typeof score); // Output: "boolean"

// 🔁 Summary:
// - JavaScript allows changing the type of a variable at any point
// - This is called dynamic typing
// - No type enforcement like in statically typed languages (e.g., Java, C++)

// ✔ Static Typing is better for:
// - Large-scale applications
// - Team collaboration
// - Code that needs to be reliable and maintainable long-term