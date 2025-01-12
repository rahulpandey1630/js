// ✅ WHAT DOES "LEXICAL" MEAN?

// "Lexical" means the function can access variables from the place where it is written (defined),
// not from where it is called. This is called "lexical scope".

// ✅ SIMPLE EXAMPLE TO UNDERSTAND LEXICAL SCOPE:
function outer() {
    let myName = "Rahul";  // Variable inside the outer function

    function inner() {
        console.log(myName);  // ✅ Accessing myName from the outer function
    }

    inner();  // Calling the inner function
}
outer();
// ✅ Output: "Rahul"
// ✅ Explanation: inner() can access myName because it is written inside the outer function.
// This is an example of lexical scope (inner function has access to outer function's variables).

// ---------------------------------------------

// ✅ LEXICAL `this` IN ARROW FUNCTIONS:
// Arrow functions inherit `this` from where they are defined.
// They do NOT have their own `this`.

const user = {
    username: "Rahul",

    // Using an arrow function inside an object
    arrowFunc: () => {
        console.log(this.username);  // Arrow function inherits `this` from the global context
    }
};

user.arrowFunc();
// ❌ Output: undefined
// ❌ Explanation: The arrow function doesn't have its own `this`.
// It inherits `this` from the global context, where `username` doesn't exist.

// ---------------------------------------------

// ✅ NORMAL FUNCTION VS ARROW FUNCTION (Key Difference):
// In normal functions, `this` refers to the object that calls the function.
// In arrow functions, `this` is inherited from the outer context (lexical scope).

const userNormal = {
    username: "Rahul",

    // Normal function
    normalFunc: function() {
        console.log("Normal Function:", this.username);
        // ✅ "this" refers to the userNormal object
    },

    // Arrow function
    arrowFunc: () => {
        console.log("Arrow Function:", this.username);
        // ❌ "this" is inherited from the global context (undefined)
    }
};

userNormal.normalFunc(); 
// ✅ Output: "Normal Function: Rahul"
// ✅ Explanation: Normal functions have their own `this` that refers to the object (userNormal).

userNormal.arrowFunc(); 
// ❌ Output: "Arrow Function: undefined"
// ❌ Explanation: Arrow functions inherit `this` from the surrounding context (global object).

// ---------------------------------------------

// ✅ DIFFERENCE BETWEEN NORMAL FUNCTION AND ARROW FUNCTION (Summary):

// 🔹 Normal Function:
// - `this` refers to the object that calls the function.
// - Suitable for object methods.
// - Can access variables within the object.

// 🔹 Arrow Function:
// - `this` is inherited from the outer scope (lexical).
// - Does NOT have its own `this`.
// - Not suitable for object methods.

