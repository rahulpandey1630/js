// Object literals and properties

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
