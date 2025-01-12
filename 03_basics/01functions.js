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

/*
Key Points on Rest Parameters:
1. **Rest Parameters** allow a function to accept an indefinite number of arguments as an array.
2. `val1` and `val2` are handled separately, and the rest of the values go into `num1`.
*/

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
