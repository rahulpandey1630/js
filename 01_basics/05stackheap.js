// Stack and Heap Memory in JavaScript


/*WHAT IS STACK MEMORY?
---------------------
- Fast access memory
- Limited size
- Stores primitive data types
- LIFO (Last-In-First-Out) structure
- Automatic memory management (freed when variable goes out of scope)
- Each variable gets its own value (copy)
 
 
PRIMITIVE DATA TYPES (Stored on Stack):
---------------------------------------
- string
- number
- boolean
- null
- undefined
- symbol (ES6+)
- bigint (ES2020+)
 
 
SECTION 1.1: BASIC STACK MEMORY EXAMPLE
---------------------------------------
 
// Stack Memory (Primitive Data Types) gets a value
// Primitive data types: string, number, boolean, null, undefined, symbol, BigInt
 
const firstVariable = 'javascript'; 
// 'firstVariable' is stored on the stack with the value 'javascript'
 
let secondVariable = firstVariable; 
// 'secondVariable' gets a copy of 'firstVariable' value, also stored on the stack
  
console.log(firstVariable); // Output: 'javascript'
console.log(secondVariable); // Output: 'javascript'
 
 
SECTION 1.2: MODIFYING STACK VARIABLES
--------------------------------------
 
secondVariable = 'javascriptBackend'; 
// Changing 'secondVariable' does not affect 'firstVariable' as it's a copy
 
console.log(firstVariable); // Output: 'javascript'
// 'firstVariable' remains 'javascript' because 'secondVariable' is a copy
 
console.log(secondVariable); // Output: 'javascriptBackend'
// 'secondVariable' is updated independently
 
 
HOW THIS WORKS IN MEMORY:
------------------------
 
Initial State:
┌─────────────────────────┐
│ STACK MEMORY            │
├─────────────────────────┤
│ firstVariable: "js"     │
│ secondVariable: "js"    │
└─────────────────────────┘
 
Assignment secondVariable = firstVariable:
- JavaScript creates a COPY of the value
- firstVariable and secondVariable are independent
- Each has its own value in stack memory
 
After secondVariable = "jsBackend":
┌─────────────────────────┐
│ STACK MEMORY            │
├─────────────────────────┤
│ firstVariable: "js"     │ ← Unchanged
│ secondVariable: "jsB"   │ ← Modified copy
└─────────────────────────┘
 
Result: firstVariable is NOT affected
 
 */

// Heap Memory (Non-Primitive Data Types) gets a reference so change reflect in original
// Non-primitive data types: objects, arrays, functions

const firstObject = { channel: "hiteshChoudhary" }; 
// 'firstObject' is stored on the heap and the variable holds a reference to the heap memory
let secondObject = firstObject; 
// 'secondObject' holds a reference to the same object on the heap

console.log(firstObject); // Output: { channel: "hiteshChoudhary" }
console.log(secondObject); // Output: { channel: "hiteshChoudhary" }

secondObject.channel = "chaiaurcode"; 
// Modifying 'secondObject' affects 'firstObject' because both reference the same object

console.log(firstObject); // Output: { channel: "chaiaurcode" }
// Both 'firstObject' and 'secondObject' reflect the change
console.log(secondObject); // Output: { channel: "chaiaurcode" }
// Both variables still reference the same object

// KEY CHARACTERISTIC OF HEAP:
// ---------------------------
// ✅ Copying a reference does NOT create a new object
// ✅ Both variables point to the SAME object in heap
// ✅ Modifications through one variable affect the other
// ✅ Variables hold memory addresses, not the actual data
// ✅ Garbage collection cleans up when no references exist

// Notes:
// - Stack Memory: Stores primitive data types. Faster access. Copying creates independent variables.
// - Heap Memory: Stores non-primitive data types. Used for dynamic memory allocation. Copying creates references to the same object.




/*COMPREHENSIVE COMPARISON TABLE:
-------------------------------
 
┌────────────────────┬──────────────────────┬──────────────────────┐
│ Characteristic     │ STACK                │ HEAP                 │
├────────────────────┼──────────────────────┼──────────────────────┤
│ Stores             │ Primitives           │ Objects, Arrays      │
│ Speed              │ Faster               │ Slower               │
│ Size               │ Limited              │ Large                │
│ Structure          │ LIFO                 │ Hierarchical         │
│ Access            │ Direct value         │ Reference (address)  │
│ Memory Mgmt        │ Automatic            │ Garbage collection   │
│ Copy behavior      │ Independent copy     │ Reference copy       │
│ Modification       │ Doesn't affect orig  │ Affects original     │
│ Thread safety      │ Usually safe         │ Shared in threads    │
│ Scope             │ Auto freed at scope   │ Auto freed if no ref  │
└────────────────────┴──────────────────────┴──────────────────────┘


*/