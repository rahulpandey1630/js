// ✅ IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// 🔹 DEFINITION:  
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed immediately after it is defined.  
// The function is wrapped in parentheses and followed by `()` to execute it right away.  
// It helps to create a private scope and avoid polluting the global namespace.

// ✅ EXAMPLE 1: NAMED IIFE
(function chai() {
    console.log(`DB CONNECTED`);  
    // ✅ Output: "DB CONNECTED"
})();  // put semicolon at end to end it otherwise we will not be able to write two iife
// 🔹 Explanation:  
// - The function `chai` is defined and immediately invoked.  
// - The name `chai` is optional because IIFEs are self-contained and don’t need to be called again.

// ---------------------------------------------

// ✅ EXAMPLE 2: ARROW FUNCTION IIFE , unnamed iife with parameters
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');
// ✅ Output: "DB CONNECTED TWO hitesh"

// 🔹 Explanation:  
// - This is an IIFE using an arrow function.  
// - The function is invoked immediately with the argument `'hitesh'`.  
// - Arrow functions can also be used to create IIFEs.

// ---------------------------------------------

// ✅ WHY USE IIFE?

// 🔹 1. To Create Private Scopes  
// Variables inside an IIFE are not accessible outside, preventing global variable conflicts.

// 🔹 2. To Avoid Polluting the Global Namespace  
// IIFEs help avoid creating too many global variables by keeping variables and functions scoped within the IIFE.

// 🔹 3. To Execute Code Immediately  
// IIFEs are useful when you want some code to run as soon as your script loads.

// ---------------------------------------------

// ✅ IIFE WITH RETURN VALUE
const result = (function() {
    let num = 42;
    return num * 2;
})();
console.log(result);  
// ✅ Output: 84

// 🔹 Explanation:  
// - The IIFE returns a value, which is stored in the `result` variable.
// - The code inside the IIFE runs immediately and returns the calculated value.
