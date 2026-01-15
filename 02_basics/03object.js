// ✅ Object Literals and Properties

// 🔸 An object when declared with constructor → singleton.
// 🔸 An object when declared with literals → NOT singleton.

// 🔹 An object literal is a list of name:value pairs inside curly braces {}.
// 🔹 Objects are mutable: They are addressed by reference, not by value.

// In JavaScript, objects can be created in two main ways:
// 1. Using object literals → new unique object each time (not singleton)
// 2. Using constructors → can create a singleton pattern

// 🔹 Using Object Literals:
let obj1 = { name: "John" };
let obj2 = { name: "John" };

console.log(obj1 === obj2);  // false (two distinct objects)


// ✅ Define a Symbol for a unique property key
const mySym = Symbol("key1");


// ✅ Define an object using object literal notation
const JsUser = {
    name: "Hitesh",                     // String property
    "full name": "Hitesh Choudhary",   // Property with space in key
    [mySym]: "mykey1",                 // Symbol key for uniqueness
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};  


// ✅ Accessing Object Properties
console.log(JsUser.email);           // hitesh@google.com
console.log(JsUser["email"]);        // hitesh@google.com
console.log(JsUser["full name"]);    // Hitesh Choudhary
console.log(JsUser[mySym]);          // mykey1

// ✅ Updating Object Properties
JsUser.email = "hitesh@chatgpt.com";
console.log(JsUser.email); // hitesh@chatgpt.com


// ✅ Freezing the object to prevent modifications
// Object.freeze(JsUser);

// Attempt to update a property on a frozen object
// JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser.email); // hitesh@chatgpt.com (if frozen)


// ✅ Creating an empty object and adding properties
const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


// ✅ Creating an object using constructor
const person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";


// ✅ Adding methods to the object
JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

// Calling the methods
console.log(JsUser.greeting());     // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Hitesh


// ✅ Important Notes:
// - Object literals: Every {} creates a new object (not singleton).
// - Using Symbols as property keys ensures uniqueness and avoids collisions.
// - Object.freeze(obj) makes the object immutable.
// - Adding methods helps encapsulate behavior inside the object.
// - Use `this` in methods to access the current object’s properties.





// ✅ Singleton vs Not Singleton in JavaScript

// 🔹 Singleton:
// - Ensures only ONE instance of an object exists.
// - Created in a controlled way, usually using constructors or classes.
// - Shared/reused across code.

// const singleton = new Object(); // singleton instance
// const shared1 = singleton;
// const shared2 = singleton;

// console.log(shared1 === shared2); // ✅ true — both refer to the same object

// ✔️ Use cases:
// - Configuration settings
// - Database connection
// - Centralized app state


// 🔹 Not Singleton:
// - Each time you create an object using {}, a NEW object is made.
// - Even if contents are same, they are separate in memory.

// let obj1 = { name: "Rahul" };
// let obj2 = { name: "Rahul" };

//console.log(obj1 === obj2); // ❌ false — different objects

// ❌ Not reused — each literal creates a fresh copy

// 🧠 Think of it like:
// - Singleton: everyone drinks from the same water bottle
// - Not Singleton: everyone gets their own new bottle


// 🔁 Summary Table:
/*
| Term           | Meaning                           | Example                |
|----------------|-----------------------------------|------------------------|
| Singleton      | Only one instance exists          | const x = new Object();|
| Not Singleton  | New instance every time           | const x = {};          |
*/




//youtube 



// ✅ Key-Value Structure
// Objects store data in key-value pairs
const user = { name: "Rahul", age: 25 };


// ✅ Dot vs Bracket Notation
console.log(user.name);        // Dot → Rahul
console.log(user["age"]);      // Bracket → 25

// Bracket is useful when:
// - Key has space
// - Key is dynamic
let key = "name";
console.log(user[key]);        // Dynamic access


// ✅ Nesting and Deep Access
const deepUser = {
  name: "Rahul",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

console.log(deepUser.address.city); // Deep access → Delhi


// ✅ Object Destructuring
const { name, age } = user;
console.log(name, age); // Rahul 25


// ✅ Looping: for-in, Object.keys(), Object.entries()
const profile = { lang: "JS", level: "Pro" };

// for-in: loops keys
for (let key in profile) {
  console.log(key, profile[key]); // lang JS, level Pro
}

// Object.keys(): returns array of keys
Object.keys(profile).forEach(k => console.log(k));

// Object.entries(): key-value pairs as arrays
for (let [k, v] of Object.entries(profile)) {
  console.log(`${k}: ${v}`);
}


// ✅ Copying Objects

// 🔹 Spread (shallow copy)
const copied1 = { ...user };

// // 🔹 Object.assign (shallow copy)
// const copied2 = Object.assign({}, user);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3 };

// // Add an extra key-value directly in the assign
// const result = Object.assign({}, obj1, obj2, { d: 4 });

// console.log(result);
// // ✅ Output: { a: 1, b: 2, c: 3, d: 4 }

// ✅ Why Deep Clone is Needed in JavaScript

// When you copy an object using spread or Object.assign(), it creates a shallow copy.
// That means nested objects inside still point to the original memory reference.

// 🔥 Problem: Shallow Copy (nested objects stay linked)

// const original = {
//   name: "Rahul",
//   address: {
//     city: "Delhi"
//   }
// };

// Shallow copy using spread operator
const copy = { ...original };

// Modify the nested object in the copied one
copy.address.city = "Mumbai";

// ❌ This change reflects in original as well because 'address' is still linked
console.log(original.address.city); // Output: "Mumbai"

// ⚠️ Even though we copied using spread, only top-level was cloned.
// Nested 'address' is still passed by reference.

// ✅ Solution: Deep Clone (break the reference)

const original2 = {
  name: "Rahul",
  address: {
    city: "Delhi"
  }
};

// ✅ Deep clone using structuredClone (modern, safe)
const deepCopy = structuredClone(original2);
deepCopy.address.city = "Mumbai";

console.log(original2.address.city); // ✅ Output: "Delhi"

// ✅ Other Deep Clone method — JSON (works for simple objects only)
const jsonClone = JSON.parse(JSON.stringify(original2));
jsonClone.address.city = "Bangalore";

console.log(original2.address.city); // ✅ Output: "Delhi"

// ⚠️ Caveat: JSON method doesn't support functions, undefined, Date, Symbol, etc.

// 📌 Summary:
// Copy Method               | Copies Nested? | Safe for Complex Objects
// ---------------------------------------------------------------
// Spread { ...obj }         | ❌ No           | ❌ No
// Object.assign()           | ❌ No           | ❌ No
// structuredClone()         | ✅ Yes          | ✅ Yes (Best modern approach)
// JSON.stringify/parse      | ✅ Yes          | ⚠️ No (loses special types)

// ✅ Use deep cloning when:
// - Your object has nested structures (objects/arrays inside objects)
// - You want to avoid affecting the original when modifying the copy




// ✅ JSON.parse(JSON.stringify(...)) for Deep Cloning in JavaScript

// 🔹 What does this line do?
const jsonClone = JSON.parse(JSON.stringify(originalObj));

// Step-by-step:
// 1. JSON.stringify(originalObj) → converts the object to a JSON string
//    Example: { name: "Rahul", details: { city: "Delhi" } }
//    becomes → '{"name":"Rahul","details":{"city":"Delhi"}}'

// 2. JSON.parse(...) → converts the JSON string back into a brand-new object
//    Now jsonClone is a deep copy — no reference links to originalObj

// ✅ Why use this?
// It breaks all references, making sure nested objects or arrays are truly cloned
// Useful when you want to avoid changing the original object accidentally

// 🔁 Example:
const originalObj = {
  name: "Rahul",
  details: {
    city: "Delhi"
  },
  greet: () => "Hi",           // ⚠️ Will be lost in JSON method
  id: undefined,               // ⚠️ Will be removed
  [Symbol("token")]: "abc123"  // ⚠️ Will be removed
};

const deepCopy = JSON.parse(JSON.stringify(originalObj));

deepCopy.details.city = "Mumbai";

console.log(originalObj.details.city); // ✅ Output: "Delhi"
console.log(deepCopy.details.city);    // ✅ Output: "Mumbai"

// 🔴 Limitations of JSON deep clone:
// - ❌ Functions are lost
// - ❌ undefined is removed
// - ❌ Symbol properties are removed
// - ❌ Special types (Date, Map, Set, etc.) become plain or get lost
// - ❌ Prototype chain (e.g., class methods) is not preserved

// ✅ When to use it:
// - For simple data: plain objects, arrays, strings, numbers, booleans
// - When you need a quick deep clone and don't care about special types

// ❗ Don't use it when your object contains:
//   ➤ methods (functions), dates, maps, sets, undefined, or symbols

// ✅ Alternative: structuredClone() or libraries like Lodash _.cloneDeep() 





// ✅ Optional Chaining (?.)
// Avoids error if property is missing
console.log(deepUser?.address?.pin); // 110001
console.log(deepUser?.contact?.email); // undefined (no error)



// ✅ Computed Properties
let dynamicKey = "score";
const student = {
  [dynamicKey]: 95 // same as student.score = 95
};
console.log(student.score); // 95


// ⚠️ Common Confusion: Reference Copy vs Deep Clone

// 🔹 Reference copy — changes affect original
let original = { hobby: "coding" };
let refCopy = original;
refCopy.hobby = "gaming";

console.log(original.hobby); // "gaming" — same reference

// 🔹 Deep clone — changes don’t affect original
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.hobby = "music";

console.log(original.hobby); // "gaming"
console.log(deepCopy.hobby); // "music"









// ✅ JavaScript Object Key Rules — Notes

// In JavaScript, object keys can **only** be:
// 🔹 Strings
// 🔹 Symbols

// 🔸 If you use other types (like number, boolean, object, etc.),
//     they are automatically converted to a string (except symbols).

// --------------------------------------------------
// 🔹 1. Number as Key → gets converted to string
// const obj1 = {
//   1: "one",
//   2: "two"
// };
// console.log(obj1[1]);     // "one" (same as obj1["1"])
// console.log(obj1["1"]);   // "one"

// // 🔹 2. Boolean as Key → converted to string
// const obj2 = {
//   true: "yes",
//   false: "no"
// };
// console.log(obj2[true]);      // "yes"
// console.log(obj2["true"]);    // "yes"

// 🔹 3. Object or Array as Key → becomes "[object Object]" or similar
const obj3 = {};
const keyObj = { a: 10 };

obj3[keyObj] = "value"; // keyObj becomes "[object Object]"
console.log(obj3);      // { "[object Object]": "value" }

// 🔹 4. Symbol as Key → stays as symbol (not converted)
const sym = Symbol("id");
const obj4 = {
  [sym]: "secret"
};
console.log(obj4[sym]);         // "secret"
console.log(obj4["id"]);        // undefined

// --------------------------------------------------
// 📌 Summary Table:

/*
| Data Type Used as Key | Actually Stored As      | Notes                          |
|------------------------|--------------------------|--------------------------------|
| String                 | String                   | ✅ Valid                       |
| Number                 | Converted to String      | ✅ Valid                       |
| Boolean                | Converted to String      | ✅ Valid                       |
| Object/Array           | "[object Object]" string | ⚠️ Key collision possible      |
| Symbol                 | Symbol                   | ✅ Unique & safe (not string)  |
*/

// ⚠️ Use Symbols if you need keys that won’t clash accidentally
// ⚠️ Avoid using object/array as keys in normal objects — use Map instead

// --------------------------------------------------
// ✅ Tip: Use Map if you need any type (objects, arrays, etc.) as real keys
/*
const myMap = new Map();
const objKey = { a: 1 };
myMap.set(objKey, "Hello");

console.log(myMap.get(objKey)); // "Hello"
*/
