// ✅ OBJECT DESTRUCTURING:
// Object destructuring allows us to extract properties from objects and assign them to variables.
const user = {
    username: "hitesh",
    price: 999,

    // ✅ TRADITIONAL FUNCTION INSIDE OBJECT:
    // A regular function defined inside an object can use "this" to access object properties.
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // Uses "this" to access the username, to refer to current context
        console.log(this); // "this" refers to the user object
    }
};

// Calling the function before and after modifying the object
user.welcomeMessage(); // Output: "hitesh, welcome to website" and the user object
user.username = "sam"; // Changing username or now context changed
user.welcomeMessage(); // Output: "sam, welcome to website" and the user object

// ✅ IMPORTANT CONCEPT: "this" in regular functions inside objects refers to the object itself.


// -----------------------


// ✅ GLOBAL "this":
// "this" outside any function or object refers to the global object (Window in browsers, or {} in Node.js).
console.log(this); 
// Output: {} in Node.js or the global Window object in browsers.

//in browser global object is window remember

// -----------------------


// ✅ FUNCTION DECLARATION:
// A regular function declared using the "function" keyword.
function chai() {
    let username = "hitesh";
    console.log(this.username); 
    // Output: undefined
    // "this" refers to the global object (or undefined in strict mode).
    // not able to use this in normal function but used earlier in object 
}

// chai();


// ✅ FUNCTION EXPRESSION:
// A function stored in a variable is called a function expression.
const chaiFunction = function() {
    let username = "hitesh";
    console.log(this.username); 
    // Output: undefined
    // In function expressions, "this" still refers to the global object.
};

// chaiFunction();


// -----------------------


// ✅ ARROW FUNCTION:
// Arrow functions are a shorter syntax for writing functions. They do NOT have their own "this".
// Instead, they inherit "this" from the surrounding scope.

const chaiArrow = () => {
    let username = "hitesh";
    console.log(this);
    // Output: {}
    // Explanation: Arrow functions inherit "this" from the parent scope.
};

// chaiArrow();

/* // ✅ HOW `this` WORKS DIFFERENTLY IN NORMAL FUNCTION AND ARROW FUNCTION

// 🔹 NORMAL FUNCTION EXAMPLE
const userNormal = {
    username: "hitesh",

    // Normal function inside an object
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`); 
        // ✅ "this" refers to the object calling the function (userNormal)
    }
};

userNormal.welcomeMessage(); 
// ✅ Output: "hitesh, welcome to the website"
// ✅ In normal functions, "this" refers to the object that called the function.

// ---------------------------------------------

// 🔹 ARROW FUNCTION EXAMPLE
const userArrow = {
    username: "hitesh",

    // Arrow function inside an object
    welcomeMessage: () => {
        console.log(`${this.username}, welcome to the website`); 
        // ❌ "this" refers to the global object, NOT the userArrow object.
    }
};

userArrow.welcomeMessage(); 
// ❌ Output: "undefined, welcome to the website"
// ❌ In arrow functions, "this" does NOT refer to the object that called it. 
// Instead, it inherits "this" from the surrounding context (global object).

// ---------------------------------------------

// ✅ DETAILED DIFFERENCE EXAMPLE
const user = {
    username: "hitesh",

    // Normal function inside the object
    normalFunc: function() {
        console.log("Normal Function:", this.username); 
        // ✅ "this" refers to the user object
    },

    // Arrow function inside the object
    arrowFunc: () => {
        console.log("Arrow Function:", this.username); 
        // ❌ "this" refers to the global object, NOT the user object
    }
};

user.normalFunc(); 
// ✅ Output: "Normal Function: hitesh"
// ✅ In normal functions, "this" works as expected and refers to the object (user).

user.arrowFunc(); 
// ❌ Output: "Arrow Function: undefined"
// ❌ In arrow functions, "this" is inherited from the outer scope and does not point to the object.

// ---------------------------------------------

// 🔹 CONCLUSION:
// ✅ Use NORMAL FUNCTIONS when defining methods inside objects to correctly access "this".
// ✅ Use ARROW FUNCTIONS when you want to inherit "this" from the surrounding context.
// ❌ Avoid using ARROW FUNCTIONS as object methods because they can't access the object properties via "this".
 */

// -----------------------


// ✅ RETURN STATEMENTS IN ARROW FUNCTIONS:

// 1️⃣ Standard return // explicit return 
const addTwo = (num1, num2) => {
    return num1 + num2;
};

// 2️⃣ Implicit return (shorter syntax without "return" keyword)
const addTwoImplicit = (num1, num2) => num1 + num2;

// 3️⃣ Implicit return with parentheses
const addTwoWithParens = (num1, num2) => (num1 + num2);

// 4️⃣ Returning an object from an arrow function
const addTwoWithObject = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4)); 
// Output: 7

console.log(addTwoWithObject(3, 4)); 
// Output: { username: "hitesh" }

// ✅ IMPORTANT CONCEPT: When returning an object from an arrow function, wrap the object in parentheses to avoid syntax errors.


// -----------------------


// ✅ ARRAY METHOD - forEach():
// The forEach() method executes a provided function once for each array element.

const myArray = [2, 5, 3, 7, 8];

myArray.forEach((element) => {
    console.log(element * 2);
});

// Output:
// 4
// 10
// 6
// 14
// 16


// -----------------------


// ✅ Summary of Key Concepts:

/**
 * 🔹 "this" keyword:
 * Refers to the object it belongs to. In regular functions, it refers to the global object (or undefined in strict mode).
 *
 * 🔹 Arrow Function:
 * A shorter syntax for writing functions. Arrow functions do NOT have their own "this" and inherit it from the surrounding context.
 *
 * 🔹 Function Expression:
 * A function assigned to a variable. Unlike declarations, expressions are not hoisted.
 *
 * 🔹 Object Destructuring:
 * A way to extract properties from an object and assign them to variables.
 *
 * 🔹 forEach() Method:
 * An array method that runs a provided function once for each array element.
 *
 * 🔹 Returning Objects from Arrow Functions:
 * When returning an object from an arrow function, wrap the object in parentheses to avoid syntax errors.
 */
