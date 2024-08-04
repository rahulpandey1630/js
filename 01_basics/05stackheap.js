// Stack and Heap Memory in JavaScript

// Stack Memory (Primitive Data Types)
// Primitive data types: string, number, boolean, null, undefined, symbol, BigInt

const firstVariable = 'javascript'; 
// 'firstVariable' is stored on the stack with the value 'javascript'
let secondVariable = firstVariable; 
// 'secondVariable' gets a copy of 'firstVariable' value, also stored on the stack
 
console.log(firstVariable); // Output: 'javascript'
console.log(secondVariable); // Output: 'javascript'

secondVariable = 'javascriptBackend'; 
// Changing 'secondVariable' does not affect 'firstVariable' as it's a copy

console.log(firstVariable); // Output: 'javascript'
// 'firstVariable' remains 'javascript' because 'secondVariable' is a copy
console.log(secondVariable); // Output: 'javascriptBackend'
// 'secondVariable' is updated independently

// Heap Memory (Non-Primitive Data Types)
// Non-primitive data types: objects, arrays, functions

const firstObject = { channel: "hiteshChoudhary" }; 
// 'firstObject' is stored on the heap and the variable holds a reference to the heap memory
let secondObject = firstObject; 
// 'secondObject' holds a reference to the same object on the heap

console.log(firstObject); // Output: { channel: "hiteshChoudhary" }
console.log(secondObject); // Output: { channel: "hiteshChoudhary" }

secondObject.channel = "chaiaurcode"; 
// Modifying 'secondObject' affects 'firstObject' because both reference the same object

console.log(firstObject); // Output: { channel: "chaiaurcode" }
// Both 'firstObject' and 'secondObject' reflect the change
console.log(secondObject); // Output: { channel: "chaiaurcode" }
// Both variables still reference the same object

// Notes:
// - Stack Memory: Stores primitive data types. Faster access. Copying creates independent variables.
// - Heap Memory: Stores non-primitive data types. Used for dynamic memory allocation. Copying creates references to the same object.
