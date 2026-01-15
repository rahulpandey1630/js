// ✅ BMI Calculator Function
function calculateBMI(weightKg, heightMeters) {
  let bmi = weightKg / (heightMeters * heightMeters);
  return bmi.toFixed(2); // returns string rounded to 2 decimal places
}

// ✅ Example usage:
let weight = 70;     // in kilograms
let height = 1.75;   // in meters

let bmi = calculateBMI(weight, height);
console.log("Your BMI is:", bmi); // Output: Your BMI is: 22.86





// ✅ Higher-order function: returns a discount function
function createDiscountCalculator(discountRate) {
  // 'discountRate' is expected as a decimal (e.g., 0.2 for 20%)

  return function(price) {
    let discountedPrice = price - (price * discountRate);
    return discountedPrice.toFixed(2); // rounded to 2 decimal places
  };
}

// ✅ Create specific discount functions
const tenPercentOff = createDiscountCalculator(0.10);
const twentyPercentOff = createDiscountCalculator(0.20);

// ✅ Use the discount functions
console.log("Price after 10% discount:", tenPercentOff(500)); // 450.00
console.log("Price after 20% discount:", twentyPercentOff(500)); // 400.00





// ✅ Function that returns a counter function
function createCounter() {
  let count = 0; // private variable, not accessible from outside

  return function() {
    count++; // increments the private variable
    return count;
  };
}

// Create a counter instance
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3




 // Isolating Variable with IIFE

(function() {
  let secret = "This is private";
  console.log("Inside IIFE:", secret);
})();

// Trying to access 'secret' outside will throw an error
console.log(typeof secret); // undefined



// // 1️⃣ Arrow vs Regular Function: `this` Context
// // - Regular function: `this` depends on how the function is called.
// // - Arrow function: `this` is lexically bound — it uses `this` from its surrounding scope.

// const obj = {
//   name: "Rahul",
//   regularFunc: function () {
//     console.log(this.name); // 'this' refers to obj
//   },
//   arrowFunc: () => {
//     console.log(this.name); // 'this' refers to outer (global) scope
//   }
// };

// obj.regularFunc(); // Output: Rahul
// obj.arrowFunc();   // Output: undefined (or window.name in browser)


// // 2️⃣ Function Hoisting and TDZ (Temporal Dead Zone)
// // - Function declarations are hoisted — you can call them before they're defined.

// greet(); // ✅ Works
// function greet() {
//   console.log("Hello");
// }

// // - Function expressions / arrow functions using let/const are not hoisted — 
// // calling them before declaration causes a TDZ (Temporal Dead Zone) error.

// try {
//   sayHi(); // ❌ ReferenceError
// } catch (e) {
//   console.log("Error:", e.message);
// }

// const sayHi = () => console.log("Hi");


// // 3️⃣ Scope Chains and Closure Traps
// // - Scope chain: Functions look for variables in their own scope, then move outward.
// // - Closures: Inner functions remember variables from their outer function, 
// //   even after the outer function has returned.

// function outer() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = outer();
// counter(); // 1
// counter(); // 2

// // ⚠️ Trap: If used in loops without care (like var), all closures might reference the same variable.

// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log("Trap:", i); // prints 3, 3, 3
//   }, 100);
// }

// // ✅ Fixed version using let (block scoped)
// for (let j = 0; j < 3; j++) {
//   setTimeout(function () {
//     console.log("Fixed:", j); // prints 0, 1, 2
//   }, 100);
// }




// // 🔹 Closure:
// // A closure is formed when a function "remembers" the variables from its outer scope,
// // even after the outer function has finished execution.

// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log("Count:", count);
//   };
// }

// const counter = outer(); // closure is formed here
// counter(); // Count: 1
// counter(); // Count: 2

// // ✅ Closure remembers 'count' even though 'outer' has already returned



// // 🔹 Higher-Order Function (HOF):
// // A function that either:
// // 1. Takes another function as an argument
// // OR
// // 2. Returns a function

// function greetUser(name, callback) {
//   console.log("Hello", name);
//   callback(); // function passed as argument (callback)
// }

// function sayBye() {
//   console.log("Goodbye!");
// }

// greetUser("Rahul", sayBye); // greetUser is a HOF



//  * typeof function
//  *
//  * Example:
//  * function greet() {}
//  * console.log(typeof greet);
//  *
//  * Output:
//  * "function"
//  *
//  * --------------------------------------------------
//  * Important Points
//  *
//  * - Functions are callable objects
//  * - JavaScript gives functions a special typeof result
//  * - Internally, functions are objects