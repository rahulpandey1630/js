/*
===============================================================================
                        JAVASCRIPT OBJECTS – COMPLETE GUIDE
===============================================================================

Objects store data in key-value pairs (name:value pairs inside {}).
Objects are MUTABLE: addressed by reference, not by value.
Keys can only be strings or Symbols (other types convert to string).

Two ways to create objects:
1. Object Literals → NEW unique object each time (NOT singleton)
2. Constructors → can create singleton pattern


===============================================================================
                    SINGLETON vs NOT SINGLETON
===============================================================================

SINGLETON (one instance exists):
Ensures only ONE instance of object exists, shared/reused across code.

const singleton = new Object();
const shared1 = singleton;
const shared2 = singleton;
console.log(shared1 === shared2); // ✅ true (same object)

🧠 Think: Everyone drinks from the SAME water bottle

Use cases: Database connection, Config settings, App state

NOT SINGLETON (new instance each time):
Each {} creates a NEW object, even if contents identical.

let obj1 = { name: "Rahul" };
let obj2 = { name: "Rahul" };
console.log(obj1 === obj2); // ❌ false (different objects)

🧠 Think: Everyone gets their OWN new bottle

Singleton vs Not Singleton Table:
┌─────────────┬──────────────────────────────┬─────────────────────────┐
│ Type        │ Meaning                      │ Example                 │
├─────────────┼──────────────────────────────┼─────────────────────────┤
│ Singleton   │ Only one instance exists     │ const x = new Object(); │
│ Not Single  │ New instance every time      │ const x = {};           │
└─────────────┴──────────────────────────────┴─────────────────────────┘


===============================================================================
                    OBJECT CREATION METHODS
===============================================================================

Object Literals (NOT singleton):
let obj1 = { name: "John" };
let obj2 = { name: "John" };
console.log(obj1 === obj2); // false (two distinct objects)

Constructor (Singleton pattern possible):
const singleton = new Object();
const shared1 = singleton;
const shared2 = singleton;
console.log(shared1 === shared2); // true (same object)

Empty object and add properties:
const person = {};
person.firstName = "John";
person.age = 50;

Constructor with properties:
const person2 = new Object();
person2.firstName = "John";
person2.age = 50;


===============================================================================
                    DEFINING OBJECTS
===============================================================================

With Symbol key (unique property):
const mySym = Symbol("key1");
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",  // Space in key
    [mySym]: "mykey1",                // Symbol key
    age: 18,
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};


===============================================================================
                    KEY-VALUE STRUCTURE
===============================================================================

Objects store data in key-value pairs:
const user = { name: "Rahul", age: 25 };

Each pair: key (property name) : value (property value)


===============================================================================
                    DOT vs BRACKET NOTATION
===============================================================================

DOT NOTATION:
console.log(JsUser.email); // hitesh@google.com
Simple and readable
✅ Works when key is valid identifier

BRACKET NOTATION:
console.log(JsUser["email"]); // hitesh@google.com
✅ Works with spaces in keys
console.log(JsUser["full name"]); // Hitesh Choudhary

✅ Works with dynamic keys
let key = "name";
console.log(user[key]); // Dynamic access

WHEN TO USE BRACKET:
- Key has spaces or special characters
- Key is dynamic (stored in variable)
- Key is number or boolean


ACCESSING PROPERTIES

Symbol access:
console.log(JsUser[mySym]); // mykey1


===============================================================================
                    UPDATING PROPERTIES
===============================================================================

Simple update:
JsUser.email = "hitesh@chatgpt.com";


FREEZING & LOCKING OBJECTS:

Object.freeze() – Makes object completely immutable (no add/modify/delete)
Object.freeze(JsUser);
JsUser.email = "new@email.com"; // Ignored/error in strict mode
delete JsUser.age; // Ignored (cannot delete)
JsUser.newProp = "value"; // Ignored (cannot add)

⚠️ NOTE: freeze() is SHALLOW – nested objects still mutable
const obj = { user: { name: "John" } };
Object.freeze(obj);
obj.user.name = "Jane"; // ✅ Works! (nested object not frozen)

Object.seal() – Prevents adding/deleting, but allows modifying
Object.seal(JsUser);
JsUser.email = "new@email.com"; // ✅ Works (modify allowed)
JsUser.newProp = "value"; // ❌ Cannot add new property
delete JsUser.age; // ❌ Cannot delete property

Object.preventExtensions() – Prevents adding new properties only
Object.preventExtensions(JsUser);
JsUser.email = "new@email.com"; // ✅ Works (modify allowed)
delete JsUser.age; // ✅ Works (delete allowed)
JsUser.newProp = "value"; // ❌ Cannot add new property

CHECK IF FROZEN/SEALED:
Object.isFrozen(JsUser); // true if frozen
Object.isSealed(JsUser); // true if sealed
Object.isExtensible(JsUser); // false if not extensible

COMPARISON TABLE:
┌──────────────────────┬────────┬────────┬────────┬────────┐
│ Operation            │ Freeze │ Seal   │ Prevent│ Normal │
├──────────────────────┼────────┼────────┼────────┼────────┤
│ Modify property      │ ❌     │ ✅     │ ✅     │ ✅     │
│ Add property         │ ❌     │ ❌     │ ❌     │ ✅     │
│ Delete property      │ ❌     │ ❌     │ ✅     │ ✅     │
└──────────────────────┴────────┴────────┴────────┴────────┘


===============================================================================
                    ADDING METHODS & 'this' KEYWORD
===============================================================================

Method without 'this':
JsUser.greeting = function() {
    console.log("Hello JS user");
};

JsUser.greeting(); // Hello JS user

Method with 'this' (access object properties):
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

JsUser.greetingTwo(); // Hello JS user, Hitesh

UNDERSTANDING 'this':
'this' refers to the CURRENT OBJECT context
When method called on object, 'this' = that object

Example with multiple properties:
const user = {
    name: "Rahul",
    age: 25,
    email: "rahul@example.com",
    
    displayInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    },
    
    getEmail: function() {
        return this.email; // 'this' = user object
    },
    
    updateEmail: function(newEmail) {
        this.email = newEmail; // Modify current object
        console.log(`Email updated to ${this.email}`);
    }
};

user.displayInfo(); // Name: Rahul, Age: 25
console.log(user.getEmail()); // rahul@example.com
user.updateEmail("newemail@example.com"); // Email updated...

PROBLEM: 'this' changes based on context
const greeting = user.greetingTwo;
greeting(); // 'this' is undefined or global object (not user!)

SOLUTION: Use .bind() to fix 'this'
const boundGreeting = user.greetingTwo.bind(user);
boundGreeting(); // Now 'this' correctly refers to user

SUMMARY:
✅ Use 'this' to reference current object's properties
✅ 'this' only works correctly when method called on object
✅ Use .bind() to fix 'this' when passing methods around
✅ Arrow functions don't have their own 'this'


===============================================================================
                    NESTED OBJECTS & DESTRUCTURING
===============================================================================

Nested access:
const deepUser = {
    name: "Rahul",
    address: { city: "Delhi", pin: 110001 }
};
console.log(deepUser.address.city); // Delhi

Destructuring:
const { name, age } = user;
console.log(name, age); // Rahul 25


===============================================================================
                    LOOPING THROUGH OBJECTS
===============================================================================

for-in loop:
for (let key in profile) {
    console.log(key, profile[key]);
}

Object.keys():
Object.keys(profile).forEach(k => console.log(k));

Object.entries():
for (let [k, v] of Object.entries(profile)) {
    console.log(`${k}: ${v}`);
}


===============================================================================
                    WHY DEEP CLONE IS NEEDED
===============================================================================

When copying objects with nested structures, only top-level is cloned.
Nested objects still point to original memory address.

🔥 PROBLEM: SHALLOW COPY (nested objects stay linked)

const original = {
    name: "Rahul",
    address: { city: "Delhi" }
};

// Shallow copy using spread operator
const copy = { ...original };

// Modify nested object in copy
copy.address.city = "Mumbai";

console.log(original.address.city); // ❌ "Mumbai" (AFFECTED!)
// Both 'copy' and 'original' point to same address object

⚠️ Only top-level was cloned.
   Nested 'address' is still passed by reference.


===============================================================================
                    COPYING OBJECTS – METHODS
===============================================================================

METHOD 1: SPREAD OPERATOR (Shallow copy)
const copied1 = { ...user };

METHOD 2: OBJECT.ASSIGN() (Shallow copy)
const copied2 = Object.assign({}, obj1, obj2);
const result = Object.assign({}, obj1, obj2, { d: 4 });
// ✅ Output: { a: 1, b: 2, c: 3, d: 4 }

METHOD 3: REFERENCE COPY (not a real copy)
let original = { hobby: "coding" };
let refCopy = original;
refCopy.hobby = "gaming";
console.log(original.hobby); // "gaming" (same reference)

METHOD 4: STRUCTUREDCLONE() (Deep copy – BEST MODERN)
✅ Copies nested objects completely
✅ Breaks all references
✅ Safe for complex objects

const original = {
    name: "Rahul",
    address: { city: "Delhi" }
};

const deepCopy = structuredClone(original);
deepCopy.address.city = "Mumbai";
console.log(original.address.city); // ✅ "Delhi" (UNCHANGED)

METHOD 5: JSON.STRINGIFY/PARSE (Deep copy – works for simple objects)
Step-by-step:
1. JSON.stringify(obj) → converts object to JSON string
   Example: { name: "Rahul", details: { city: "Delhi" } }
   Becomes: '{"name":"Rahul","details":{"city":"Delhi"}}'

2. JSON.parse(...) → converts JSON string back to new object
   Now it's a deep copy with no reference links

const jsonClone = JSON.parse(JSON.stringify(original));
jsonClone.address.city = "Bangalore";
console.log(original.address.city); // ✅ "Delhi" (UNCHANGED)

✅ Breaks all references between original and copy


===============================================================================
                    JSON DEEP CLONE – LIMITATIONS & CAVEATS
===============================================================================

⚠️ JSON method doesn't support:

const originalObj = {
    name: "Rahul",
    details: { city: "Delhi" },
    greet: () => "Hi",               // ❌ Will be LOST
    id: undefined,                   // ❌ Will be REMOVED
    joinDate: new Date(),            // ⚠️ Becomes string
    [Symbol("token")]: "abc123"      // ❌ Will be REMOVED
};

const deepCopy = JSON.parse(JSON.stringify(originalObj));

deepCopy.details.city = "Mumbai";
console.log(originalObj.details.city); // ✅ "Delhi"
console.log(deepCopy.details.city);    // "Mumbai"

🔴 WHAT GETS LOST IN JSON DEEP CLONE:
- ❌ Functions/methods
- ❌ undefined values
- ❌ Symbol properties
- ❌ Special types (Date, Map, Set, WeakMap, WeakSet)
- ❌ Prototype chain and class methods

✅ WHEN TO USE JSON METHOD:
- Simple data objects (strings, numbers, booleans, arrays)
- No functions, dates, symbols, or undefined
- Quick deep clone for basic objects

❗ DON'T USE for objects containing:
   Methods (functions)
   Dates
   Maps, Sets
   Undefined values
   Symbols
   Or complex types


===============================================================================
                    SHALLOW vs DEEP COPY SUMMARY TABLE
===============================================================================

┌─────────────────────────┬────────────────┬──────────────┬─────────────────────────┐
│ Copy Method             │ Copies Nested? │ Safe?        │ Use Case                │
├─────────────────────────┼────────────────┼──────────────┼─────────────────────────┤
│ Spread {...obj}         │ ❌ No          │ ❌ No        │ Simple objects only     │
│ Object.assign()         │ ❌ No          │ ❌ No        │ Simple objects only     │
│ structuredClone()       │ ✅ Yes         │ ✅ Yes       │ Best for complex types  │
│ JSON.stringify/parse    │ ✅ Yes         │ ⚠️ No        │ Simple objects only     │
│ Reference copy (=)      │ N/A            │ ❌ No        │ Avoid                   │
└─────────────────────────┴────────────────┴──────────────┴─────────────────────────┘


===============================================================================
                    WHEN TO USE DEEP CLONING
===============================================================================

Use deep cloning when your object has:
✅ Nested objects or arrays
✅ Want to avoid affecting original when modifying copy
✅ Need to work with complex/special types (use structuredClone)

Common patterns:
// React state updates
const newState = structuredClone(oldState);
newState.user.name = "Changed";

// Database operations
const backup = structuredClone(data);
modifyData(data); // Original stays safe


===============================================================================
                    OPTIONAL CHAINING & COMPUTED PROPERTIES
===============================================================================

Optional chaining (?.) – avoid errors if property missing:
console.log(deepUser?.address?.pin); // 110001
console.log(deepUser?.contact?.email); // undefined (no error)

Computed properties – dynamic keys:
let dynamicKey = "score";
const student = { [dynamicKey]: 95 };
console.log(student.score); // 95


===============================================================================
                    JAVASCRIPT OBJECT KEY RULES
===============================================================================

KEY RULE: Object keys can ONLY be:
🔹 Strings
🔹 Symbols

ALL other types are automatically converted to STRING (except Symbols).

---

RULE 1: NUMBER AS KEY → Converted to String

const obj1 = {
    1: "one",
    2: "two"
};

console.log(obj1[1]);      // "one" (same as obj1["1"])
console.log(obj1["1"]);    // "one"

⚠️ Both numeric and string access work (same key after conversion)

---

RULE 2: BOOLEAN AS KEY → Converted to String

const obj2 = {
    true: "yes",
    false: "no"
};

console.log(obj2[true]);      // "yes"
console.log(obj2["true"]);    // "yes" (same key)

---

RULE 3: OBJECT/ARRAY AS KEY → Becomes "[object Object]"

const obj3 = {};
const keyObj = { a: 10 };

obj3[keyObj] = "value";
console.log(obj3); // { "[object Object]": "value" }

⚠️ PROBLEM: Multiple objects become same "[object Object]" key
Multiple keys collide, causing data loss!

---

RULE 4: SYMBOL AS KEY → Stays as Symbol (NOT Converted)

const sym = Symbol("id");
const obj4 = {
    [sym]: "secret"
};

console.log(obj4[sym]);      // "secret"
console.log(obj4["id"]);     // undefined (not converted)

✅ Symbol keys are unique, no collision possible

---

COMPREHENSIVE KEY RULES TABLE:

┌──────────────────┬─────────────────────┬──────────────┬──────────────────────┐
│ Data Type Used   │ Actually Stored As  │ Safe?        │ Notes                │
├──────────────────┼─────────────────────┼──────────────┼──────────────────────┤
│ String           │ String              │ ✅ Yes       │ Valid                │
│ Number           │ String (converted)  │ ✅ Yes       │ Valid after convert  │
│ Boolean          │ String (converted)  │ ✅ Yes       │ Valid after convert  │
│ Object/Array     │ "[object Object]"   │ ❌ No        │ Collision risk!      │
│ Symbol           │ Symbol              │ ✅ Yes       │ Unique & safe        │
└──────────────────┴─────────────────────┴──────────────┴──────────────────────┘

---

BEST PRACTICES:

⚠️ AVOID using objects/arrays as keys in normal objects
   → Multiple objects become same "[object Object]" key
   → Data loss and collisions

✅ USE Symbols if you need unique, collision-proof keys

✅ USE Map if you need objects/arrays as real keys
const myMap = new Map();
const objKey = { a: 1 };
myMap.set(objKey, "Hello");
console.log(myMap.get(objKey)); // "Hello" ✅ Objects work as keys


===============================================================================
                    QUICK REFERENCE
===============================================================================

OBJECT TYPES:
- {} object literal → NOT singleton (new instance each time)
- new Object() → CAN be singleton (reused instance)

CREATING & ACCESSING:
- dot: obj.key (simple, readable)
- bracket: obj["key"] (spaces, dynamic keys)
- symbol: obj[symbol] (unique)

MODIFYING:
- obj.key = value
- Object.freeze(obj) → prevent changes (immutable)

METHODS & 'this':
- obj.method = function() { ... }
- Use 'this' to reference current object properties

LOOPING METHODS:
- for (let key in obj) { ... } → loops keys
- Object.keys(obj) → returns array of keys
- Object.entries(obj) → returns [key, value] pairs

DESTRUCTURING:
- const { name, age } = obj

COPYING METHODS:
┌──────────────────────┬──────────────┬────────────────────┐
│ Method               │ Shallow/Deep │ Best For           │
├──────────────────────┼──────────────┼────────────────────┤
│ Spread {...obj}      │ Shallow      │ Simple objects     │
│ Object.assign()      │ Shallow      │ Simple objects     │
│ structuredClone()    │ Deep         │ Complex objects ✅ │
│ JSON stringify/parse │ Deep         │ Simple objects     │
│ Reference (=)        │ Reference    │ ❌ Avoid           │
└──────────────────────┴──────────────┴────────────────────┘

OPTIONAL CHAINING:
- obj?.key?.property → safely access nested, returns undefined if missing
- Avoids errors when property doesn't exist

COMPUTED PROPERTIES:
- {[dynamicKey]: value} → key from variable
- Useful when key name is dynamic

NESTING & DEEP ACCESS:
- obj.address.city → dot chaining
- obj?.address?.city → safe dot chaining

KEY TYPE RULES:
- Strings ✅ (stored as-is)
- Symbols ✅ (unique, not converted)
- Numbers → string (converted, "1" same as 1)
- Boolean → string (converted, "true" same as true)
- Objects/Arrays → "[object Object]" ❌ (collision risk, avoid)

SYMBOLS:
- const sym = Symbol("desc")
- Used for unique, collision-proof keys
- [[sym]]: value → computed Symbol key
- obj[sym] to access

IMPORTANT NOTES:
✅ Objects are mutable and addressed by REFERENCE
✅ const works with objects (reference is constant, contents can change)
✅ Shallow copy only clones top-level (nested objects still linked)
✅ Deep copy needed for nested objects to be independent
✅ structuredClone() is safest for complex objects
✅ JSON method loses functions, symbols, undefined, Date objects
✅ Use Map for objects/arrays as real keys
✅ Symbols prevent accidental key collisions

===============================================================================
*/