/* 
===============================================================================
            JAVASCRIPT FUNCTIONS – DECLARATIONS, PARAMETERS & CALLBACKS
===============================================================================

===============================================================================
                    FUNCTION DECLARATION
===============================================================================

Simple function (no parameters, no return):
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName();
// Output: H, I, T, E, S, H

With parameters and return:
function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("Result:", result); // Result: 8

HOISTING:
Function declarations are hoisted – can call before defining:

sayHello(); // ✅ Works (hoisted)

function sayHello() {
    console.log("Hello, Rahul!");
}

KEY POINTS:
✅ Called before or after definition (hoisted)
✅ Use 'return' to send value back (nothing after return runs)
✅ No return = undefined
✅ Parameters at declaration, Arguments at call


===============================================================================
                    FUNCTION EXPRESSION
===============================================================================

Store function in variable:
const subtractTwoNumbers = function(number1, number2) {
    return number1 - number2;
};

const resultSubtraction = subtractTwoNumbers(10, 5);
console.log("Subtraction Result:", resultSubtraction); // Subtraction Result: 5

NOT HOISTED:
subtractTwoNumbers(10, 5); // ❌ ReferenceError (not hoisted)

const subtractTwoNumbers = function(number1, number2) {
    return number1 - number2;
};

KEY POINTS:
✅ Stored in variable
✅ NOT hoisted (TDZ with let/const)
✅ Can be anonymous


===============================================================================
                    ARROW FUNCTIONS
===============================================================================

SYNTAX COMPARISON:

Regular function:
function add(a, b) {
    return a + b;
}

Arrow function (explicit return):
const addArrow = (a, b) => {
    return a + b;
};

One-liner arrow (implicit return):
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12

SINGLE PARAMETER (no parentheses):
const square = x => x * x;
console.log(square(5)); // 25

NO PARAMETERS (empty parentheses):
const greet = () => "Hello!";
console.log(greet()); // Hello!

WITH ARRAY METHODS (common pattern):
const nums = [1, 2, 3];
nums.forEach(num => console.log(num * 2));
// Output: 2, 4, 6

HOISTING:
NOT hoisted (like function expressions)

add(2, 3); // ❌ ReferenceError

const add = (a, b) => a + b;

'this' CONTEXT:
⚠️ Arrow functions DO NOT have their own 'this'
   They inherit 'this' from surrounding (lexical) scope

❌ Avoid as object methods if 'this' needed:
const obj = {
    value: 10,
    getValue: () => this.value // Wrong! 'this' = global scope
};

✅ Use regular function for 'this':
const obj = {
    value: 10,
    getValue: function() { return this.value; } // Correct
};

KEY POINTS:
✅ Shorter syntax than regular functions
✅ Implicit return for one-liners
✅ NOT hoisted (TDZ with const/let)
✅ No 'this' context (lexical binding)
✅ Great for callbacks, array methods
✅ Avoid for object methods needing 'this'


===============================================================================
                    DEFAULT PARAMETERS
===============================================================================

Default value used if no argument passed:
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage()); // sam just logged in
console.log(loginUserMessage("Rahul")); // Rahul just logged in

BEHAVIOR:
✅ Argument passed → overrides default
✅ No argument → uses default
✅ undefined passed → uses default
✅ If no default, undefined parameter remains undefined

Multiple defaults:
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet()); // Hello, Guest!
console.log(greet("Rahul")); // Hello, Rahul!
console.log(greet("Rahul", "Hi")); // Hi, Rahul!


===============================================================================
                    REST PARAMETERS (...)
===============================================================================

Accept any number of arguments as array:
function calculateCartPrice(val1, val2, ...num1) {
    return num1; // returns rest as array
}

console.log(calculateCartPrice(200, 400, 500, 2000));
// Output: [500, 2000]

SUM ALL ARGUMENTS:
function addAll(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}

const ans = addAll(4, 5, 4, 2, 10);
console.log(ans); // Output: 25

WITH REDUCE:
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6

KEY POINTS:
✅ '...' gathers arguments into array
✅ Must be last parameter
✅ Collects all remaining arguments
✅ Useful for variable arguments
✅ Parameter becomes array


===============================================================================
                    SPREAD vs REST OPERATOR
===============================================================================

BOTH use '...' but different purposes:

REST OPERATOR (...):
Used in FUNCTION PARAMETERS
Gathers multiple arguments into SINGLE ARRAY

function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3); // nums = [1, 2, 3]

SPREAD OPERATOR (...):
Used in ARRAYS and OBJECTS
Expands/unpacks elements FROM array/object

Spread in array:
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

Spread in object:
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

REST: Gathering values INTO array
SPREAD: Spreading values FROM array/object


===============================================================================
                    PARAMETER DESTRUCTURING
===============================================================================

DESTRUCTURING OBJECTS IN PARAMETERS:

Traditional way:
function printDetails(obj) {
    console.log(obj.firstName);
    console.log(obj.gender);
}

Parameter destructuring (modern):
function printDetails({ firstName, gender, age }) {
    console.log(firstName); // "harshit"
    console.log(gender); // "male"
    console.log(age); // 500
}

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
};

printDetails(person);

PRACTICAL EXAMPLE:
const user = {
    username: "hitesh",
    price: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
// Output: Username is hitesh and price is 199

// Or pass object directly:
handleObject({
    username: "sam",
    price: 399
});
// Output: Username is sam and price is 399


DESTRUCTURING ARRAYS IN PARAMETERS:
function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue([200, 400, 500, 1000]));
// Output: 400

Better with destructuring:
function returnSecondValue([, second]) {
    return second;
}

console.log(returnSecondValue([200, 400, 500, 1000])); // 400


===============================================================================
                    CALLBACK FUNCTIONS
===============================================================================

Definition: Function passed as argument to another function,
executed inside that function.

BASIC EXAMPLE:
function myFunc2(name) {
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback) {
    console.log("hello there I am a func and I can..");
    callback("harshit"); // Execute callback with argument
}

myFunc(myFunc2);
// Output:
// hello there I am a func and I can..
// inside my func 2
// your name is harshit

CALLBACK AS ARROW FUNCTION:
function myFunc(callback) {
    console.log("Starting task");
    callback("data");
}

myFunc((data) => {
    console.log("Callback received:", data);
});
// Output:
// Starting task
// Callback received: data

CALLBACK IN ARRAY METHODS:
const nums = [1, 2, 3];
nums.forEach((num) => {
    console.log(num * 2);
});
// Output: 2, 4, 6

Filter with callback:
const even = nums.filter((num) => num % 2 === 0);

Map with callback:
const doubled = nums.map((num) => num * 2);

CALLBACK IN SETTIMEOUT:
setTimeout(() => {
    console.log("After 1 second");
}, 1000);

KEY POINTS:
✅ Function passed as argument
✅ Executed inside another function
✅ Often used for async operations
✅ Common in setTimeout, fetch, array methods
✅ Arrow functions ideal for callbacks


===============================================================================
                    QUICK REFERENCE
===============================================================================

DECLARATION TYPES:
- Function declaration: function name() { } (hoisted)
- Function expression: const f = function() { } (not hoisted)
- Arrow function: const f = () => { } (not hoisted)

PARAMETERS:
- Regular: function(a, b) { }
- Default: function(a = 5, b = 10) { }
- Rest: function(a, b, ...rest) { }
- Destructured: function({ name, age }) { }

RETURN:
- explicit: return value
- implicit arrow: const f = (a, b) => a + b
- no return: returns undefined

ARROW SYNTAX:
- Multiple params: (a, b) => a + b
- Single param: x => x * 2
- No params: () => "hi"
- Multi-line: (a, b) => { const sum = a + b; return sum; }

COMMON PATTERNS:
- Callback: func(callback) { callback() }
- Array method: arr.map(x => x * 2)
- Default params: function(name = "Guest")
- Rest params: function(...args)
- Object param: function({ name, age })
- Array destructuring: function([first, second])

HOISTING:
- Function declarations: fully hoisted
- Function expressions: not hoisted (TDZ)
- Arrow functions: not hoisted (TDZ)

'this' CONTEXT:
- Regular function: 'this' = call context
- Arrow function: 'this' = lexical scope
- Use regular for object methods
- Use arrow for callbacks

COMMON CALLBACKS:
- setTimeout(callback, delay)
- array.forEach(callback)
- array.map(callback)
- array.filter(callback)
- fetch(url).then(callback)

KEY POINTS:
✅ Functions are first-class objects
✅ Can pass functions as arguments
✅ Can return functions
✅ Closures capture outer scope
✅ Callbacks enable async patterns
✅ Destructuring simplifies parameter access
✅ Default parameters prevent undefined
✅ Rest params handle variable arguments

===============================================================================
*/