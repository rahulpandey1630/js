// Function definition that multiplies a number by 5
function multipleBy5(num){
    return num * 5; // Returns the result of num multiplied by 5
}

// Adding a property 'power' to the function (Functions in JavaScript are objects)
multipleBy5.power = 2;

// Calling the function with 5 as an argument
console.log(multipleBy5(5)); // Output: 25

// Accessing the custom property 'power' of the function
console.log(multipleBy5.power); // Output: 2

// Checking the prototype property of the function
console.log(multipleBy5.prototype); // Output: {} (An empty object, as no prototype methods were added)

// Constructor function to create user objects
function createUser(username, score){
    this.username = username; // Assigns the username to the new object
    this.score = score; // Assigns the score to the new object
}

// Adding a method to the prototype of createUser to increment the score
createUser.prototype.increment = function(){
    this.score++; // Increases the score by 1
};

// Adding another method to print the score
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`); // Logs the score with a message
};

// Creating an instance of createUser using 'new' keyword
const chai = new createUser("chai", 25); 

// Incorrect function call without 'new', it will not work as expected
const tea = createUser("tea", 250); // This will return undefined instead of creating an object

// Calling the printMe method on the 'chai' object
chai.printMe(); // Output: price is 25

/*

functions,array,string all are objects ie it has all properties of object.

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is 
bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive 
value (object, array, function, etc.), the newly created object is returned.

*/

/* --------------------------- SUMMARY ---------------------------

1. Functions in JavaScript are objects, so we can add properties to them.
2. The 'prototype' property is used to define methods shared among instances.
3. The 'new' keyword is required when creating objects using a constructor function.
4. Calling a function without 'new' in a constructor function does not return an object.
5. Prototype methods allow efficient memory usage by sharing methods among instances.

--------------------------- DEFINITIONS ---------------------------

- **Prototype**: An object associated with functions to enable inheritance.
- **Constructor Function**: A function used to create objects using the 'new' keyword.
- **new Keyword**: Creates a new object, binds 'this' to it, links it to the prototype, and returns it.

*/ 
