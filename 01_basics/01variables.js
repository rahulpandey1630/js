const accountId = 144553; // `const` is used for variables that shouldn't change
let accountEmail = "hitesh@google.com"; // `let` is used for variables that can change
var accountPassword = "12345"; // `var` is function-scoped and should be avoided in modern JavaScript
accountCity = "Jaipur"; // Without `let`, `const`, or `var`, this creates a global variable (not recommended)
let accountState; // `let` allows declaration without initialization

// The following line would throw an error because `accountId` is a constant
// accountId = 2; // not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])