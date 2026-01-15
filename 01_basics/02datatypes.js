"use strict"; 
// Enforce stricter parsing and error handling in your JavaScript code 
// and treats all JS code as newer version

// Uncomment the next line if running in a browser environment
// alert(3 + 3); // Alerts the sum of 3 + 3 in a browser , cannot use it in this way in node environment has a diff syntax for it in node

console.log(3 + 3); // Prints the sum of 3 + 3 to the console, demonstrating good readability
console.log("Hitesh"); // Prints "Hitesh" to the console

// Variable declarations
let name = "hitesh"; // String variable
let age = 18; // Number variable
let isLoggedIn = false; // Boolean variable
let state; // Undefined variable, as no value is assigned

// Notes on data types in JavaScript:

// PRIMITIVE
// number => Represents both integer and floating-point numbers, can handle values up to 2^53
// bigint => Represents integer values larger than 2^53 - 1
// string => Represents textual data, enclosed in quotes ("",'',``)
// boolean => Represents true or false
// null => Represents the intentional absence of any object value, considered a standalone value. 
//         When typeof used it gives object . let v = null; // WE GET UNDEFINED BUT WE GIVE NULL 
// undefined => Represents a variable that has been declared but not assigned a value  

// ❓ Can const value be undefined?
// ✅ YES, but only if you assign it explicitly
const x = undefined; // Allowed

// ❌ But you CANNOT declare a const without assigning a value
// const y; // ❌ SyntaxError: Missing initializer in const declaration

// symbol => Represents a unique identifier, often used to add unique property keys to an object
// 🔹 Symbol is a primitive data type introduced in ES6
// 🔹 It is used to create unique identifiers, mostly for object keys
// 🔹 Every Symbol is guaranteed to be unique

// ✅ Creating symbols
const sym1 = Symbol("id"); // symbol with description "id"
const sym2 = Symbol("id"); // different from sym1 even though description is same

// sym1 and sym2 are unique
// console.log(sym1 === sym2); // false

// ✅ Using symbol as a unique object key
const id = Symbol("userId");
const user = {
  name: "Harsh",
  [id]: 101  // symbol used as hidden/unique key
};

// console.log(user[id]); // 101

// 🔐 Symbols are not enumerable
// They won’t appear in for...in or Object.keys
// Useful for adding non-conflicting hidden properties

// 🔁 Summary:
// - Symbol is a unique and immutable primitive
// - Used for hidden or special keys in objects
// - Not accessible in normal loops
// - Symbol("desc") always creates a new symbol
// - Use Symbol.for("desc") if you want to share symbol globally

// Objects can store collections of data and more complex entities

// Using typeof to check the type of variables
console.log(typeof undefined); // Outputs: "undefined"
console.log(typeof null); // Outputs: "object" (this is a historical quirk in JavaScript)
console.log(typeof NaN); // Outputs: "number" 

// BigInt can also be created using the BigInt() function: let x = BigInt("12345678901234567890");
// Or by adding 'n' at the end of a number: let y = 12345678901234567890n;
// It allows working with very large integers beyond the safe limit of Number in JavaScript.

// Primitive types include number, string, boolean, null, undefined, symbol, and bigint — they store actual values.
// Reference types include objects, arrays, and functions — they store memory addresses (references), not actual values.
// Assigning/copying a primitive creates an independent copy, but copying a reference type links both variables to the same object in memory.
// Example: let a = 10; let b = a; → b is a copy. But let obj1 = {}; let obj2 = obj1; → obj2 and obj1 point to the same object.
// Changing obj2 will also affect obj1, but changing b does not affect a.

// Primitive types like number, string, boolean are stored in the stack
let a = 10; // 'a' directly holds the value 10

// Objects like arrays or custom objects are stored in the heap
let obj = { name: "Rahul" }; // 'obj' holds a reference (pointer) to the object in heap

// Copying a primitive copies the value
let b = a; // 'b' is a new copy of 10
b = 20;    // changing 'b' does not affect 'a'

// Copying an object copies the reference, not the object itself
let obj2 = obj; // both obj and obj2 point to the same memory location in heap
obj2.name = "Amit"; // changing obj2 affects obj too

console.log(obj.name); // Output: "Amit"

// ✅ Primitive Types (number, string, boolean, null, undefined, symbol, bigint)
// - Stored directly in memory (stack)
// - Copying creates a new independent value

let p = 10;
let q = p;
q = 20;

console.log(p); // 10 (not affected by change in q)

// ✅ Reference Types (objects, arrays, functions)
// - Stored as reference (address in heap)
// - Copying passes the reference, not actual data

let obj1 = { name: "Harsh" };
let obj3 = obj1; // obj3 points to same object

obj3.name = "Sharma";

console.log(obj1.name); // "Sharma" (affected, because both refer to same object)

// CONVERT NUMBER TO STRING
let num = 18 + ""; // one way
num = String(num); // other WAY 

// Convert String to number
let cric = +"34";    
cric = Number(cric);


// V8 is a high-performance JavaScript engine developed by Google that compiles JavaScript into machine code and executes it in Chrome and Node.js.

// Engine  	Browser	  Company
// V8     	Chrome	  Google
// SpiderMonkey  	Firefox	 Mozilla
// JavaScriptCore	 Safari	  Apple
// Chakra	 IE (old)	   Microsoft
// V8  brave