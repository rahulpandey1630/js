 // ✅ FALSY VALUES & TRUTHY VALUES IN JAVASCRIPT

// 🔹 **Falsy Values:**  
// These are values that are considered "false" when evaluated in a conditional statement.
// Falsy values include:
// 1. false  
// 2. 0   
// 3.-0  
// 4. BigInt 0n  (zero n)
// 5. "" (empty string)  
// 6. null  
// 7. undefined  
// 8. NaN   
// false ==0,false=='',0=='' true all

// Example:
const userEmail = [];  // An empty array is a truthy value

if (userEmail) {
    console.log("Got user email");  // This will run because the array is truthy
} else {
    console.log("Don't have user email");
}

// ✅ **Truthy Values:**  
// These are values that are considered "true" when evaluated in a conditional statement.  
// Truthy values include:
// 1. "0" (a string with zero)  
// 2. 'false' (a string with false)  
// 3. " " (a space)  
// 4. [] (an empty array)  
// 5. {} (an empty object)  
// 6. function(){} (any function)

// ---------------------------------------------

// ✅ **Checking if an Array is Empty:**
if (userEmail.length === 0) {
    console.log("Array is empty");  // This condition checks if the array length is 0
}

// ✅ **Checking if an Object is Empty:**
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");  // Object.keys() returns an array of keys, so we check its length
}

// ---------------------------------------------

// ✅ NULLISH COALESCING OPERATOR (??)

// 🔹 **Definition:**  
// The Nullish Coalescing Operator (`??`) returns the right-hand side value if the left-hand side is `null` or `undefined`.

// Example:
let val1;
val1 = 5 ?? 10;  // Returns 5, because 5 is not null or undefined
val1 = null ?? 10;  // Returns 10, because the left side is null
val1 = undefined ?? 15;  // Returns 15, because the left side is undefined
val1 = null ?? 10 ?? 20;  // Returns 10, because the first non-null/undefined value is 10

console.log(val1);  // Output: 10

// ---------------------------------------------

// ✅ TERNARY OPERATOR

// 🔹 **Definition:**  
// The Ternary Operator is a shorthand for `if-else` statements.  
// Syntax: `condition ? expressionIfTrue : expressionIfFalse`

const iceTeaPrice = 100;

// Check if the price is less than or equal to 80
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");  // Output: More than 80

// ---------------------------------------------

// ✅ **Summary of Key Concepts:**
// 1️⃣ **Falsy Values:** false, 0, "", null, undefined, NaN.  
// 2️⃣ **Truthy Values:** "0", 'false', [], {}, function(){}.  
// 3️⃣ **Nullish Coalescing Operator (??):** Returns the first non-null/undefined value.  
// 4️⃣ **Ternary Operator:** A shorthand for conditional statements with the syntax `condition ? trueExpression : falseExpression`.
 