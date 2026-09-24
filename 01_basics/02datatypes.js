/*===============================================================================
                    JAVASCRIPT DATA TYPES COMPREHENSIVE GUIDE
===============================================================================

"use strict"; 
// Enforce stricter parsing and error handling in your JavaScript code 
// and treats all JS code as newer version

// Uncomment the next line if running in a browser environment
// alert(3 + 3); // Alerts the sum of 3 + 3 in a browser , cannot use it in this way in node environment has a diff syntax for it in node

console.log(3 + 3); // Prints the sum of 3 + 3 to the console, demonstrating good readability
console.log("Hitesh"); // Prints "Hitesh" to the console


===============================================================================
                        PART 1: VARIABLE DECLARATIONS
===============================================================================

// Variable declarations
let name = "hitesh"; // String variable
let age = 18; // Number variable
let isLoggedIn = false; // Boolean variable
let state; // Undefined variable, as no value is assigned


===============================================================================
                    PART 2: NOTES ON DATA TYPES IN JAVASCRIPT
===============================================================================

// PRIMITIVE DATA TYPES:

// number => Represents both integer and floating-point numbers, can handle values up to 2^53
// Example: let num = 42; let decimal = 3.14;

// bigint => Represents integer values larger than 2^53 - 1
// Example: let big = 12345678901234567890n;

// string => Represents textual data, enclosed in quotes ("",'',``)
// Example: let str = "hello"; let str2 = 'world'; let str3 = `template`;

// boolean => Represents true or false
// Example: let isActive = true; let isDeleted = false;

// null => Represents the intentional absence of any object value, considered a standalone value. 
//         When typeof used it gives object . let v = null; // WE GET UNDEFINED BUT WE GIVE NULL 

// undefined => Represents a variable that has been declared but not assigned a value
// Example: let x; // undefined

// symbol => Represents a unique identifier, often used to add unique property keys to an object
// 🔹 Symbol is a primitive data type introduced in ES6
// 🔹 It is used to create unique identifiers, mostly for object keys
// 🔹 Every Symbol is guaranteed to be unique


===============================================================================
                    PART 3: CONST AND UNDEFINED VALUES
===============================================================================

// ❓ Can const value be undefined?
// ✅ YES, but only if you assign it explicitly
const x = undefined; // Allowed

// ❌ But you CANNOT declare a const without assigning a value
// const y; // ❌ SyntaxError: Missing initializer in const declaration


===============================================================================
                        PART 4: SYMBOL DATA TYPE
===============================================================================

// 🔹 Symbol is a primitive data type introduced in ES6
// 🔹 It is used to create unique identifiers, mostly for object keys
// 🔹 Every Symbol is guaranteed to be unique

// ✅ Creating symbols
const sym1 = Symbol("id"); // symbol with description "id"
const sym2 = Symbol("id"); // different from sym1 even though description is same

// sym1 and sym2 are unique
// console.log(sym1 === sym2); // false
//  typeof Symbol is symbol

// ✅ Using symbol as a unique object key
const id = Symbol("userId");
const user = {
  name: "Harsh",
  [id]: 101  // symbol used as hidden/unique key
};

// console.log(user[id]); // 101

// 🔐 Symbols are not enumerable
// They won't appear in for...in or Object.keys
// Useful for adding non-conflicting hidden properties

// 🔁 Summary:
// - Symbol is a unique and immutable primitive
// - Used for hidden or special keys in objects
// - Not accessible in normal loops
// - Symbol("desc") always creates a new symbol
// - Use Symbol.for("desc") if you want to share symbol globally


===============================================================================
                        PART 5: TYPEOF OPERATOR
===============================================================================

// Using typeof to check the type of variables
console.log(typeof undefined); // Outputs: "undefined"
console.log(typeof null); // Outputs: "object" (this is a historical quirk in JavaScript)
console.log(typeof NaN); // Outputs: "number" 


===============================================================================
                    PART 6: BIGINT DETAILED EXPLANATION
===============================================================================

// BigInt can also be created using the BigInt() function: 
let x = BigInt("12345678901234567890");

// Or by adding 'n' at the end of a number: 
let y = 12345678901234567890n;

// It allows working with very large integers beyond the safe limit of Number in JavaScript.


===============================================================================
                    PART 7: PRIMITIVE vs REFERENCE TYPES
===============================================================================

OVERVIEW:
---------
// Primitive types include number, string, boolean, null, undefined, symbol, and bigint — they store actual values.
// Reference types include objects, arrays, and functions — they store memory addresses (references), not actual values.
// Assigning/copying a primitive creates an independent copy, but copying a reference type links both variables to the same object in memory.
// Example: let a = 10; let b = a; → b is a copy. But let obj1 = {}; let obj2 = obj1; → obj2 and obj1 point to the same object.
// Changing obj2 will also affect obj1, but changing b does not affect a.


===============================================================================
                    PART 8: STACK VS HEAP MEMORY
===============================================================================

STACK (Primitive Types):
------------------------
// Primitive types like number, string, boolean are stored in the stack
let a = 10; // 'a' directly holds the value 10


HEAP (Reference Types):
-----------------------
// Objects like arrays or custom objects are stored in the heap
let obj = { name: "Rahul" }; // 'obj' holds a reference (pointer) to the object in heap


===============================================================================
                PART 9: COPYING PRIMITIVES vs COPYING REFERENCES
===============================================================================

COPYING A PRIMITIVE COPIES THE VALUE:
-------------------------------------
// Copying a primitive copies the value
let b = a; // 'b' is a new copy of 10
b = 20;    // changing 'b' does not affect 'a'


COPYING AN OBJECT COPIES THE REFERENCE:
---------------------------------------
// Copying an object copies the reference, not the object itself
let obj2 = obj; // both obj and obj2 point to the same memory location in heap
obj2.name = "Amit"; // changing obj2 affects obj too

console.log(obj.name); // Output: "Amit"


===============================================================================
                    PART 10: PRIMITIVE TYPES DETAILED EXAMPLE
===============================================================================

// ✅ Primitive Types (number, string, boolean, null, undefined, symbol, bigint)
// - Stored directly in memory (stack)
// - Copying creates a new independent value

let p = 10;
let q = p;
q = 20;

console.log(p); // 10 (not affected by change in q)


===============================================================================
                    PART 11: REFERENCE TYPES DETAILED EXAMPLE
===============================================================================

// ✅ Reference Types (objects, arrays, functions)
// - Stored as reference (address in heap)
// - Copying passes the reference, not actual data

let obj1 = { name: "Harsh" };
let obj3 = obj1; // obj3 points to same object

obj3.name = "Sharma";

console.log(obj1.name); // "Sharma" (affected, because both refer to same object)


===============================================================================
                    PART 12: TYPE CONVERSION - NUMBER TO STRING
===============================================================================

// CONVERT NUMBER TO STRING

let num = 18 + ""; // one way
num = String(num); // other WAY 


===============================================================================
                    PART 13: TYPE CONVERSION - STRING TO NUMBER
===============================================================================

// Convert String to number
let cric = +"34";    
cric = Number(cric);


===============================================================================
                        PART 14: JAVASCRIPT ENGINES
===============================================================================

// V8 is a high-performance JavaScript engine developed by Google that compiles JavaScript into machine code and executes it in Chrome and Node.js.

// Engine  	Browser	  Company
// V8     	Chrome	  Google
// SpiderMonkey  	Firefox	 Mozilla
// JavaScriptCore	 Safari	  Apple
// Chakra	 IE (old)	   Microsoft
// V8  brave


===============================================================================
                        COMPREHENSIVE SUMMARY TABLE
===============================================================================

PRIMITIVE DATA TYPES:
┌──────────────┬────────────────────────────────────────┬──────────────────────┐
│ Type         │ Description                            │ Example              │
├──────────────┼────────────────────────────────────────┼──────────────────────┤
│ number       │ Integer and floating-point numbers     │ 42, 3.14             │
│ string       │ Textual data in quotes                 │ "hello", 'world'     │
│ boolean      │ true or false                          │ true, false          │
│ null         │ Intentional absence of value           │ null                 │
│ undefined    │ Variable declared but not assigned     │ undefined            │
│ symbol       │ Unique identifier (ES6)                │ Symbol("id")         │
│ bigint       │ Large integers beyond 2^53 - 1        │ 123456789n           │
└──────────────┴────────────────────────────────────────┴──────────────────────┘

REFERENCE TYPES:
┌──────────────┬────────────────────────────────────────┬──────────────────────┐
│ Type         │ Description                            │ Example              │
├──────────────┼────────────────────────────────────────┼──────────────────────┤
│ object       │ Collection of key-value pairs          │ { name: "Rahul" }    │
│ array        │ Ordered collection of values           │ [1, 2, 3]           │
│ function     │ Reusable block of code                 │ function() {}        │
└──────────────┴────────────────────────────────────────┴──────────────────────┘


MEMORY STORAGE:
┌──────────────────┬──────────────────┬────────────────────────────────────┐
│ Type Category    │ Storage Location │ What Gets Stored                   │
├──────────────────┼──────────────────┼────────────────────────────────────┤
│ Primitive        │ Stack            │ Actual value directly              │
│ Reference        │ Heap             │ Reference/address to value         │
└──────────────────┴──────────────────┴────────────────────────────────────┘


COPYING BEHAVIOR:
┌──────────────────┬─────────────────────────────────────────────────────┐
│ Type Category    │ Copy Behavior                                       │
├──────────────────┼─────────────────────────────────────────────────────┤
│ Primitive        │ Creates independent copy; changes don't affect orig │
│ Reference        │ Copies reference; changes affect original object   │
└──────────────────┴─────────────────────────────────────────────────────┘


TYPE CHECKING:
┌──────────────┬──────────────────────────────────────┐
│ Type         │ typeof Result                        │
├──────────────┼──────────────────────────────────────┤
│ number       │ "number"                             │
│ string       │ "string"                             │
│ boolean      │ "boolean"                            │
│ null         │ "object" (historical quirk)          │
│ undefined    │ "undefined"                          │
│ symbol       │ "symbol"                             │
│ bigint       │ "bigint"                             │
│ object       │ "object"                             │
│ function     │ "function"                           │
└──────────────┴──────────────────────────────────────┘


TYPE CONVERSION METHODS:
┌──────────────────────────────┬──────────────────────────────────────┐
│ Conversion                   │ Code Example                         │
├──────────────────────────────┼──────────────────────────────────────┤
│ Number to String             │ let num = 18 + ""; or String(num)   │
│ String to Number             │ let str = +"34"; or Number(str)     │
│ BigInt Creation              │ let big = 123n; or BigInt("123")    │
└──────────────────────────────┴──────────────────────────────────────┘


JAVASCRIPT ENGINES REFERENCE:
┌──────────────────┬──────────────┬──────────────────────────────┐
│ Engine Name      │ Browser      │ Company                      │
├──────────────────┼──────────────┼──────────────────────────────┤
│ V8               │ Chrome, Brave│ Google                       │
│ SpiderMonkey     │ Firefox      │ Mozilla                      │
│ JavaScriptCore   │ Safari       │ Apple                        │
│ Chakra           │ IE (old)     │ Microsoft                    │
└──────────────────┴──────────────┴──────────────────────────────┘


KEY CONCEPTS:
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│ ✅ Primitives store ACTUAL VALUES directly in memory (stack)                │
│ ✅ References store ADDRESSES to objects in memory (heap)                   │
│ ✅ Copying a primitive creates an independent copy                          │
│ ✅ Copying a reference links both variables to the same object              │
│ ✅ Symbols are unique identifiers that don't appear in loops                │
│ ✅ BigInt handles very large integers beyond Number.MAX_SAFE_INTEGER       │
│ ✅ null is technically an object type quirk, represents intentional absence │
│ ✅ undefined represents variables declared but not assigned                 │
│ ✅ Use typeof to check variable types                                       │
│ ✅ String concatenation and Number/String() for type conversion             │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

===============================================================================*/