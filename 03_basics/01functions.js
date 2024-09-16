
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

/*1. Functions can be defined in several ways in JavaScript:
   a. **Function Declaration**: Defined using the `function` keyword. Can be called before it's defined due to hoisting.
   b. **Function Expression**: Function is assigned to a variable. Not hoisted, so must be defined before calling.
   c. **Arrow Function**: A shorter syntax for writing functions, does not have its own `this` context.

Examples:
*/

// a. Function Declaration
function addTwoNumbers(number1, number2){
    return number1 + number2;
}
const result1 = addTwoNumbers(3, 5);
// console.log("Result: ", result);

// b. Function Expression
const subtractTwoNumbers = function(number1, number2) {
    return number1 - number2;
}
const resultSubtraction = subtractTwoNumbers(10, 5);
// console.log("Subtraction Result: ", resultSubtraction);

// c. Arrow Function (ES6+)
const multiplyTwoNumbers = (number1, number2) => number1 * number2;
const resultMultiplication = multiplyTwoNumbers(4, 5);
// console.log("Multiplication Result: ", resultMultiplication);

/* 
Important Notes:
1. Function is a block of reusable code designed to perform a specific task.
2. Functions can take parameters (inputs) and can return a value.
3. If no return statement is provided, the function returns `undefined` by default.
4. In the commented example below, the function does not return anything, so the `sum` will be `undefined`:
   
   const sum = addTwoNumbers(3, 5)
   console.log(sum) // Outputs `undefined`
*/

function addTwoNumbers(number1, number2){
    // Adding the two parameters
    return number1 + number2 
    // No code after return statement is executed.
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

/*
More Notes on Parameters and Default Values:
1. Functions can have default parameters, which are used if no argument is passed when the function is called.
2. In the function `loginUserMessage`, the parameter `username` has a default value of "sam".
3. If no value is passed during function call, "sam" will be used. Otherwise, the passed value will override the default.
4. If there is no default value and no argument is passed, the parameter will be `undefined`.
5. In this example, if the username is not provided or if it is empty, the function will log a message asking the user to enter a username.
*/

function loginUserMessage(username = "sam"){
    // Check if username is not provided (falsey values)
    if(!username){
        console.log("Please enter a username");
        return; // Stops further execution if no username is provided
    }
    // If username is provided, return the login message
    return `${username} just logged in`;
}


 
// The ...rest syntax allows a function to accept an indefinite number of arguments as an array.
//depends on usecase whether it is spread operator or rest operator
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000)) WILL RETURN ARRAY OF ALL THESE VALUES

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

/* 
Explanation:

1. The function `calculateCartPrice` uses **rest parameters** (indicated by `...num1`).
   - Rest parameters allow a function to accept an indefinite number of arguments as an array.
   - In this example, the first two parameters `val1` and `val2` are handled separately, and any additional arguments passed to the function are collected into the `num1` array.

2. When you call the function with more than two arguments, everything after the first two arguments will be captured in the `num1` array.

Example:

const result = calculateCartPrice(10, 20, 30, 40, 50);
console.log(result); // Outputs [30, 40, 50]
*/

// Functions can accept objects as parameters and access their properties.
// Object properties can be accessed using dot notation.

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) 
//can pass direct object also
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
// Functions can accept arrays as parameters and access their elements using index notation.
function returnSecondValue(getArray){
    return getArray[1]
}

//other way
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));