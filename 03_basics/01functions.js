
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

// sam is default value in case no value is passed. if any value passed thern it will override it. if no default case and no values provided then it will be undefined
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// The ...rest syntax allows a function to accept an indefinite number of arguments as an array.
// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000)) WILL RETURN ARRAY OF ALL THESE VALUES

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)) WILL RETURN 500 AND 1000 IN ARRAY FORM AND 200 AND 400 WILL BE INTIALISED TO VAL1 AND VAL2
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
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
// Functions can accept arrays as parameters and access their elements using index notation.
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));