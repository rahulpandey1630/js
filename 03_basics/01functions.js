  // Function to print letters of a name
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()
// Output:
// H
// I
// T
// E
// S
// H

/* 
Important Points:
1. The `sayMyName` function is a **Function Declaration**.
2. It can be called **before or after** its definition because of **hoisting**.

sayHello(); // ✅ No error! This works due to hoisting.

function sayHello() {
    console.log("Hello, Rahul!");
}
Explanation: Even though sayHello() is called before the function sayHello() is defined, 
it works fine because JavaScript hoists the function declaration to the top internally.
3. It does not take any parameters or return any value.
*/

// Function Declaration Example
function addTwoNumbers(number1, number2) { //during function declaration are parameters
    return number1 + number2; // no statement will run after return statement
}
const result1 = addTwoNumbers(3, 5); // during function call are arguments
console.log("Result: ", result1); 
// Output: Result: 8

// Function Expression Example
const subtractTwoNumbers = function(number1, number2) {
    return number1 - number2;
}
const resultSubtraction = subtractTwoNumbers(10, 5);
console.log("Subtraction Result: ", resultSubtraction);
// Output: Subtraction Result: 5

// Arrow Function Example
const multiplyTwoNumbers = (number1, number2) => number1 * number2;
const resultMultiplication = multiplyTwoNumbers(4, 5);
console.log("Multiplication Result: ", resultMultiplication);
// Output: Multiplication Result: 20


// -------------------- Arrow Functions in JavaScript --------------------

// 🔹 What is an Arrow Function?
// Arrow functions provide a shorter syntax for writing functions.
// Best used for small, anonymous functions.

// 🔹 Syntax Comparison:

// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

// 🔹 One-liner Arrow Function (with implicit return)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // ✅ Output: 12

// 🔹 Arrow Function with One Parameter
const square = x => x * x;
console.log(square(5)); // ✅ Output: 25

// 🔹 Arrow Function with No Parameters
const greet = () => "Hello!";
console.log(greet()); // ✅ Output: "Hello!"

// 🔹 Arrow Function inside forEach (commonly used in array methods)
const nums = [1, 2, 3];
nums.forEach(num => {
  console.log(num * 2);
});
// ✅ Output:
// 2
// 4
// 6

// ⚠️ Note:
// Arrow functions DO NOT have their own 'this' context.
// They inherit 'this' from the surrounding (lexical) scope.
// So avoid arrow functions as methods inside objects if 'this' is needed.



/*
Key Points on Functions:
1. **Function Declaration** is hoisted.
2. **Function Expression** and **Arrow Functions** are not hoisted.
3. Functions can accept parameters and return values.
4. If no `return` is provided, the function returns `undefined`.
*/

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("Result: ", result);
// Output: Result: 8

// Function with Default Parameters
 // if no parameters provide then  sam used. even no default parameter provided then undefined printed at username
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage());
// Output: sam just logged in

console.log(loginUserMessage("Rahul"));
// Output: Rahul just logged in

/*
Important Points on Default Parameters:
1. If no value is passed for `username`, the default value "sam" is used.
2. If a value is passed, it overrides the default.
3. If a parameter is `undefined`, the default value is used.
*/

// Rest Parameters Example
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000));
// Output: [500, 2000] as 200 and 400 are val 1 and 2


// Define a function 'addAll' using rest parameters (...numbers)
// This allows us to pass any number of arguments to the function
function addAll(...numbers){
    // Initialize a variable 'total' to store the sum
    let total = 0;

    // Loop through each 'number' in the 'numbers' array
    for(let number of numbers){
        // Add each number to the total
        total = total + number;
    }

    // Return the final total
    return total;
}

// Call the function 'addAll' with arguments 4, 5, 4, 2, 10
const ans = addAll(4,5,4,2,10);

// Print the result to the console
console.log(ans);  // Output: 25

/*
Key Points on Rest Parameters:
1. **Rest Parameters** allow a function to accept an indefinite number of arguments as an array.
2. `val1` and `val2` are handled separately, and the rest of the values go into `num1`.
*/


// ✅ PARAMETER DESTRUCTURING IN JAVASCRIPT
// This is especially useful when working with objects, such as in React props.

// Defining an object named 'person'
const person = {
    firstName: "harshit",  // key-value pair: firstName
    gender: "male",        // key-value pair: gender
    age: 500               // key-value pair: age
}

// ❌ Traditional way of accessing object properties inside a function
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// ✅ Parameter destructuring method
function printDetails({firstName, gender, age}) {
    // The object is destructured directly in the function parameter
    // So, 'firstName', 'gender', and 'age' are extracted from the 'person' object

    console.log(firstName); // Output: "harshit"
    console.log(gender);    // Output: "male"
    console.log(age);       // Output: 500
}

// Calling the function with the 'person' object
printDetails(person);



// Handling Objects as Function Parameters
const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
// Output: Username is hitesh and price is 199

//another way passing object directly 
handleObject({
    username: "sam",
    price: 399
});
// Output: Username is sam and price is 399

/*
Key Points on Objects as Function Parameters:
1. Functions can accept objects as parameters.
2. Object properties can be accessed using dot notation.
3. You can pass an entire object or create one directly in the function call.
*/

// Handling Arrays as Function Parameters
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
// Output: 400

console.log(returnSecondValue([200, 400, 500, 1000]));
// Output: 400

/*
Key Points on Arrays as Function Parameters:
1. Functions can accept arrays and access their elements using index notation.
2. Arrays can be passed directly in the function call or via a variable.
*/




// ✅ A **callback function** is a function that is **passed as an argument** to another function,
//    and is then **executed inside that function**.
//    It's commonly used when you want one function to "call back" another function after it finishes some work.
//    This is especially useful in asynchronous programming (e.g., in setTimeout, fetch, etc.)

// This is a simple function that takes a `name` and logs some messages.
// We'll use this as our callback function.
function myFunc2(name){
    console.log("inside my func 2");                 // This line runs when the callback is executed
    console.log(`your name is ${name}`);             // Prints the name passed by the caller
}

// This function accepts another function as its argument — this is how we accept a callback.
// The `callback` parameter is expected to be a function.
function myFunc(callback){
    console.log("hello there I am a func and I can.."); // A message before calling the callback
    callback("harshit");                                  // We call the passed-in function (callback) and pass "harshit" as argument
}

// Now we call `myFunc` and pass `myFunc2` as an argument.
// This means: inside `myFunc`, it will run `myFunc2("harshit")`
myFunc(myFunc2);
