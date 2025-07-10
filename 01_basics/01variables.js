const accountId = 144553; // `const` is used for variables that shouldn't change
let accountEmail = "hitesh@google.com"; // `let` is used for variables that can change
var accountPassword = "12345"; // `var` is function-scoped and should be avoided in modern JavaScript
accountCity = "Jaipur"; // Without `let`, `const`, or `var`, this creates a global variable (not recommended)
let accountState; // `let` allows declaration without initialization
var id;
let id2;

const pi = 3.14;
console.log(pi);
//CASE SENSITIVE 

//RULES FOR VARIABLE NAMING

// Variable names in JavaScript must start with a letter, underscore (_) or dollar sign ($).
// They can contain letters, digits, underscores, and dollar signs but cannot start with a digit.
// Variable names are case-sensitive and cannot be JavaScript reserved keywords like "var" or "if".

// you cannot use spaces 
// var first_name = "harshit"; // snake case writing 
// var firstName = "harshit"; // camel case writing  PREFER // convention 
// start with small letter and use camelCase 
// first name (invalid)

// 'use strict' enables strict mode, which catches common coding mistakes and makes JS safer.
// It prevents usage of undeclared variables and reserved keywords, improving code quality.
// Always place it at the top of a script or function to enforce stricter parsing rules.


// The following line would throw an error because `accountId` is a constant
// accountId = 2; // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState,id2,id])
/*var vs let in JavaScript
Scope 
                     
var: Function-scoped.(will be SAme throughout program).Allows re-declaration
let: Block-scoped. ALLOW REASSIGNMENT BUT NOT REDECLARATION
Hoisting
var: Hoisted and initialized with undefined.
let: Hoisted but not initialized (temporal dead zone). intialized with undefined


// =================== BLOCK SCOPE vs FUNCTION SCOPE ===================

// ------------------------ Key Concepts ------------------------

// 'let' and 'const' are BLOCK SCOPED:
// - They are only accessible within the block (i.e., inside { ... }) where they are defined.

// 'var' is FUNCTION SCOPED:
// - It is accessible anywhere inside the entire function where it is declared,
//   even if declared inside a smaller block like an if/for block.

The window object is the global object.
Variables declared with var at the global level are added as properties to the window object.
However, variables declared with let or const at the global level are not added to window.


// ======================== CODE EXAMPLE ========================

function myApp() {
    if (true) {
        // Declared using 'var', which is FUNCTION scoped
        var firstName = "harshit";
        console.log(firstName);  // ✅ Output: "harshit"
    }

    if (true) {
        // Even though we are in a different block,
        // 'firstName' is still accessible because 'var' is function-scoped
        console.log(firstName);  // ✅ Output: "harshit"
    }

    // Still accessible here as well
    console.log(firstName);      // ✅ Output: "harshit"
}

// Call the function
myApp();

/* ================= OUTPUT =================
harshit
harshit
harshit
============================================ */

/* =============== What Happens Behind the Scenes ===============

- The variable 'firstName' is declared with 'var' inside an if-block.
- Because 'var' is function-scoped (not block-scoped), it is hoisted and available
  throughout the entire function `myApp`, not just inside the if-block.

So the same variable is being accessed in all three places, and it works fine.

======================================================
     Now, let’s contrast this behavior with `let` or `const`
======================================================

function myApp() {
    if (true) {
        let firstName = "harshit";
        console.log(firstName); // ✅ "harshit"
    }

    if (true) {
        console.log(firstName); // ❌ ReferenceError: firstName is not defined
    }

    console.log(firstName);     // ❌ ReferenceError: firstName is not defined
}

- In this version, `firstName` is block-scoped due to `let`.
- So it's only accessible **within** the first `if` block.
- Any access outside that block results in a ReferenceError.

======================================================
                SUMMARY
======================================================
- `var` → function-scoped: accessible anywhere in the function
- `let` and `const` → block-scoped: accessible only inside the block `{}` where declared
*/


// 🔁 Hoisting means JavaScript moves declarations to the top of their scope
// 🟡 Only declarations are hoisted, not initializations

// hoisting -> jab hum JS mein koi variable banate hain to wo do parts mein toot jaata hai:
// 1. declaration part -> upar chala jaata hai (hoist hota hai)
// 2. initialization part -> wahi reh jaata hai jahan likha gaya hai
console.log(a); // undefined
var a = 10;
// JavaScript internally does:
// var a;
// console.log(a); // undefined
// a = 10;



// console.log(nm);    // Output: undefined (not error)
// var nm = "Harsh";
// var nm;             // declaration hoisted to the top
// console.log(nm);    // undefined (because initialization hasn't happened yet)
// nm = "Harsh";       // initialization happens here



// var x = 1;   // global

// {
//    var x = 2; // still global
// }

// console.log(x); // Output: 2 ✅




// let a = 10; // 'a' declared in the outer (global) scope

// {
//   // This 'a' is a new variable, scoped only to this block
//   let a = 20; 
//   console.log("Inside:", a); // Output: 20 => refers to block-scoped 'a'
// }

// console.log("Outside:", a); // Output: 10 => refers to outer 'a', unaffected by block



// const person = { name: "Harsh" };

// person.name = "Sharma"; // ✅ allowed
// person = {};            // ❌ Not allowed (TypeError)
// // 'const' means the variable binding (reference) cannot change
// // BUT if it's an object or array, you can still modify its contents

// const person = { name: "Harsh" }; // person holds reference to the object

// person.name = "Sharma"; // ✅ Allowed: we're changing a property of the object

// person = {}; // ❌ Not allowed: we're trying to reassign the 'person' variable itself



// ================= GLOBAL EXECUTION CONTEXT (GEC) ==================

// When a JavaScript program starts, the JS engine creates a Global Execution Context.
// It has two phases:
// 1. Creation Phase
// 2. Execution Phase

// -------------------- CREATION PHASE --------------------
// - Memory is allocated for variables and functions.
// - Variables declared with 'var' are hoisted and initialized to undefined.
// - Functions are hoisted with their actual definitions.
// - 'let' and 'const' are also hoisted, BUT not initialized. They go into the Temporal Dead Zone.

// -------------------- EXECUTION PHASE --------------------
// - Code is executed line by line.
// - Variables are assigned actual values.
// - Function calls are made and their execution contexts are pushed to the Call Stack.

// ======================= EXAMPLE ========================

console.log(myName);    // undefined (hoisted, but value not yet assigned)
var myName = "Rahul";

// Behind the scenes:
// var myName is hoisted to the top and initialized to undefined during the creation phase
// In the execution phase, it gets the value "Rahul"

sayHello();  // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}

// The function 'sayHello' is hoisted completely with its definition
// So we can call it before its actual declaration in code

// ================= TEMPORAL DEAD ZONE (TDZ) =================

// Variables declared using 'let' and 'const' are hoisted,
// but they are not initialized until the actual line of code is executed.

// The time between entering the block and initializing the variable is the Temporal Dead Zone

// -------------------- EXAMPLE --------------------

console.log(age);  // ❌ ReferenceError: Cannot access 'age' before initialization
let age = 25;

// What happens behind the scenes:
// During creation phase: 'age' is hoisted but stays in TDZ
// Trying to access it before initialization throws ReferenceError

// -------------------- Another Example --------------------

{
  // TDZ for 'city' starts here
  // console.log(city); ❌ ReferenceError
  let city = "Delhi"; // TDZ ends here
  console.log(city);  // ✅ Works fine, prints "Delhi"
}




// This behavior helps prevent bugs caused by using variables before they are properly declared and initialized

// Note: 'const' works the same way as 'let' in terms of hoisting and TDZ,
// but you must also initialize it at the time of declaration

// -------------------- const Example --------------------

{
  // console.log(country); ❌ ReferenceError
  const country = "India";  // Must be initialized
  console.log(country);     // ✅ Prints "India"
}

// ================= SUMMARY =================
// - All variables are hoisted during the creation phase.
// - 'var' is initialized to undefined; 'let' and 'const' are not initialized.
// - Accessing 'let' or 'const' before their line of declaration causes a ReferenceError due to TDZ.
// - GEC is created when the script starts and contains global variables, functions, and the 'this' keyword.
// - TDZ is a safeguard to ensure variables are not accessed before proper initialization.


// Re-declaration
// var: Allows re-declaration within the same scope.
// let: Does not allow re-declaration within the same scope.cannot access outside the scope
// Usage
// var: Older code, backward compatibility.
// let: Modern code, preferred due to block-scoping and fewer bugs.
// Summary
// Use let for block-scoped variables.
// Use var for function-scoped variables or older code compatibility.*/



// // ✅ Global Scope - accessible everywhere
// var globalVar = 10;

// function funcScopeExample() {
//   // ✅ Function Scope - only inside this function
//   var funcVar = 20;
//   let funcLet = 30;
//   const funcConst = 40;
// }

// // ❌ console.log(funcVar); // Error: not accessible outside

// if (true) {
//   // ✅ Block Scope - only inside this block
//   let blockLet = 50;
//   const blockConst = 60;

//   // ❌ var is NOT block-scoped, it leaks out
//   var blockVar = 70;
// }

// // ❌ console.log(blockLet); // Error
// // ❌ console.log(blockConst); // Error
// console.log(blockVar); // ✅ 70 (var is not block-scoped)
