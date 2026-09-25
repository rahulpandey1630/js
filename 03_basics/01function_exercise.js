/* ===============================================================================
                        JAVASCRIPT FUNCTIONS – CONCISE GUIDE
===============================================================================

Functions are callable objects. typeof function returns "function".
Functions can take functions as arguments and return functions (higher-order).


===============================================================================
                    BASIC FUNCTION EXAMPLES
===============================================================================

BMI CALCULATOR FUNCTION:
function calculateBMI(weightKg, heightMeters) {
    let bmi = weightKg / (heightMeters * heightMeters);
    return bmi.toFixed(2); // returns string rounded to 2 decimals
}

let weight = 70;
let height = 1.75;
let bmi = calculateBMI(weight, height);
console.log("Your BMI is:", bmi); // Your BMI is: 22.86


===============================================================================
                    HIGHER-ORDER FUNCTIONS
===============================================================================

Definition: Function that either:
1. Takes another function as argument, OR
2. Returns a function

EXAMPLE 1: Discount Calculator (returns function)
function createDiscountCalculator(discountRate) {
    // discountRate as decimal (e.g., 0.2 for 20%)
    
    return function(price) {
        let discountedPrice = price - (price * discountRate);
        return discountedPrice.toFixed(2);
    };
}

Create specific functions:
const tenPercentOff = createDiscountCalculator(0.10);
const twentyPercentOff = createDiscountCalculator(0.20);

Use the functions:
console.log("10% off 500:", tenPercentOff(500)); // 450.00
console.log("20% off 500:", twentyPercentOff(500)); // 400.00

EXAMPLE 2: Function taking callback
function greetUser(name, callback) {
    console.log("Hello", name);
    callback(); // call the function passed as argument
}

function sayBye() {
    console.log("Goodbye!");
}

greetUser("Rahul", sayBye); // greetUser is a HOF
// Output: Hello Rahul, Goodbye!


===============================================================================
                    CLOSURES
===============================================================================

Definition: A function "remembers" variables from its outer scope,
even after the outer function has finished execution.

CLOSURE EXAMPLE: Counter
function createCounter() {
    let count = 0; // private variable (not accessible from outside)
    
    return function() {
        count++; // increments private variable
        return count;
    };
}

Create counter instance:
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

✅ Closure remembers 'count' even though createCounter has returned

KEY POINTS:
✅ Inner function has access to outer function variables
✅ Outer function's execution completes, but variables persist
✅ Each closure maintains its own independent copy of variables
✅ Closures create private variables


CLOSURE WITH SCOPE CHAIN:
function outer() {
    let count = 0;
    
    return function() {
        count++;
        console.log("Count:", count);
    };
}

const counter = outer(); // closure formed here
counter(); // Count: 1
counter(); // Count: 2


MULTIPLE INDEPENDENT CLOSURES:
function createCounter() {
    let count = 0;
    return () => ++count;
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (independent)


===============================================================================
                    CLOSURE TRAP: var in LOOPS
===============================================================================

❌ PROBLEM: Using var in loops
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("Trap:", i); // prints 3, 3, 3
    }, 100);
}

Why? var is function-scoped, not block-scoped.
All closures reference the same 'i', which equals 3 after loop.

✅ SOLUTION 1: Use let (block-scoped)
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log("Fixed:", j); // prints 0, 1, 2
    }, 100);
}

✅ SOLUTION 2: Create closure in IIFE
for (var i = 0; i < 3; i++) {
    (function(val) {
        setTimeout(function() {
            console.log("Fixed:", val); // prints 0, 1, 2
        }, 100);
    })(i); // pass i to IIFE
}


===============================================================================
                    IIFE (Immediately Invoked Function Expression)
===============================================================================

Definition: Function defined and executed immediately without calling it separately.
Useful for: Creating isolated scope, avoiding global variables

BASIC IIFE:
(function() {
    console.log("Runs immediately");
})(); // () at end calls the function

WITH PARAMETERS:
(function(name) {
    console.log("Hello", name);
})("Rahul"); // Output: Hello Rahul

CREATING PRIVATE VARIABLES:
(function() {
    let secret = "This is private";
    console.log("Inside IIFE:", secret); // This is private
})();

// Trying to access 'secret' outside
console.log(typeof secret); // undefined

USING var SAFELY IN IIFE:
for (var i = 0; i < 3; i++) {
    (function(val) {
        console.log(val); // 0, 1, 2
    })(i);
}


===============================================================================
                    ARROW FUNCTIONS vs REGULAR FUNCTIONS
===============================================================================

SYNTAX DIFFERENCES:
Regular:
function add(a, b) {
    return a + b;
}

Arrow:
const add = (a, b) => {
    return a + b;
};

Arrow (one-liner):
const add = (a, b) => a + b; // implicit return

Single parameter:
const square = x => x * x;

No parameters:
const greet = () => "Hello";


'this' CONTEXT – KEY DIFFERENCE:

REGULAR FUNCTION: 'this' depends on how function is called
const obj = {
    name: "Rahul",
    regularFunc: function() {
        console.log(this.name); // 'this' = obj
    }
};

obj.regularFunc(); // Output: Rahul

ARROW FUNCTION: 'this' is lexically bound (from surrounding scope)
const obj = {
    name: "Rahul",
    arrowFunc: () => {
        console.log(this.name); // 'this' = outer (global) scope
    }
};

obj.arrowFunc(); // Output: undefined (no name in global)

WHEN TO USE:
✅ Arrow functions: Callbacks, map/filter, one-liners
✅ Regular functions: Methods, need 'this' context, need 'arguments' object


===============================================================================
                    HOISTING & TEMPORAL DEAD ZONE (TDZ)
===============================================================================

FUNCTION HOISTING:

Function declarations are hoisted – can call before defining:
greet(); // ✅ Works

function greet() {
    console.log("Hello");
}

Hoisting moves declarations to top of scope

FUNCTION EXPRESSIONS NOT HOISTED:

Using const/let:
sayHi(); // ❌ ReferenceError (TDZ – Temporal Dead Zone)

const sayHi = () => console.log("Hi");

Using var:
sayHi(); // ❌ undefined (hoisted but not initialized)

var sayHi = () => console.log("Hi");

TDZ (Temporal Dead Zone):
- Starts at block scope beginning
- Ends when variable declaration reached
- Any access before declaration = ReferenceError

HOISTING ORDER:
1. Function declarations (full, callable)
2. var declarations (undefined)
3. let/const declarations (TDZ)


===============================================================================
                    SCOPE CHAINS & CLOSURES
===============================================================================

SCOPE CHAIN: How variables are looked up

function outer() {
    let outerVar = "outer";
    
    function middle() {
        let middleVar = "middle";
        
        function inner() {
            let innerVar = "inner";
            
            console.log(innerVar); // inner scope
            console.log(middleVar); // middle scope
            console.log(outerVar); // outer scope
        }
        
        inner();
    }
    
    middle();
}

outer();

Variables looked up: own scope → parent scope → parent's parent → global

CLOSURE TRAP: Loop variable reference
❌ All iterations capture same variable:
let funcs = [];
for (var i = 0; i < 3; i++) {
    funcs.push(function() { return i; });
}

console.log(funcs[0]()); // 3
console.log(funcs[1]()); // 3
console.log(funcs[2]()); // 3

✅ Fixed with let (block scope):
let funcs = [];
for (let i = 0; i < 3; i++) {
    funcs.push(function() { return i; });
}

console.log(funcs[0]()); // 0
console.log(funcs[1]()); // 1
console.log(funcs[2]()); // 2


===============================================================================
                    TYPEOF FOR FUNCTIONS
===============================================================================

typeof function:
function greet() {}
console.log(typeof greet); // "function"

Arrow function:
const add = (a, b) => a + b;
console.log(typeof add); // "function"

Anonymous function:
const func = function() {};
console.log(typeof func); // "function"

KEY POINT:
✅ Functions are objects in JavaScript
✅ typeof gives special result "function"
✅ All function types return "function"


===============================================================================
                    QUICK REFERENCE
===============================================================================

FUNCTION TYPES:
- Function declaration: function name() { }
- Function expression: const f = function() { }
- Arrow function: const f = () => { }
- IIFE: (function() { })()

HIGHER-ORDER:
- Takes function as argument: func(callback)
- Returns function: func() { return function }
- Closures: returns function that remembers outer variables

CLOSURES:
- Inner function remembers outer variables
- Each closure independent (own copy)
- Useful for: private variables, callbacks, factories

IIFE:
- (function() { })() → runs immediately
- Create isolated scope
- Avoid global pollution
- (function(param) { })(arg) → with parameters

ARROW vs REGULAR:
- Arrow: implicit return, no 'this', no 'arguments'
- Regular: need explicit return, 'this' bound by call, has 'arguments'
- Use arrow for callbacks/methods
- Use regular when need 'this' or 'arguments'

HOISTING:
- Function declarations: fully hoisted (callable)
- Function expressions: not hoisted (TDZ with let/const)
- var: hoisted but undefined
- let/const: TDZ error if accessed before declaration

SCOPE CHAIN:
- Variable lookup: own scope → parent → parent's parent → global
- Inner functions access outer variables
- Outer functions cannot access inner variables

CLOSURE TRAP:
- var in loop: all closures reference same variable
- Solution: use let (block-scoped)
- Or: wrap in IIFE to create new scope

COMMON PATTERNS:
- Counter: createCounter() returns function
- Discount: createDiscountFn(rate) returns function
- Callback: function(callback) { ... callback() }
- Decorator: function that wraps another function

IMPORTANT NOTES:
✅ typeof function returns "function"
✅ Functions are first-class objects
✅ Can store in variables, pass as args, return from functions
✅ Closures are powerful for encapsulation
✅ Let/const prevent loop variable capture
✅ Arrow functions great for callbacks
✅ IIFE useful for scope isolation

===============================================================================
*/