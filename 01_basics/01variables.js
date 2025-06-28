const accountId = 144553; // `const` is used for variables that shouldn't change
let accountEmail = "hitesh@google.com"; // `let` is used for variables that can change
var accountPassword = "12345"; // `var` is function-scoped and should be avoided in modern JavaScript
accountCity = "Jaipur"; // Without `let`, `const`, or `var`, this creates a global variable (not recommended)
let accountState; // `let` allows declaration without initialization
var id;
let id2;

cont pi=
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
                     
var: Function-scoped.
let: Block-scoped.
Hoisting
var: Hoisted and initialized with undefined.
let: Hoisted but not initialized (temporal dead zone). intialized with undefined

Example with var:
javascript
Copy code
console.log(name);  // Output: undefined
var name = "Rahul";
Explanation:

The variable name is hoisted to the top and initialized with undefined.
Example with let:
javascript
Copy code
console.log(age);  // ReferenceError: Cannot access 'age' before initialization
let age = 25;
Explanation:

The variable age is hoisted, but it remains in the Temporal Dead Zone (TDZ) until the line let age = 25; is executed.
What is the Temporal Dead Zone?
The Temporal Dead Zone is the time between:

The start of the block (where the variable is scoped), and

The line where the variable is actually declared and initialized.

During this time, the variable exists but cannot be accessed.
Trying to access it results in a ReferenceError.
The TDZ is the time when a let or const variable exists but cannot be used.

It helps prevent bugs by ensuring variables are declared before use.


Re-declaration
var: Allows re-declaration within the same scope.
let: Does not allow re-declaration within the same scope.cannot access outside the scope
Usage
var: Older code, backward compatibility.
let: Modern code, preferred due to block-scoping and fewer bugs.
Summary
Use let for block-scoped variables.
Use var for function-scoped variables or older code compatibility.*/