// Global scope
//var c=300
let a = 300; // 'a' is defined in the global scope
// {} this is a scope
if (true) {
    let a = 10; // Block-scoped 'a' shadows global 'a'
    const b = 20; // Block-scoped 'b'
    // console.log("INNER: ", a); // Would print 10 if uncommented
}

// console.log(a); // Would print 300, refers to global 'a'
// console.log(b); // Error: 'b' is not defined in this scope
// console.log(c); // Error: 'c' is not defined, 'var c = 300' is commented out


// Global Scope Differences:

//global scope is different in browser and nodejs
// 1. In Browser (Console):
// - The global object is `window`.
// - Variables declared with `var` become properties of `window`.

var myVar = "hello";
console.log(window.myVar); // Output: "hello"

// 2. In Node.js:
// - The global object is `global`.
// - Variables declared with `var` do NOT become properties of `global`.

var myVarNode = "hello";
console.log(global.myVarNode); // Output: undefined

// Main Difference:
// - Browser: Global `var` variables are part of `window`.
// - Node.js: Global `var` variables are not part of `global`; they are scoped to the module.



// closure is a function that retains access to variables from its outer scope, even after the outer function has finished executing.
// nested scope 
function one() {
    const username = "hitesh"; // Function-scoped 'username'

    function two() {
        const website = "youtube"; // Function-scoped 'website'
        console.log(username); // Accessing 'username' from parent function 'one'
    }
    // console.log(website); // Error: 'website' is not defined in this scope

    two(); // Calls 'two' function // calls two inside one
}

// one(); // Calls 'one' function

//similar like above but with conditionals

if (true) {
    const username = "hitesh"; // Block-scoped 'username'
    if (username === "hitesh") {
        const website = " youtube"; // Block-scoped 'website'
        // console.log(username + website); // Would print "hitesh youtube" if uncommented
    }
    // console.log(website); // Error: 'website' is not defined in this scope
}

// console.log(username); // Error: 'username' is not defined in this scope

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)); // Function declarations are hoisted

function addone(num) {
    return num + 1;
}

// addTwo(5); // Error: 'addTwo' is not defined yet (hoisting does not apply to function expressions)
const addTwo = function(num) {
    return num + 2;
};

// Key Points on Scope and Hoisting:
// Block Scope: 'let' and 'const' are block-scoped. Accessible only within the block.
// Function Scope: 'var' is function-scoped. Accessible throughout the function.
// Global Scope: Variables outside any function/block are globally scoped.
// Hoisting: Function declarations are hoisted. Function expressions and 'let'/'const' are not hoisted the same way.
// Shadowing: Inner scope variables can shadow outer scope variables.



// ✅ This function returns another function (function returning function)
function myFunc(){
    
    // This is the inner function which just returns a string
    function hello(){
        return "hello world";
    }

    // Instead of returning a value, we're returning the entire function 'hello'
    return hello;
}

// Now we call 'myFunc', which returns the 'hello' function
// So 'ans' will now hold a reference to the 'hello' function
const ans = myFunc();

// Now we call the function stored in 'ans', which executes 'hello' and returns the string
console.log(ans());  // Output: "hello world"

//this AND cAll BACK ARE HIGHER ORDER FUNCTIONS 




// ✅ What is a Callback Function?
// A callback is a function passed as an argument to another function.
// It is called (or "called back") after the main function finishes its task.
//Functions that take other functions as arguments or return functions.

// ✅ Example 1: Basic callback
function greetUser(name, callback) {
  console.log("Hi " + name);
  callback(); // calling the passed function
}

function sayBye() {
  console.log("Goodbye!");
}

// Passing 'sayBye' as a callback to 'greetUser'
greetUser("Rahul", sayBye);
//or
// Passing the callback directly inside the function call
greetUser("Rahul", function sayBye() {
  console.log("Bye!");
});

// Output:
// Hi Rahul
// Goodbye!

// ✅ Example 2: Callback in asynchronous function (real-world usage)
setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

// The anonymous function passed to setTimeout is also a callback.

// 💡 Why use callback functions?
// - To execute code after something finishes (like loading data)
// - Helps handle asynchronous operations
// - Allows customizing or reusing code behavior



// First-Order Function:
// A function that does NOT accept or return another function.

// It's just a normal function.


// function add(a, b) {
//   return a + b; // First-order function (no function input or output)
// }



// ✅ Pure Function:
// - Always returns the same output for the same input
// - Has no side effects (does not modify external state)

function add(a, b) {
  return a + b; // Pure: no external dependency, no side effect
}

// Calling add(2, 3) will always return 5
// It doesn't affect or rely on anything outside the function


// ❌ Impure Function:
// - May return different output for the same input
// - Has side effects (e.g., modifies a global variable)

let count = 0;

function increment() {
  count++; // Impure: modifies external variable
  return count;
}

// Every time increment() is called, the result changes
// Also, it affects the external variable 'count'


// 🔁 Summary:
// Pure Function:
//   ✅ Same input → same output
//   ✅ No side effects
//   ✅ Easy to test and debug

// Impure Function:
//   ❌ Output can vary for same input
//   ❌ Has side effects (e.g., logs, DOM changes, global vars)
//   ❌ Harder to predict and test





// ✅ Lexical Scoping:
// - A function's scope is determined by its position in the source code (where it was written).
// - Inner functions have access to variables of their outer functions.

// Example:
function outer() {
  let name = "Rahul"; // 'name' is defined in outer scope

  function inner() {
    console.log(name); // Inner function can access 'name' due to lexical scope
  }

  inner(); // Output: Rahul
}

// Lexical scope: inner() can access variables where it was defined (inside outer())


// ✅ Closures:
// - A closure is created when an inner function "remembers" variables from its outer function, even after the outer function has finished executing.

// Example:
function greetUser() {
  let greeting = "Hello";

  return function(name) {
    console.log(greeting + " " + name); // uses 'greeting' from outer scope
  };
}

let greeter = greetUser(); // greetUser() has finished, but 'greeting' is remembered
greeter("Rahul"); // Output: Hello Rahul

// Here, the inner function forms a closure over 'greeting'


// 🔁 Summary:
// ✅ Lexical Scoping:
//   - Scope is based on where functions are written
//   - Inner functions can access variables from outer functions

// ✅ Closures:
//   - Functions "remember" their lexical scope
//   - Allow access to outer variables even after the outer function has returned
