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

//thi AND cAll BACK ARE HIGHER ORDER FUNCTIONS 