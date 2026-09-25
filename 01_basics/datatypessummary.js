/*
===============================================================================
                    JAVASCRIPT DATA TYPES – CONCISE GUIDE
===============================================================================

JavaScript is a DYNAMICALLY TYPED language.
Variable types are determined at runtime, not at declaration.


===============================================================================
                    PRIMITIVE TYPES (7 TYPES)
===============================================================================

1. STRING
const score = 100; // Number

2. NUMBER (integer and decimal)
const scoreValue = 100.3; // Number

3. BOOLEAN
const isLoggedIn = false; // Boolean

4. NULL
const outsideTemp = null; // Special primitive type (intentional absence)

5. UNDEFINED
let userEmail; // Variable declared but not assigned

6. SYMBOL (ES6+)
Unique and immutable identifiers
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false (each Symbol is unique)

7. BIGINT (ES2020+)
Large integers beyond Number.MAX_SAFE_INTEGER
const bigNumber = 3456543576654356754n;


===============================================================================
                    REFERENCE TYPES (NON-PRIMITIVE)
===============================================================================

ARRAYS
const heros = ["shaktiman", "naagraj", "doga"];

OBJECTS
let myObj = {
    name: "hitesh",
    age: 22,
};

FUNCTIONS (Function expressions)
const myFunction = function() {
    console.log("Hello world");
};

FUNCTIONS (Function declarations)
function greet(name) {
    console.log('hello' + name);
}
greet('rahul');


===============================================================================
                    TYPEOF OPERATOR
===============================================================================

console.log(typeof 100); // "number"
console.log(typeof "string"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol('id')); // "symbol"
console.log(typeof 123n); // "bigint"
console.log(typeof null); // "object" (historical quirk, not actually object)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are objects)
console.log(typeof function(){}); // "function"


TYPEOF RESULTS:

Type                typeof Result
────────────────────────────────
String              "string"
Number              "number"
Boolean             "boolean"
Undefined           "undefined"
Symbol              "symbol"
BigInt              "bigint"
Object              "object"
Array               "object" ← (arrays are objects)
Function            "function" ← (special object type)
null                "object" ← (historical bug)


===============================================================================
                    DYNAMIC TYPING EXAMPLE
===============================================================================

let score = 100;
console.log(typeof score); // "number"

score = "One Hundred"; // Reassigned to string
console.log(typeof score); // "string"

score = true; // Reassigned to boolean
console.log(typeof score); // "boolean"

KEY POINT:
JavaScript allows changing variable types at runtime.
This is called dynamic typing (no type enforcement).


===============================================================================
                    QUICK REFERENCE
===============================================================================

PRIMITIVES (Stored on Stack):
- String: "text"
- Number: 42, 3.14
- Boolean: true, false
- null: intentional absence
- undefined: no value assigned
- Symbol: unique identifier
- BigInt: large integers

REFERENCE TYPES (Stored on Heap):
- Object: {...}
- Array: [...]
- Function: function() {}

CHARACTERISTICS:
✅ Primitives: Independent copies when assigned
✅ References: Share same object when assigned
✅ typeof shows variable type
✅ null returns "object" (bug, not actual object)
✅ Arrays return "object" (arrays are objects)
✅ Functions return "function" (special object type)

===============================================================================
*/