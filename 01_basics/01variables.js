const accountId = 144553; // `const` is used for variables that shouldn't change
let accountEmail = "hitesh@google.com"; // `let` is used for variables that can change
var accountPassword = "12345"; // `var` is function-scoped and should be avoided in modern JavaScript
accountCity = "Jaipur"; // Without `let`, `const`, or `var`, this creates a global variable (not recommended)
let accountState; // `let` allows declaration without initialization
var id;
let id2;
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
let: Hoisted but not initialized (temporal dead zone).
Re-declaration
var: Allows re-declaration within the same scope.
let: Does not allow re-declaration within the same scope.
Usage
var: Older code, backward compatibility.
let: Modern code, preferred due to block-scoping and fewer bugs.
Summary
Use let for block-scoped variables.
Use var for function-scoped variables or older code compatibility.*/