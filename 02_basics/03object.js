// Object literals and properties
//object when declared with constructor then singleton and when declared with literals then not singleton.
//An object literal is a list of name:value pairs inside curly braces {}.
//Objects are mutable: They are addressed by reference, not by value.
//In JavaScript, objects can be created in two main ways: using object literals or constructors(THEN SINGLETON).
//USING LITERALS
//Object Literals: Each time you declare an object using literals ({}), a new, unique object is created,
// meaning they are not singletons.
let obj1 = { name: "John" };
let obj2 = { name: "John" };

console.log(obj1 === obj2);  // Output: false (because these are two distinct objects)

// Define a Symbol for a unique property key

const mySym = Symbol("key1");

// Define an object using object literal notation
const JsUser = {
    name: "Hitesh", // String property
    "full name": "Hitesh Choudhary", // String property with a space in the key
    [mySym]: "mykey1", // Symbol property for a unique key
    age: 18, // Number property
    location: "Jaipur", // String property
    email: "hitesh@google.com", // String property
    isLoggedIn: false, // Boolean property
    lastLoginDays: ["Monday", "Saturday"], // Array property
}

// Accessing object properties
//keys are treated as string
console.log(JsUser.email); // Outputs: "hitesh@google.com"
console.log(JsUser["email"]); // Outputs: "hitesh@google.com"
console.log(JsUser["full name"]); // Outputs: "Hitesh Choudhary"
console.log(JsUser[mySym]); // Outputs: "mykey1"

// Updating object properties
JsUser.email = "hitesh@chatgpt.com";

// Freezing the object to prevent modifications
// Object.freeze(JsUser);

// Attempt to update a property on a frozen object (will not change the property)
// JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser.email); // Outputs: "hitesh@chatgpt.com" if frozen

//This example creates an empty JavaScript object, and then adds 4 properties:
const person = {};
// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// Adding methods to the object
JsUser.greeting = function() {
    console.log("Hello JS user");
}

// Adding methods that use the object's properties
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

// Calling the methods
console.log(JsUser.greeting()); // Outputs: "Hello JS user"
console.log(JsUser.greetingTwo()); // Outputs: "Hello JS user, Hitesh"

// Important Notes:
// - Using Symbols as object property keys ensures they are unique and not accidentally overwritten.
// - `Object.freeze()` makes the object immutable, preventing any changes to its properties and methods.
// - Adding methods to an object allows encapsulating behavior related to the object, making it more functional and cohesive.
// - Using `this` inside object methods refers to the object itself, enabling access to its properties.
