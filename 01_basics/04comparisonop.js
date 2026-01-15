// Comparison operations
// console.log(2 > 1);  // true
// console.log(2 >= 1); // true
// console.log(2 < 1);  // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// Type coercion in comparison
// console.log("2" > 1);   // true ("2" is coerced to 2)
// console.log("02" > 1);  // true ("02" is coerced to 2)

console.log(null > 0);   // false (null is coerced to 0)
console.log(null == 0);  // false (null only equals undefined)
console.log(null >= 0);  // true (null is coerced to 0)

console.log(undefined == 0);  // false (undefined only equals null)
console.log(undefined > 0);   // false (undefined is NaN in comparisons)
console.log(undefined < 0);   // false (undefined is NaN in comparisons)

// Strict equality (no type coercion)
console.log("2" === 2);  // false (different types)

// '==' is the loose equality operator; it compares values after type conversion if needed. not Strict 
// '===' is the strict equality operator; it compares both value and type without conversion.
// Example: '5' == 5 is true (type converted), but '5' === 5 is false (string !== number).


// '!=' is the loose inequality operator; it checks if values are not equal after type conversion.
// '!==' is the strict inequality operator; it checks if values or types are not equal without conversion.
// Example: '5' != 5 is false (types converted), but '5' !== 5 is true (string !== number).


// JavaScript has different types of operators: Arithmetic (+, -, *, /), Assignment (=, +=, -=), and Comparison (==, ===, <, >).
// Logical operators include && (AND), || (OR), and ! (NOT) for combining or inverting conditions.
// 🔹 Unary operators operate on a single operand (e.g., +, -, ++, --, typeof, delete, !)
// ✅ Examples:
// +x → converts to number, -x → negates value
// ++x / x++ → increment (prefix/postfix), --x / x-- → decrement
// typeof x → returns variable's type
// delete obj.key → removes property from object
// !x → converts to boolean and negates it (true → false, false → true)

// Other operators: typeof (type check), instanceof (instance check), and ternary (condition ? true : false).

// typeof null       → "object"     // ❌ historical bug in JavaScript, null is not actually an object
// typeof []         → "object"     // ✅ arrays are technically objects
// typeof {}         → "object"     // ✅ plain object
// typeof function(){} → "function" // ✅ only special case, functions are objects but return "function"


// 🔹 `instanceof` checks if an object is an instance of a particular constructor/class
// ✅ Syntax: object instanceof Constructor

// ✅ Examples:
console.log([] instanceof Array);      // true → [] is created from Array
console.log({} instanceof Object);     // true → {} is created from Object
console.log(function(){} instanceof Function); // true → function is from Function constructor
console.log([] instanceof Object);     // true → because Array inherits from Object

// 🔁 Summary:
// - `instanceof` checks prototype chain
// - Returns true if object inherits from the constructor's prototype
// it workS WITH REFERENCE VALUE NOT PRIMITIVE


// let p = 4;
// let q = ++p; // ++p is pre-increment → p becomes 5, then q gets the updated value

// console.log(p, q); // Output: 5 5
// // ✅ Both p and q are 5 because pre-increment increments first, then assigns

// let p = 4;
// let q = p++; // post-increment → q gets old value (4), then p becomes 5

// console.log(p, q); // Output: 5 4
// // ✅ p is 5 (after increment), q is 4 (assigned before increment)
 