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



// =================== LEXICAL SCOPE EXAMPLE ===================

// Lexical scope means that a function can access variables defined in its **outer scope**
// (i.e., where the function was physically written in the code)

// This variable is declared in the global scope
const myVar = "value1";

// This function is defined in the global scope
function myApp() {
    
    // Inner function inside myApp
    function myFunc() {

        // Uncommenting the next line would shadow the outer myVar
        // const myVar = "value59";

        // A function defined using arrow function syntax
        const myFunc2 = () => {
            // Lexical scope allows access to `myVar` from its parent scopes
            console.log("inside myFunc", myVar);
        }

        // Calling inner function
        myFunc2();
    }

    // Accessing the outer variable directly inside the function
    console.log(myVar);   // ✅ Output: "value1"
    
    // Call inner function
    myFunc();
}

// Call the top-level function
myApp();

/* =================== OUTPUT ===================
value1
inside myFunc value1
================================================= */

/* ============== HOW LEXICAL SCOPE WORKS ==============

1. The function `myFunc2` is defined inside `myFunc`, which is inside `myApp`.

2. JavaScript uses lexical (static) scoping, which means:
   - The scope of a variable is determined by its **position in the code** (i.e., where it's written).
   - Inner functions have access to variables from outer functions where they were defined, not where they were called.

3. `myFunc2` looks for `myVar`:
   - First inside its own function → not found
   - Then in `myFunc` → not found (unless the commented line is uncommented)
   - Then in `myApp` → not found
   - Then in the global scope → ✅ found `myVar = "value1"`

If the line `const myVar = "value59";` is uncommented in `myFunc`, that will shadow the global `myVar` and output will change:

=========== NEW OUTPUT ===========
value1
inside myFunc value59
==================================
*/
